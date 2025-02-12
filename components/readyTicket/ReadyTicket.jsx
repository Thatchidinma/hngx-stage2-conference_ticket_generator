'use client'
import React from 'react'
import ButtonPair from '../layout/ButtonPair'
import { useRouter } from 'next/navigation'

const ReadyTicket = () => {
  const route = useRouter();  

  return (
    <div className='slide-up-now'>
        <ButtonPair text1={'Book Another Ticket'} text2={'Download Ticket'} onClick_1={()=>{route.push("/event")}} className='md:border border-border md:bg-green-1 gap-4 md:gap-8 md:rounded-full md:px-12'/>
    </div>
  )
}

export default ReadyTicket
