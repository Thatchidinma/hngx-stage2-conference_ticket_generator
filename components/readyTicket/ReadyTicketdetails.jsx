'use client'
import React from 'react'
import ButtonPair from '../layout/ButtonPair'
import { useRouter } from 'next/navigation'
import Ticket from './Ticket'

const ReadyTicketdetails = () => {
    const route = useRouter(); 
    
  return (
    <section className='slide-up-now mt-8'>
      <h2 className="text-3xl font-bold text-center">Your Ticket is Booked!</h2>
      <p className='text-center m-6'>Check your email for a copy or you can download</p>
      <Ticket/>
        <ButtonPair text1={'Book Another Ticket'} text2={'Download Ticket'} onClick_1={()=>{route.push("/event"), localStorage.clear()}} onClick_2={()=>{localStorage.clear();}} className='gap-4'/>
    </section>
  )
}

export default ReadyTicketdetails
