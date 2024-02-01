import './globals.css';
import type { Metadata } from 'next';
import { firaCode } from './fonts';
import NavBar from '@/components/nav/NavBar';
import Footer from '@/components/Footer';
import MiniSidebar from '@/components/nav/MiniSidebar';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Efezino Idisi | Frontend Engineer',
  description:
    'a dedicated frontend developer with a passion for creating exceptional, responsive, and user-friendly web applications',
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
        <div className='md:w-11/12 md:mx-auto'>
          <Toaster />
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
