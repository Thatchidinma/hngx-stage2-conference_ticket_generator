import EventLayout from "@/components/layout/EventLayout";
import RootLayout from "../layout";

export default function Layout({ children }) {

  return (
    <EventLayout>
        {children}
        <div className="absolute -z-50 inset-0 bg-[radial-gradient(52.52%_32.71%_at_50%_97.66%,rgba(36,160,181,0.2)_0%,rgba(36,160,181,0)_100%)]"></div>
    </EventLayout>
  );
}
