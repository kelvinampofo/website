import { Inter as SansFont } from '@next/font/google';
import { Footer } from '../components/Footer';
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
      <body className="mx-auto flex min-h-screen max-w-3xl flex-col dark:bg-[#101010] dark:text-gray-300">
        {children}
        <Footer />
      </body>
    </html>
  );
}
