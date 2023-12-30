import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
            <ThemeProvider 
              attribute='class'
              defaultTheme='light'
              enableSystem
              disableTransitionOnChange
              storageKey='noter-app'>
                <Toaster position='bottom-center'/>
              {children}
            </ThemeProvider>
      </body>
    </html>
  )
}
