import TicketSelection from "@/components/tickectSelection/TicketSelection";

export default function EventHome() {
  
   // Bug to fix: checkmodal doesn't update when you navigate back to Ticket selection
  return (
    <TicketSelection/>
  );
}