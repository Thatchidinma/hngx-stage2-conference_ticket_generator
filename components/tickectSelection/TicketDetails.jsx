'use client'
import React, { useEffect } from 'react'
import EventBanner from './EventBanner'
import Divider from '../ui/Divider'
import TicketType from './TicketType'
import NoOfTicket from './NoOfTicket'
import ButtonPair from '../layout/ButtonPair'
import { useRouter } from 'next/navigation'

const TicketDetails = () => {
  const route = useRouter();

  return (
    <section className='slide-up-now bg-[#08252B] md:border border-border rounded-[32px] md:p-6 mt-8'>
      <EventBanner/>
      <Divider/>
      <TicketType/>
      <NoOfTicket/>
      <ButtonPair text1={'Cancel'} text2={'Next'} onClick_2={()=>{route.push("/event/attendee-details")}}/>
    </section>
  )
}

export default TicketDetails
