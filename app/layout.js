import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'El Corchazo',
  description: 'Esto no es un pedido de ayuda.',
  favicon: '/favicon.ico'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header>
        <Navbar />
      </header>
      {children}
      </body>
    </html>
  )
}
