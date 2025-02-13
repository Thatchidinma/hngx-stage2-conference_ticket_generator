import { roadRage } from '@/app/font'
import { TicketDetailsContext } from '@/context/TickectDetailsContext'
import Barcode from '@/icons/Barcode'
import TickectBackground from '@/icons/TickectBackground'
import Image from 'next/image'
import React, { useContext } from 'react'

const Ticket = () => {
  const {name, email, request, ticketType,noTicket,} = useContext(TicketDetailsContext)

  return (
    <div className='my-16 flex justify-center'>
      <TickectBackground className='relative'/>
      <div className="z-50 m-5 absolute flex flex-col ">
        <div className="border border-border2  h-[444px] rounded-xl p-3.5  ">
          <div className="">
            <div className="flex flex-col items-center">
              <h1 className={`${roadRage.className} text-[34px] leading-tight`}>Techember Fest ”25</h1>
              <p className='text-xs'>📍 04 Rumens road, Ikoyi, Lagos</p>
              <p className='text-xs mt-1'>📅 March 15, 2025 | 7:00 PM</p>
             </div>
             <Image
              width={130}
              height={130}
              src={''}
              alt='tickect image'
              className='border-4 border-[#24A0B5] rounded-xl mx-auto my-5'
             />
          </div>
          <div className="w-[232px] h-[170px] border border-border m-auto rounded-2xl bg-[#08343C]">
            <div className='grid grid-cols-2 w-[224px] m-auto'>
              <div className="border-b border-border border-r h-[49px] p-1.5">
                <p className="text-xs text-[#5A777C]">Enter your name</p>
                <p className="text-[13px] pt-1 font-bold">{name}</p>
              </div>
              <div className="border-b border-border h-[49px] p-1.5 overflow-hidden">
                <p className="text-xs text-[#5A777C]">Enter your email*</p>
                <p className="text-[13px] pt-1 font-bold">{email}</p>
              </div>
              <div className="border-b border-border border-r h-[49px] p-1.5">
                <p className="text-xs text-[#5A777C]">Ticket Type:</p>
                <p className="text-[13px] pt-1 font-bold">{ticketType}</p>
              </div>
              <div className="border-b border-border  h-[49px] p-1.5">
                <p className="text-xs text-[#5A777C]">Ticket for :</p>
                <p className="text-[13px] pt-1 font-bold">{noTicket}</p>
              </div>
            </div>
            <div className='py-2 px-3'>
              <p className="text-xs text-[#5A777C]">Special request?</p>
              <p className="text-xs pt-1 break-words">{request ? request : 'Nil'}</p>
            </div>
          </div>
        </div>
        <Barcode className='m-auto mt-12'/>
      </div>
    </div>
  )
}

export default Ticket
