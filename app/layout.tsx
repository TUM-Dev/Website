import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ThemeProvider } from 'next-themes'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Open Source @ TUM',
  description: 'Wir arbeiten an verschiedenen Open Source Projekten rund um Universitäts-Infrastruktur, organisieren Veranstaltungen und bieten Workshops an.',
}

interface RootLayoutProps {
  children: React.ReactNode
}
export default async function RootLayout({ children }: Readonly<RootLayoutProps>) {
   return (
     <html lang="de" suppressHydrationWarning>
      <body className="min-h-screen dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800 bg-gradient-to-br from-slate-50 to-gray-100">
        <ThemeProvider attribute="class">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
