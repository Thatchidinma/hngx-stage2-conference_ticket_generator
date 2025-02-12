'use client'
import React from 'react'
import EventBanner from './EventBanner'
import Divider from '../ui/Divider'
import TicketType from './TicketType'
import NoOfTicket from './NoOfTicket'
import ButtonPair from '../layout/ButtonPair'
import { useRouter } from 'next/navigation'

const TicketDetails = () => {
  const route = useRouter();

  return (
    <section className='slide-up-now bg-[#08252B] lg:border border-border rounded-[32px] lg:p-6 mt-8'>
      <EventBanner/>
      <Divider/>
      <TicketType/>
      <NoOfTicket/>
      <ButtonPair text1={'Cancel'} text2={'Next'} onClick_2={()=>{route.push("/event/attendee-details")}} className='md:border border-border md:bg-green-1 gap-4 md:gap-8 md:rounded-full md:px-12'/>
    </section>
  )
}

export default TicketDetails
