import Nav from "@/components/layout/Nav";
import { roboto } from "../font";
import "../globals.css";
import EventLayout from "@/components/layout/EventLayout";

export default function Layout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased p-5 lg:px-[120px] lg:py-6`}
      >
        <Nav/>
        <EventLayout>
            {children}
        </EventLayout>
      </body>
    </html>
  );
}
