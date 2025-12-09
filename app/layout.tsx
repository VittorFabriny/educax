import type { Metadata } from 'next';
import './globals.css';

import { AuthProvider } from '../context/authContext';

import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'EducaX - Plataforma de Cursos Online',
  description:
    'EducaX é uma plataforma de cursos online que oferece uma ampla variedade de cursos para ajudar você a aprender novas habilidades e avançar na sua carreira.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={inter.className}>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
