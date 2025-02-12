'use client'
import React from 'react'
import ButtonPair from '../layout/ButtonPair'
import { useRouter } from 'next/navigation'

const ReadyTicket = () => {
  const route = useRouter();  

  return (
    <section className='slide-up-now bg-[#08252B] lg:border border-border rounded-[32px] lg:p-6 mt-8'>
        <ButtonPair text1={'Book Another Ticket'} text2={'Download Ticket'} onClick_1={()=>{route.push("/event")}} className='md:border border-border md:bg-green-1 gap-4 md:gap-8 md:rounded-full md:px-12'/>
    </section>
  )
}

export default ReadyTicket
