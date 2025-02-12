'use client'
import { roboto } from "./font";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import { usePathname } from 'next/navigation';


export default function RootLayout({ children }) {
  const pathname = usePathname()
  
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased p-5 lg:px-[120px] lg:py-6`}
      >
            { pathname.includes( "/event") ? '': <Nav/>}
            {children}
      </body>
    </html>
  );
}
