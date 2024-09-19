import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Header from "./components/Header";
import "@uploadthing/react/styles.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Job Board",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" ></link>

        <main className="px-4 py-6 max-w-[80%] mx-auto
        max-md:max-w-[95%]">
        <Header />
        {children}

        <footer className="container py-8 text-gray-500 text-center">
          Job Board &copy; {new Date().getFullYear()} - All rights reserved
        </footer>
        </main>
      </body>
    </html>
  );
}
