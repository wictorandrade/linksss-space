import { Navbar } from '@/components/comercial/Navbar'
import { Footer } from '@/components/comercial/Footer'

export default function ComercialLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}