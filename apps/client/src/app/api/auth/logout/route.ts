import { performLogout, getSsoLoginUrl } from '@/lib/sso'

export async function POST() {
  await performLogout()

  return Response.json({
    redirectUrl: getSsoLoginUrl(),
  })
}