import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5002/api'
const SSO_API_URL = process.env.NEXT_PUBLIC_SSO_API_URL || 'http://localhost:5000'
const SSO_URL = process.env.NEXT_PUBLIC_SSO_URL || 'http://localhost:3000'
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3002'

// Main API client
const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

// SSO API client for token refresh
const ssoApi: AxiosInstance = axios.create({
  baseURL: SSO_API_URL,
  withCredentials: true,
})

// Queue for failed requests during refresh
type FailedRequest = {
  resolve: (value: unknown) => void
  reject: (reason: unknown) => void
}

let isRefreshing = false
let failedQueue: FailedRequest[] = []

const processQueue = (error: unknown = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error)
    } else {
      prom.resolve(null)
    }
  })
  failedQueue = []
}

// Response interceptor for 401 handling
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean }

    // Don't retry if not 401 or already retried
    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error)
    }

    // If already refreshing, queue this request
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject })
      }).then(() => api(originalRequest))
    }

    originalRequest._retry = true
    isRefreshing = true

    try {
      // Try to refresh token via SSO
      await ssoApi.post('/auth/refresh')
      processQueue()
      return api(originalRequest)
    } catch (refreshError) {
      processQueue(refreshError)
      // Redirect to SSO login
      if (typeof window !== 'undefined') {
        window.location.href = `${SSO_URL}?redirect_uri=${encodeURIComponent(APP_URL)}`
      }
      return Promise.reject(refreshError)
    } finally {
      isRefreshing = false
    }
  }
)

// SSO redirect helper
export function redirectToSSO() {
  if (typeof window !== 'undefined') {
    window.location.href = `${SSO_URL}?redirect_uri=${encodeURIComponent(APP_URL)}`
  }
}

// Logout helper
export async function logout() {
  try {
    await ssoApi.post('/auth/logout')
  } catch (e) {
    // Ignore logout errors
  }
  redirectToSSO()
}

export { api, ssoApi }
export default api