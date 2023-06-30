import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Vote',
  description: 'Your voting sessions made easy',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main
          className="
          min-h-screen
          bg-slate-100
          text-gray-800 
          dark:bg-slate-900
          dark:text-gray-50 "
        >
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
