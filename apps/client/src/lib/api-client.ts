import axios from 'axios'

const SSO_URL = process.env.NEXT_PUBLIC_SSO_URL || 'http://localhost:3000'
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3002'
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5002/api'

// API client for backend
export const api = axios.create({
  baseURL: API_URL,
})

// SSO redirect helper
export function redirectToSSO() {
  if (typeof window !== 'undefined') {
    window.location.href = `${SSO_URL}?redirect_uri=${encodeURIComponent(APP_URL)}`
  }
}

// Logout helper - calls client API route which forwards to SSO
export async function logout() {
  try {
    await axios.post('/api/auth/logout')
  } catch (e) {
    // Ignore logout errors
  }
  redirectToSSO()
}