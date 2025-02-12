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
            price: '$50'
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
            <button key={index} onClick={()=>{SetClicked(ticket.type)}} className={`${clicked === ticket.type ? 'bg-[#197686] border-[#197686]' : 'border-border'} border flex justify-between  p-2 rounded-xl gap-1`}>
                <div className="text-start grid gap-1">
                    <p className="text-base tracking-tighter">{ticket.type} ACCESS</p>
                    <p className="text-sm">{ticket.slots} left!</p>
                </div>
                <div className="">
                    <div className="border border-[#2BA4B9] bg-border rounded-lg py-1 px-2 min-w-[80px] text-xl font-bold text-end">{ticket.price} </div>
                </div>
            </button>
        )
    })

  return (
    <section>
      <p className="">Select Ticket Type:</p>
      <div className="border border-border bg-[#052228] mt-2 p-4 rounded-3xl grid md:grid-cols-2 gap-6">
        {TicketList}
      </div>
    </section>
  )
}

export default TicketType
