'use client'
import { TicketDetailsContext } from '@/context/TickectDetailsContext'
import React, { useContext, useEffect} from 'react'

const TicketType = () => {
    const {ticketType, setTicketType} = useContext(TicketDetailsContext)
    
    const ticketTypes = [
        {
            type: 'REGULAR',
            slots: '20',
            price: 'Free'
        },
        {
            type: 'VIP',
            slots: '20',
            price: '$150'
        },
        {
            type: 'VVIP',
            slots: '20',
            price: '$150'
        },
    ]

    const TicketList = ticketTypes.map((ticket, index) => {
        return(
            <button key={index} onClick={()=>{setTicketType(ticket.type)}} className={`${ticketType === ticket.type ? 'bg-[#12464E] border' : '   '} border-2 hover:bg-[#2C545B] border-[#197686] flex flex-col justify-between  p-3 py-2 pb-4 rounded-xl gap-2`}>
                <div className="">
                    <div className="text-2xl font-semibold">{ticket.price} </div>
                </div>
                <div className="text-start grid w-full">
                    <p className="text-[16px] tracking-tighter font-medium ">{ticket.type} ACCESS</p>
                    <p className="text-sm">{ticket.slots} /52</p>
                </div>
            </button>
        )
    })

  return (
    <section className='mt-2'>
      <p className="">Select Ticket Type:</p>
      <div className="border border-border bg-[#052228] mt-2 p-3 rounded-3xl grid md:grid-cols-3 gap-[17px]">
        {TicketList}
      </div>
    </section>
  )
}

export default TicketType
