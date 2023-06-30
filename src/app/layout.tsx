import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Vote',
  description: 'Your voting sessions made easy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <main className=" bg-zinc-900 text-zinc-50 min-h-screen ">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
