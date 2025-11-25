import Container from '@/components/Container';
import Footer from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ThemeProvider } from '@/contexts/ThemeProvider';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Blog Next.js',
    template: '%s | Blog Next.js',
  },
  description: 'A blog built with Next.js and React for a course',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Container>
            <Header />
            {children}
          </Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
