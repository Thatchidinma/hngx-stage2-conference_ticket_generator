import React from 'react'
import { roadRage } from '@/app/font'
import Pin from '@/icons/Pin'

const EventBanner = () => {
  return (
    <div className='text-center flex flex-col  justify-center items-center shadow-sm shadow-border bg-gradient-to-br  from-[#24A0B5]/15 via-[#24A0B5]/1 to-green-1 p-4 pb-6 rounded-3xl'>
      <div className={`${roadRage.className} text-[48px] lg:text-[62px] leading-tight `}>
      Techember Fest ”25
      </div>
      <div className='flex flex-col gap-10 lg:gap-2  items-center'>
      <p className="text-sm lg:text-base max-w-[340px]">Join us for an unforgettable experience at Techember Fest ”25! Secure your spot now.</p>
      <div className="flex flex-col lg:flex-row justify-between items-center w-full  ">
        <div className="flex gap-1 ">
            <p>📍</p>
            <p className="">04 Rumens road, Lagos </p>
        </div>

        <p className=" hidden lg:inline">&#160;&#160;| |&#160;&#160;</p>

        <p className="">March 15, 2025 | 7:00 PM</p>

      </div>
      </div>
    </div>
  )
}

export default EventBanner
