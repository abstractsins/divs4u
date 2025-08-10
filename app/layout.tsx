//* ------------------------------------------------------ //
//* ----------------------- IMPORT ----------------------- //
//* ------------------------------------------------------ //

//* REACT and NEXT
import type { Metadata } from "next";

//* STYLES
import "./globals.css";

//* FONTS
import {
  Geist,
  Geist_Mono,
  Arbutus_Slab,
  Sixtyfour
} from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const arbutus = Arbutus_Slab({
  variable: "--font-arbutus-slab",
  subsets: ['latin'],
  display: 'swap',
  weight: ["400"]
});


const sixtyfour = Sixtyfour({
  variable: "--font-sixtyfour",
  subsets: ['latin'],
  display: 'swap',
  weight: ["400"]
});



//* ------------------------------------------------------ //
//* ----------------------- EXPORT ----------------------- //
//* ------------------------------------------------------ //

// * ---------------METADATA--------------- //

export const metadata: Metadata = {
  title: "Daniel Berlin, Software Engineer",
  description: "Portfolio website for full stack developer Daniel Berlin",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // * ---------------RETURN--------------- //

  return (
    <html lang="en">
      <body id="hero" className={`${sixtyfour.variable} ${arbutus.variable} ${geistSans.variable} ${geistMono.variable} antialiased`} >
        {children}
      </body>
    </html>
  );
}
