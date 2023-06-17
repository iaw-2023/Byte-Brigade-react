import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import {Metadata} from 'next';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'El Corchazo',
  description: 'Esto no es un pedido de ayuda.',
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
