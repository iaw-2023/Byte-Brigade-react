import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
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
        <div className="flex flex-col w-full h-screen min-h-screen justify-between">
          <header className="mb-8">
            <Navbar />
          </header>
          <main className="container mx-auto grow">
            {children}
          </main>
          <footer className="mt-24">
            <div className="flex flex-col justify-end w-full items-center min-h-full">
              <Link href="/" className="my-4"><p className="text-gray-900 font-serif text-2xl md:text-3xl lg:text-4xl">El Corchazo</p></Link>
              <div className="flex justify-center border-0 border-t-2 border-gray-400 items-center bg-gray-950 h-fit w-full">
                <p className="text-white text-xs p-3 font-extralight">Copyright © 2023 - Imaginate reservar los derechos para esto</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
