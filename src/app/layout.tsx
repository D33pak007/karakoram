import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Karakoram',
  description: 'Karakoram mountain range',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Header />  {/* ✅ Header appears on all pages */}
        <main className="pt-16">{children}</main> {/* Ensure content doesn't hide under fixed header */}
        <Footer />  {/* ✅ Footer appears on all pages */}
      </body>
    </html>
  );
}
