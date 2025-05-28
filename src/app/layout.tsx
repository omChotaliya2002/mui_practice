
import type { Metadata } from "next";
import { Lato, Ubuntu, Oswald, Cinzel, Overpass_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "../component/LayoutWrapper";
import IdleTimerProvider from "@/component/IdleTimerProvider";  // to invoke the idleTimer ⌚📌📌


const ubuntu = Ubuntu({
  variable: "--font-ubu",
  subsets: ["latin"],
  weight : ["400", "700"]
});

const oswald = Oswald({
  variable: "--font-osw",
  subsets: ["latin"],
  weight : ["400", "700"]
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight : ["400", "700"]
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight : ["400", "700"]
});

const overpass = Overpass_Mono({
  variable: "--font-op",
  subsets: ["latin"],
  weight : ["400", "700"]
});


export const metadata: Metadata = {
  title: "Web World 🌐",
  description: "Explore the web world to understand more..",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${ubuntu.variable} ${oswald.variable} ${lato.variable} ${cinzel.variable} ${overpass.variable} antialiased`}>
          
          {/* <ThemeReg> */}

          <LayoutWrapper>
              {/* <IdleTimerProvider/> */}   
              {children}    
          </LayoutWrapper> 

          {/* </ThemeReg> */}
      </body>
    </html>
  );
}
