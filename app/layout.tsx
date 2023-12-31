import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar/page'
import MenuLateral from './components/templates/MenuLateral'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VincPEF',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <MenuLateral />
        {children}
        </body>
    </html>
  )
}
