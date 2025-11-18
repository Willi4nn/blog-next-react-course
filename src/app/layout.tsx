import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog Next React Course",
  description: "A blog built with Next.js and React for a course",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-50 font-sans dark:bg-black">{children}</body>
    </html>
  );
}
