import './globals.css';
import { inter } from './lib/fonts';
import Navbar from '@/app/ui/layout/Navbar';
import Footer from './ui/layout/Footer';
import DolarHoy from './ui/DolarHoy';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import AuthPrompt from './ui/layout/AuthPrompt';
import SpecialMessageAlert from './ui/layout/SpecialMessageAlert.jsx';


export const metadata = {
  title: 'El Corchazo',
  description: 'Esto no es un pedido de ayuda.',
  manifest: '/manifest.json'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <UserProvider>
        <body className={`flex flex-col ${inter.className} min-h-screen antialiased`}>
          <header className="mb-8">
            <SpecialMessageAlert />
            <Navbar />
            <div className="flex font-light justify-between p-2 xl:pr-10 xl:pl-8 mb-4 xl:mb-6">
              <DolarHoy />
              <AuthPrompt />
            </div>
          </header>
          <main className="container mx-auto px-2 lg:px-0 grow">
            {children}
          </main>
          <footer className="mt-24">
            <Footer />
          </footer>
        </body>
      </UserProvider>
    </html>
  )
}
