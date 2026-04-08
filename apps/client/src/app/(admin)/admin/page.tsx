import { redirect } from 'next/navigation'
import { AdminLayout } from '@/components/admin/AdminLayout'

// TODO: Add proper auth check
export default function AdminRootPage() {
  redirect('/admin/plans')
}