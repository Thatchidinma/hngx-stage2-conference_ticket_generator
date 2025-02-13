'use client'
import { 
  useState, 
  useContext, 
  createContext,
  useEffect, 
 } from "react";


// Create context with default null values
export const TicketDetailsContext = createContext(undefined);

// AuthProvider component
export const TicketDetailsProvider = ({ children }) => {
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [ticketType, setTicketType] = useState(localStorage.getItem('ticketType') || 'REGULAR');
  const [noTicket, setNoTicket] = useState(() => parseInt(localStorage.getItem('noTicket')) || 1);
  const [request, setRequest] = useState(localStorage.getItem('request') || '');
  const [loading, setLoading] = useState(true)

  
    useEffect(() => {
      if (typeof window !== 'undefined') {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('request', request);
      localStorage.setItem('noTicket', noTicket);
      localStorage.setItem('REGULAR', ticketType);
      }
    }, [noTicket, name, email, request, ticketType]);


  const value = {
   name, setName,email, setEmail,ticketType, setTicketType,noTicket, setNoTicket,request, setRequest,
  }

  // Provide user and auth functions to the context
  return (
    <TicketDetailsContext.Provider value={value}>
      {children}
    </TicketDetailsContext.Provider>
  );
};
