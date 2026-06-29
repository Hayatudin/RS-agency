import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'RS Foreign Employment Agency | Global Recruitment & Training',
  description: 'RS Foreign Employment Agency connects skilled individuals with international employment opportunities. Operating with DAERA, Cool Staff, and certified training facilities to deliver premier recruitment, training, and travel solutions.',
  keywords: 'recruitment agency, foreign employment, Ethiopia, job placement, international jobs, travel services, vocational training, RS Foreign Employment, DAERA, Cool Staff, certified training facilities',
  authors: [{ name: 'RS Foreign Employment Agency PLC' }],
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-brand-light text-brand-dark min-h-screen flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
