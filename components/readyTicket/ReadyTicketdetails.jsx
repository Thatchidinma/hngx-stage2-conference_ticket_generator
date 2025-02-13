'use client'
import React, { useEffect } from 'react'
import ButtonPair from '../layout/ButtonPair'
import { useRouter } from 'next/navigation'
import Ticket from './Ticket'

const ReadyTicketdetails = () => {
    const route = useRouter();
    
    useEffect(()=>{
      const downloadTicket = () => { 
        localStorage.clear()
      }

      const bookNew = () => {
        route.push("/event"), 
        localStorage.clear()
      }
    })
    
    
  return (
    <section className='slide-up-now mt-8'>
      <h2 className="text-3xl font-bold text-center">Your Ticket is Booked!</h2>
      <p className='text-center m-6'>Check your email for a copy or you can download</p>
      <Ticket/>
        <ButtonPair text1={'Book Another Ticket'} text2={'Download Ticket'} onClick_1={()=>{bookNew()}} onClick_2={()=>{downloadTicket()}} className='gap-4'/>
    </section>
  )
}

export default ReadyTicketdetails
