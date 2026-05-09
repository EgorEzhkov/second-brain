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
        {/* Sidebar */}
        <aside className="w-64 shrink-0 border-r">
          <Sidebar />
        </aside>

        {/* Right side */}
        <div className="flex flex-1 flex-col min-h-screen items-center">
          <Header />

          <main className="flex-1 flex items-center justify-center">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
