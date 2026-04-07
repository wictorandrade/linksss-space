import axios, { AxiosError, AxiosInstance } from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5002/api'
const SSO_API_URL = process.env.NEXT_PUBLIC_SSO_API_URL || 'http://localhost:5000'
const SSO_URL = process.env.NEXT_PUBLIC_SSO_URL || 'http://localhost:3000'
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3002'

// Main API client
export const api: AxiosInstance = axios.create({
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

    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error)
    }

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject })
      }).then(() => api(originalRequest))
    }

    originalRequest._retry = true
    isRefreshing = true

    try {
      await ssoApi.post('/auth/refresh')
      processQueue()
      return api(originalRequest)
    } catch (refreshError) {
      processQueue(refreshError)
      if (typeof window !== 'undefined') {
        window.location.href = `${SSO_URL}?redirect_uri=${encodeURIComponent(APP_URL)}`
      }
      return Promise.reject(refreshError)
    } finally {
      isRefreshing = false
    }
  }
)

// ============ USER API ============
export const userApi = {
  getMe: () => api.get('/auth/me'),
  updateProfile: (data: { name?: string; avatarUrl?: string }) =>
    api.patch('/users/me', data),
}

// ============ PAGES API ============
export const pagesApi = {
  getAll: () => api.get('/pages'),
  getById: (id: string) => api.get(`/pages/${id}`),
  getBySlug: (slug: string) => api.get(`/pages/public/${slug}`),
  create: (data: {
    slug: string
    title: string
    description?: string
    bio?: string
    avatarUrl?: string
    theme?: Record<string, unknown>
  }) => api.post('/pages', data),
  update: (id: string, data: Record<string, unknown>) => api.put(`/pages/${id}`, data),
  delete: (id: string) => api.delete(`/pages/${id}`),
  checkSlug: (slug: string) => api.get(`/pages/check-slug/${slug}`),
}

// ============ LINKS API ============
export const linksApi = {
  getByPage: (pageId: string) => api.get(`/links/page/${pageId}`),
  create: (data: {
    pageId: string
    title: string
    url: string
    type?: string
    icon?: string
    style?: Record<string, unknown>
  }) => api.post('/links', data),
  update: (id: string, data: Record<string, unknown>) => api.put(`/links/${id}`, data),
  delete: (id: string) => api.delete(`/links/${id}`),
  reorder: (links: { id: string; position: number }[]) =>
    api.put('/links/reorder', { links }),
  trackClick: (id: string, data: { referrer?: string; device?: string }) =>
    api.post(`/links/${id}/click`, data),
}

// ============ PLANS API ============
export const plansApi = {
  getAll: () => api.get('/plans'),
  getById: (id: string) => api.get(`/plans/${id}`),
}

// ============ SUBSCRIPTIONS API ============
export const subscriptionsApi = {
  getCurrent: () => api.get('/subscriptions'),
  createCheckout: (planId: string, couponCode?: string) =>
    api.post('/subscriptions/checkout', { planId, couponCode }),
  cancel: () => api.post('/subscriptions/cancel'),
}

// ============ COUPONS API ============
export const couponsApi = {
  validate: (code: string) => api.get(`/coupons/validate/${code}`),
}

// ============ TEMPLATES API ============
export const templatesApi = {
  getAll: () => api.get('/templates'),
  getFeatured: () => api.get('/templates/featured'),
  getBySlug: (slug: string) => api.get(`/templates/${slug}`),
}

// ============ ANALYTICS API ============
export const analyticsApi = {
  getPageAnalytics: (pageId: string, days = 30) =>
    api.get(`/analytics/page/${pageId}?days=${days}`),
  getLinkClicks: (pageId: string, days = 30) =>
    api.get(`/analytics/page/${pageId}/links?days=${days}`),
  trackView: (slug: string, data: { referrer?: string; device?: string }) =>
    api.post(`/analytics/track/${slug}`, data),
}

// ============ ADMIN API ============
export const adminApi = {
  // Plans
  getPlans: () => api.get('/admin/plans'),
  createPlan: (data: Record<string, unknown>) => api.post('/admin/plans', data),
  updatePlan: (id: string, data: Record<string, unknown>) => api.put(`/admin/plans/${id}`, data),
  deletePlan: (id: string) => api.delete(`/admin/plans/${id}`),

  // Coupons
  getCoupons: () => api.get('/admin/coupons'),
  createCoupon: (data: Record<string, unknown>) => api.post('/admin/coupons', data),
  updateCoupon: (id: string, data: Record<string, unknown>) => api.put(`/admin/coupons/${id}`, data),
  deleteCoupon: (id: string) => api.delete(`/admin/coupons/${id}`),

  // Users
  getUsers: (params?: { search?: string; limit?: number; offset?: number }) =>
    api.get('/admin/users', { params }),
  getUser: (id: string) => api.get(`/admin/users/${id}`),
  grantAccess: (userId: string, planId: string, reason?: string, expiresAt?: string) =>
    api.post(`/admin/users/${userId}/grant`, { planId, reason, expiresAt }),

  // Grants
  getGrants: () => api.get('/admin/grants'),
  deleteGrant: (id: string) => api.delete(`/admin/grants/${id}`),

  // Analytics
  getDashboardStats: () => api.get('/admin/analytics/dashboard'),
  getTopPages: (limit = 10) => api.get(`/admin/analytics/top-pages?limit=${limit}`),
}

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

export { ssoApi }
export default api