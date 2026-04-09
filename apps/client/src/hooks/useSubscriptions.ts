'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { subscriptionsApi, adminApi } from '@/lib/api'

// User subscription
export function useSubscription() {
  return useQuery({
    queryKey: ['subscription'],
    queryFn: async () => {
      const { data } = await subscriptionsApi.getCurrent()
      return data
    },
  })
}

// Create checkout session
export function useCreateCheckout() {
  return useMutation({
    mutationFn: ({ planId, couponCode }: { planId: string; couponCode?: string }) =>
      subscriptionsApi.createCheckout(planId, couponCode),
    onSuccess: (data) => {
      // Redirect to Stripe checkout
      if (data.data?.url) {
        window.location.href = data.data.url
      }
    },
  })
}

// Cancel subscription
export function useCancelSubscription() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: subscriptionsApi.cancel,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['subscription'] })
    },
  })
}

// Admin: Get all plans
export function useAdminPlans() {
  return useQuery({
    queryKey: ['admin', 'plans'],
    queryFn: async () => {
      const { data } = await adminApi.getPlans()
      return data
    },
  })
}

// Admin: Get all coupons
export function useAdminCoupons() {
  return useQuery({
    queryKey: ['admin', 'coupons'],
    queryFn: async () => {
      const { data } = await adminApi.getCoupons()
      return data
    },
  })
}

// Admin: Create coupon
export function useCreateCoupon() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: adminApi.createCoupon,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'coupons'] })
    },
  })
}

// Admin: Get all users
export function useAdminUsers(search?: string) {
  return useQuery({
    queryKey: ['admin', 'users', search],
    queryFn: async () => {
      const { data } = await adminApi.getUsers({ search, limit: 50 })
      return data
    },
  })
}

// Admin: Get all grants
export function useAdminGrants() {
  return useQuery({
    queryKey: ['admin', 'grants'],
    queryFn: async () => {
      const { data } = await adminApi.getGrants()
      return data
    },
  })
}

// Admin: Create grant
export function useCreateGrant() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ userId, planId, reason, expiresAt }: {
      userId: string
      planId: string
      reason?: string
      expiresAt?: string
    }) => adminApi.grantAccess(userId, planId, reason, expiresAt),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'grants'] })
      queryClient.invalidateQueries({ queryKey: ['admin', 'users'] })
    },
  })
}

// Admin: Get dashboard stats
export function useAdminDashboardStats() {
  return useQuery({
    queryKey: ['admin', 'stats'],
    queryFn: async () => {
      const { data } = await adminApi.getDashboardStats()
      return data
    },
  })
}

// Admin: Get top pages
export function useAdminTopPages(limit = 10) {
  return useQuery({
    queryKey: ['admin', 'top-pages', limit],
    queryFn: async () => {
      const { data } = await adminApi.getTopPages(limit)
      return data
    },
  })
}