import { Inter as SansFont } from '@next/font/google';
import '../styles/globals.css';
import { RootLayoutProps } from '../types/index';

const sansFont = SansFont({
  subsets: ['latin'],
  variable: '--font-inter'
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={sansFont.className}>
      <head />
      <body>{children}</body>
    </html>
  );
}
