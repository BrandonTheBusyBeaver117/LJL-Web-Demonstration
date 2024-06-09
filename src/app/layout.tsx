import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>

        <header className="flex justify-center h-[3.5vh] items-center my-[2vh]">

          <Link href="/">
            <div className="text-6xl font-semibold transition title">
              N  R  G
            </div>
          </Link>
        </header>

        <main className="flex flex-col items-center justify-evenly h-[85vh]">
          {children}
        </main>

        <footer className="flex justify-center h-[3.5vh] items-center my-[2vh]">
          <div>Website designed by Brandon Nguyen</div>
        </footer>
      </body>
    </html>
  );
}
