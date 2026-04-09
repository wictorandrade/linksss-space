import { requireAuth } from '@/lib/sso'
import { QueryProvider } from '@/lib/query-client'
import { DashboardLayout } from '@/components/dashboard/DashboardLayout'

export default async function PlataformRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await requireAuth()

  return (
    <QueryProvider>
      <DashboardLayout user={user}>{children}</DashboardLayout>
    </QueryProvider>
  )
}