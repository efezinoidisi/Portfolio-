import { Inter, Ubuntu_Mono, Fira_Code } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const ubuntu = Ubuntu_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu-mono',
});

export const firaCode = Fira_Code({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-fira-code',
});
