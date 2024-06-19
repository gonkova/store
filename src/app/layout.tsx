import type { Metadata } from "next";
import { Rubik, Roboto } from "next/font/google";
import "./globals.css";
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';

const rubik = Rubik({ subsets: ["latin"], weight: ["300", "400", "500", "700", "900"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });

export const metadata: Metadata = {
  title: "STORE",
  description: "E-Commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <SectionHeader/>
        {children}
        <Footer />
        </body>
    </html>
  );
}
