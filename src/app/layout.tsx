import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/ThemeProvider'
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <main
          className="
            min-h-screen
            bg-slate-100
            text-gray-800 
            dark:bg-slate-900
            dark:text-gray-50 "
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  )
}
