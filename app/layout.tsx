import '../styles/globals.css';
import { RootLayoutProps } from '../types/index';

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
