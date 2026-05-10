import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Sidebar from '../components/sidebar/sidebar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Second Brain',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen">
        <Sidebar />

        <div className="flex min-h-screen flex-1 flex-col items-center">
          <Header />

          <main className="flex w-full flex-1 items-center justify-center border-2 border-indigo-600/60">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
