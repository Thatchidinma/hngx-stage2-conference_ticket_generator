import EventLayout from "@/components/layout/EventLayout";
import RootLayout from "../layout";

export default function Layout({ children }) {

  return (
    <EventLayout>
        {children}
    </EventLayout>
  );
}
