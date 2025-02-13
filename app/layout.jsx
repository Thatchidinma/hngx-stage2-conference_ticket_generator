import { TicketDetailsProvider } from "@/context/TickectDetailsContext";
import { roboto } from "./font";
import "./globals.css";
import Nav from "@/components/layout/Nav";

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased p-5 md:px-[120px] md:pt-6 pb-28 relative min-h-screen`}
      >
        <Nav/>
        <TicketDetailsProvider>
        {children}
        </TicketDetailsProvider>
      </body>
    </html>
  );
}
