import './globals.css';
import type { Metadata } from 'next';
import { firaCode } from './fonts';
import NavBar from '@/components/nav/NavBar';
import Footer from '@/components/Footer';
import MiniSidebar from '@/components/nav/MiniSidebar';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: "Efezino's portfolio",
  description: 'Efezino Idisi | Frontend developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${firaCode.className} bg-body text-gray`}>
        <NavBar />
        <MiniSidebar />
        <div className='md:w-11/12 md:m-auto'>
          <Toaster />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
