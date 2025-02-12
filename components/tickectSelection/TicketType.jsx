'use client'
import React, { useState } from 'react'

const TicketType = () => {
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

    const [clicked, SetClicked] = useState('REGULAR')
    console.log(clicked)
    const TicketList = ticketTypes.map((ticket, index) => {
        return(
            <button key={index} onClick={()=>{SetClicked(ticket.type)}} className={`${clicked === ticket.type ? 'bg-[#197686]/50 border' : '  border-2 '}  border-[#197686] flex flex-col justify-between  p-3 py-2 pb-4 rounded-xl gap-2`}>
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
      <div className="border border-border bg-[#052228] mt-2 p-3 rounded-3xl grid md:grid-cols-3 gap-5">
        {TicketList}
      </div>
    </section>
  )
}

export default TicketType
