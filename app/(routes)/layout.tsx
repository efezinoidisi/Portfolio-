import './globals.css';
import type { Metadata } from 'next';
import { firaCode } from './fonts';
import NavBar from '../_components/nav/NavBar';
import Footer from '../_components/Footer';
import MiniSidebar from '../_components/nav/MiniSidebar';
//import Sidebar from './components/sidebar/Sidebar';
//import { AnimatePresence, motion } from 'framer-motion';

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
        <div className='md:w-11/12 md:m-auto'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
