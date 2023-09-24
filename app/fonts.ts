import { Inter, Ubuntu_Mono, Fira_Code } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const ubuntu = Ubuntu_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const firaCode = Fira_Code({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});
