import { roadRage } from '@/app/font'
import { TicketDetailsContext } from '@/context/TickectDetailsContext'
import Barcode from '@/icons/Barcode'
import TickectBackground from '@/icons/TickectBackground'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { useRef } from "react";
import ButtonPair from '../layout/ButtonPair'
import { UseClear } from '@/lib/actions/use-clear'
import { UseDownloadImage } from '@/lib/actions/use-download-image'
import samp from '@/public/sample.png'


const Ticket = () => {
  const {name, email, request, ticketType,noTicket, imageUrl} = useContext(TicketDetailsContext)
  const {handleClearAndNavigate} = UseClear()
  const {handleDownloadImage} = UseDownloadImage()
  const isFilled = name && email && imageUrl


  const elementRef = useRef();

  return (
    <>
    { isFilled ?
      <div ref={elementRef} className='my-16 flex justify-center'>
      <TickectBackground className=''/>
      <div className="m-5 absolute flex flex-col ">
        <div className="border border-border2  h-[444px] rounded-xl p-3.5  ">
          <div className="">
            <div className="flex flex-col items-center">
              <h1 className={`${roadRage.className} text-[34px] -mt-2`}>Techember Fest ”25</h1>
              <p className='text-xs'>📍 04 Rumens road, Ikoyi, Lagos</p>
              <p className='text-xs mt-1'>📅 March 15, 2025 | 7:00 PM</p>
             </div>
             <div className='border-4 border-[#24A0B5] rounded-xl mx-auto my-5 h-fit w-fit overflow-hidden'>
             <Image
              width={130}
              height={130}
              src={imageUrl ? imageUrl : samp}
              alt='tickect image'
              className=' w-[130px] h-[130px] object-cover'
             />
             </div>
          </div>
          <div className="w-[232px] h-[160px] border border-border  rounded-2xl bg-[#08343C]">
            <div className='grid grid-cols-2 w-[224px] m-auto'>
              <div className="border-b border-border border-r h-[49px] p-1.5">
                <p className="text-xs text-[#5A777C]">Enter your name</p>
                <p className="text-[13px] font-bold">{name}</p>
              </div>
              <div className="border-b border-border h-[49px] p-1.5 overflow-hidden">
                <p className="text-xs text-[#5A777C]">Enter your email*</p>
                <p className="text-[13px] font-bold">{email}</p>
              </div>
              <div className="border-b border-border border-r h-[49px] p-1.5">
                <p className="text-xs text-[#5A777C]">Ticket Type:</p>
                <p className="text-[13px] font-bold">{ticketType}</p>
              </div>
              <div className="border-b border-border  h-[49px] p-1.5">
                <p className="text-xs text-[#5A777C]">Ticket for :</p>
                <p className="text-[13px] font-bold">{noTicket}</p>
              </div>
            </div>
            <div className='py-2 px-3'>
              <p className="text-xs text-[#5A777C]">Special request?</p>
              <p className="text-[9px] break-words">{request ? request : 'Nil'}</p>
            </div>
          </div>
        </div>
        <Barcode className='m-auto mt-10'/>
      </div>
    </div>
    :
    <div className='text-center border border-border2  h-fit w-[80%] m-auto bg-green-1 rounded-xl p-10 mb-8'>
      <p className="mb-4"> You got here somehow 👀</p>
      <p className="mb-4">you are definitely not booked o!!! please 😂</p>
      <p className='mb-4'>Oya Oya click the <span className='font-semibold text-border2'>'book ticket'</span> button below <span > or the<span className='font-semibold text-border2'> 'Event'</span> in the navigation menu above </span> and fill out the form then you are all set to download your ticket</p>
      <p className='font-semibold text-xl'>HAPPY BOOKING 🤗</p>
    </div>
    
  
  }
   {isFilled && <p className={` text-center md:text-end text-[12px] text-white/50`}>NB: download on a mobile device for best alignmet</p>}
    <ButtonPair 
    text1={`${isFilled ? 'Book Another Ticket ' : ' Book Ticket'}`} 
    text2={`${isFilled ? 'Download Ticket ' : 'Download disabled'}`} 
    onClick_1={()=>handleClearAndNavigate()} 
    onClick_2={()=>{isFilled && handleDownloadImage(elementRef)}}  
    className='gap-4'/>
    </>
  )
}

export default Ticket
