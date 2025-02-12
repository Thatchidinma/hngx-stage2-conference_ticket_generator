import { roboto } from "./font";
import "./globals.css";
import Nav from "@/components/layout/Nav";

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased p-5 lg:px-[120px] lg:py-6`}
      > 
      <Nav/>
            {children}
      </body>
    </html>
  );
}
