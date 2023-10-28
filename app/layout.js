import { Inter } from 'next/font/google'
import Nav from './components/Nav'
import './globals.css'
import ThemeContextProvider from './context/useThemeContext'
import { Providers } from './providers/providers'
import AuthProvider from './providers/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie Search App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <Providers>
              <Nav />
              {children}
            </Providers>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
