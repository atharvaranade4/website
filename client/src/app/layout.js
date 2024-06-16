import './globals.css'
import { Inter } from 'next/font/google'
import Menu from '@/components/menu'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Atharva Ranade',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}