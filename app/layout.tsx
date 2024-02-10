import './globals.css';
import type { Metadata } from 'next';
import { firaCode, ubuntu, inter } from './fonts';
import NavBar from '@/components/nav/NavBar';
import Footer from '@/components/Footer';
import MiniSidebar from '@/components/nav/MiniSidebar';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Efezino Idisi | Frontend Web Developer',
  description:
    'A dedicated Frontend Web Developer with a passion for creating exceptional, responsive, and user-friendly web applications.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${firaCode.variable} ${ubuntu.variable} ${inter.variable} bg-body text-gray font-fira-code`}
      >
        <span className='scroll-watcher'></span>
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
