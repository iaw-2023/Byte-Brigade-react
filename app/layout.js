import './globals.css';
import { inter } from './ui/fonts';
import Link from 'next/link';
import Navbar from '@/app/ui/components/layout/Navbar';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import LoginStatus from './ui/components/layout/LoginStatus';


export const metadata = {
  title: 'El Corchazo',
  description: 'Esto no es un pedido de ayuda.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <UserProvider>
        <body className={`${inter.className} antialiased`}>
          <header className="mb-8">
            <Navbar />
            <LoginStatus />
          </header>
          <main className="container mx-auto px-2 lg:px-0 min-h-screen my-12">
            {children}
          </main>
          <footer className="mt-24">
            <div className="flex items-center justify-center">
              <Link href="/" className="text-gray-950 font-serif text-2xl md:text-3xl lg:text-4xl">
                El Corchazo
              </Link>
            </div>
            <div className="mt-2 flex justify-center border-0 border-t-2 border-gray-400 items-center bg-gray-950 h-fit w-full">
              <p className="text-white text-xs p-3 font-extralight">Copyright © 2023 - Imaginate reservar los derechos para esto</p>
            </div>
          </footer>
        </body>
      </UserProvider>
    </html>
  )
}
