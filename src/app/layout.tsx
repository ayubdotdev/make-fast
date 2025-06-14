import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });
import { Analytics } from "@vercel/analytics/next"


export const metadata: Metadata = {
  title: 'Developer Tools Installer',
  description: 'Quick access to installation commands for essential web development tools and stacks',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark " >
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        {children}
        <Analytics/>
        </body>
    </html>
  );
}
