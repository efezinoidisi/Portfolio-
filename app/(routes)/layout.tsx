import './globals.css';
import type { Metadata } from 'next';
import { inter } from './fonts';
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
      <body className={`${inter.className} bg-body text-white`}>
        <NavBar />
        <MiniSidebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
