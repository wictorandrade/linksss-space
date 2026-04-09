'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { linksApi } from '@/lib/api'

// Get links for a page
export function useLinks(pageId: string) {
  return useQuery({
    queryKey: ['links', pageId],
    queryFn: async () => {
      const { data } = await linksApi.getByPage(pageId)
      return data
    },
    enabled: !!pageId,
  })
}

// Create link
export function useCreateLink() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: linksApi.create,
    onSuccess: (_, { pageId }) => {
      queryClient.invalidateQueries({ queryKey: ['links', pageId] })
    },
  })
}

// Update link
export function useUpdateLink() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Record<string, unknown> }) =>
      linksApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['links'] })
    },
  })
}

// Delete link
export function useDeleteLink() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: linksApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['links'] })
    },
  })
}

// Reorder links
export function useReorderLinks() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: linksApi.reorder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['links'] })
    },
  })
}