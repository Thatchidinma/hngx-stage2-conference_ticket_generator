'use client'
import React from 'react'
import ButtonPair from '../layout/ButtonPair'
import { useRouter } from 'next/navigation'

const AttendeeDetails = () => {
  const route = useRouter();  

  return (
    <div className='slide-up-now'>
      <ButtonPair text1={'Back'} text2={'Get My Free Ticket'} onClick_1={()=>{route.push("/event")}} onClick_2={()=>{route.push("/event/ready-ticket")}} className=' border-border md:bg-green-1 gap-4'/>
    </div>
  )
}

export default AttendeeDetails
