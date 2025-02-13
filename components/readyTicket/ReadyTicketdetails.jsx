'use client'
import React from 'react'
import Ticket from './Ticket'


const ReadyTicketdetails = () => {
    
  return (
    <section className='slide-up-now mt-8'>
      <h2 className="text-3xl font-bold text-center">Your Ticket is Booked!</h2>
      <p className='text-center m-6'>Check your email for a copy or you can download</p>
      <Ticket />
    </section>
  )
}

export default ReadyTicketdetails
