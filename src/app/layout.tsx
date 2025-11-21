import Container from '@/components/Container';
import { Header } from '@/components/layout/Header';
import { ThemeProvider } from '@/contexts/ThemeProvider';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Blog Next React Course',
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
        <Container>
          <Header />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </Container>
      </body>
    </html>
  );
}
