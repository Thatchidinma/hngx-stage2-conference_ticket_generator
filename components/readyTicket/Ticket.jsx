import { roadRage } from '@/app/font'
import { TicketDetailsContext } from '@/context/TickectDetailsContext'
import Barcode from '@/icons/Barcode'
import TickectBackground from '@/icons/TickectBackground'
import Image from 'next/image'
import React, { useContext } from 'react'
import { useRef } from "react";
import html2canvas from "html2canvas";
import ButtonPair from '../layout/ButtonPair'
import samp from '@/public/sample.png'
import { useRouter } from 'next/navigation'


const Ticket = () => {
  const {name, email, request, ticketType,noTicket,} = useContext(TicketDetailsContext)

  const route = useRouter();

    const elementRef = useRef();

    const handleDownloadImage = async () => {
      const element = elementRef.current;
  
      // Render the element to a canvas
      const canvas = await html2canvas(element);
      
      // Convert the canvas to a data URL (image)
      const imageUrl = canvas.toDataURL("image/png");
  
      // Create a download link dynamically
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "downloaded-image.png"; // File name
      link.click(); // Trigger the download
    }; 
    

  return (
    <>
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
             <div className='border-4 border-[#24A0B5] rounded-xl mx-auto my-5 w-[130px] h-[130px] overflow-hidden'>
             <Image
              width={130}
              height={130}
              src={samp}
              alt='tickect image'
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
    <ButtonPair text1={'Book Another Ticket'} text2={'Download Ticket'} onClick_1={()=>{route.push("/event")}} onClick_2={()=>{handleDownloadImage()}}  className='gap-4'/>
    </>
  )
}

export default Ticket
