'use client'

import { useQuery } from '@tanstack/react-query'
import { analyticsApi } from '@/lib/api'

// Get page analytics
export function usePageAnalytics(pageId: string, days = 30) {
  return useQuery({
    queryKey: ['analytics', pageId, days],
    queryFn: async () => {
      const { data } = await analyticsApi.getPageAnalytics(pageId, days)
      return data
    },
    enabled: !!pageId,
  })
}

// Get link clicks
export function useLinkClicks(pageId: string, days = 30) {
  return useQuery({
    queryKey: ['analytics', 'clicks', pageId, days],
    queryFn: async () => {
      const { data } = await analyticsApi.getLinkClicks(pageId, days)
      return data
    },
    enabled: !!pageId,
  })
}