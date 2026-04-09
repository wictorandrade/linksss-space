'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { pagesApi } from '@/lib/api'

// Get all pages for current user
export function usePages() {
  return useQuery({
    queryKey: ['pages'],
    queryFn: async () => {
      const { data } = await pagesApi.getAll()
      return data
    },
  })
}

// Get single page by ID
export function usePage(id: string) {
  return useQuery({
    queryKey: ['pages', id],
    queryFn: async () => {
      const { data } = await pagesApi.getById(id)
      return data
    },
    enabled: !!id,
  })
}

// Get public page by slug
export function usePublicPage(slug: string) {
  return useQuery({
    queryKey: ['public-page', slug],
    queryFn: async () => {
      const { data } = await pagesApi.getBySlug(slug)
      return data
    },
    enabled: !!slug,
  })
}

// Create page
export function useCreatePage() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: pagesApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pages'] })
    },
  })
}

// Update page
export function useUpdatePage() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Record<string, unknown> }) =>
      pagesApi.update(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['pages'] })
      queryClient.invalidateQueries({ queryKey: ['pages', id] })
    },
  })
}

// Delete page
export function useDeletePage() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: pagesApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pages'] })
    },
  })
}

// Check slug availability
export function useCheckSlug(slug: string) {
  return useQuery({
    queryKey: ['check-slug', slug],
    queryFn: async () => {
      const { data } = await pagesApi.checkSlug(slug)
      return data
    },
    enabled: slug.length >= 3,
  })
}