'use client'
import React from 'react'
import ButtonPair from '../layout/ButtonPair'
import { useRouter } from 'next/navigation'

const AttendeeDetails = () => {
  const route = useRouter();  

  return (
    <section className='slide-up-now bg-[#08252B] lg:border border-border rounded-[32px] lg:p-6 mt-8'>
      <ButtonPair text1={'Back'} text2={'Get My Free Ticket'} onClick_1={()=>{route.push("/event")}} onClick_2={()=>{route.push("/event/ready-ticket")}} className=' border-border md:bg-green-1 gap-4'/>
    </section>
  )
}

export default AttendeeDetails
