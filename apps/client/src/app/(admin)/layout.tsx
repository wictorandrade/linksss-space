import { requireAdmin } from '@/lib/sso'
import { QueryProvider } from '@/lib/query-client'
import { AdminLayout } from '@/components/admin/AdminLayout'

export default async function AdminRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await requireAdmin()

  return (
    <QueryProvider>
      <AdminLayout user={user}>{children}</AdminLayout>
    </QueryProvider>
  )
}