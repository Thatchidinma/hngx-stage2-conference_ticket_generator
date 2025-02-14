import { TicketDetailsContext } from "@/context/TickectDetailsContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export const UseClear =()=>{
    const router = useRouter()
    const {setName, setEmail, setRequest, setTicketType, setNoTicket, setImageUrl} = useContext(TicketDetailsContext)

   const handleClearAndNavigate = () => {
    localStorage.clear();
    setTimeout(() => {
      router.push("/event");
    }, 100); 
     setName("");
      setEmail("");
      setTicketType("REGULAR");
      setNoTicket(1);
      setRequest("");
      setImageUrl('');
    router.push("/event"); 
  }

  return{
    handleClearAndNavigate
}
}