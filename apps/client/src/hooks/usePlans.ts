'use client'

import { useQuery } from '@tanstack/react-query'
import { plansApi, templatesApi, couponsApi } from '@/lib/api'

// Plans
export function usePlans() {
  return useQuery({
    queryKey: ['plans'],
    queryFn: async () => {
      const { data } = await plansApi.getAll()
      return data
    },
  })
}

export function usePlan(id: string) {
  return useQuery({
    queryKey: ['plans', id],
    queryFn: async () => {
      const { data } = await plansApi.getById(id)
      return data
    },
    enabled: !!id,
  })
}

// Templates
export function useTemplates() {
  return useQuery({
    queryKey: ['templates'],
    queryFn: async () => {
      const { data } = await templatesApi.getAll()
      return data
    },
  })
}

export function useFeaturedTemplates() {
  return useQuery({
    queryKey: ['templates', 'featured'],
    queryFn: async () => {
      const { data } = await templatesApi.getFeatured()
      return data
    },
  })
}

export function useTemplate(slug: string) {
  return useQuery({
    queryKey: ['templates', slug],
    queryFn: async () => {
      const { data } = await templatesApi.getBySlug(slug)
      return data
    },
    enabled: !!slug,
  })
}

// Coupons
export function useValidateCoupon(code: string) {
  return useQuery({
    queryKey: ['coupon', code],
    queryFn: async () => {
      const { data } = await couponsApi.validate(code)
      return data
    },
    enabled: code.length >= 3,
  })
}