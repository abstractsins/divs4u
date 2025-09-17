//* ------------------------------------------------------ //
//* ----------------------- IMPORT ----------------------- //
//* ------------------------------------------------------ //

//* REACT and NEXT
import type { Metadata } from "next";

//* STATS
import { SpeedInsights } from "@vercel/speed-insights/next"

//* STYLES
import "./globals.css";

//* FONTS
import {
  Geist,
  Montserrat,
  Geist_Mono,
  Arbutus_Slab,
  Sixtyfour
} from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

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
      <body id="hero" className={`${montserrat.variable} ${sixtyfour.variable} ${arbutus.variable} ${geistSans.variable} ${geistMono.variable} antialiased`} >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
