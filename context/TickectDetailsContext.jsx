'use client'
import { 
  useState, 
  useContext, 
  createContext,
  useEffect, 
 } from "react";


// Create context with default null values
export const TicketDetailsContext = createContext(undefined);


export const TicketDetailsProvider = ({ children }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState( '');
  const [ticketType, setTicketType] = useState( 'REGULAR');
  const [noTicket, setNoTicket] = useState(() =>  1);
  const [request, setRequest] = useState('');
  const [imageUrl, setImageUrl] = useState(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setName(localStorage.getItem("name") || "");
      setEmail(localStorage.getItem("email") || "");
      setTicketType(localStorage.getItem("ticketType") || "REGULAR");
      setNoTicket(parseInt(localStorage.getItem("noTicket")) || 1);
      setRequest(localStorage.getItem("request") || "");
      setImageUrl(localStorage.getItem("imageUrl") || '');
    }
  }, []);

  
    useEffect(() => {
      if (typeof window !== 'undefined') {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('request', request);
      localStorage.setItem('noTicket', noTicket);
      localStorage.setItem('ticketType', ticketType);
      localStorage.setItem('imageUrl', imageUrl);
      }
    }, 
  );


  const value = {
   name, setName,email, setEmail,ticketType, setTicketType,noTicket, setNoTicket,request, setRequest, imageUrl, setImageUrl
  }


  return (
    <TicketDetailsContext.Provider value={value}>
      {children}
    </TicketDetailsContext.Provider>
  );
};
