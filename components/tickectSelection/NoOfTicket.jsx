import { TicketDetailsContext } from '@/context/TickectDetailsContext'
import ArrDown from '@/icons/ArrDown'
import React, { useContext, useEffect, useState } from 'react'

const NoOfTicket = () => {
  const [showDropdown, SetShowDropdown] = useState(false)
  const {noTicket, setNoTicket} = useContext(TicketDetailsContext)

  const addTicket = ()=> {
    if(noTicket !== 52){
      setNoTicket(noTicket + 1)
    }
  }

  const reduceTicket = ()=> {
    if(noTicket !== 1){
      setNoTicket(noTicket - 1)
    }
  }

  return (
    <section className='my-8'>
      <p className="">Number of Tickets</p>
      <div  className="border border-border mt-2 p-3 rounded-xl flex flex-col justify-between items-center gap-5">
        <div onClick={()=>{SetShowDropdown(!showDropdown)}} className={`${showDropdown ? 'justify-end' : 'justify-between'} flex  items-center w-full `}>
          <p className={`${showDropdown ? 'hidden' : '' }`}>{noTicket}</p>
          <ArrDown/>
        </div>
        <div className={`${showDropdown ? 'flex' : 'hidden' } justify-between items-center w-full md:w-[60%]`}>
          <p onClick={()=>{addTicket()}} className="text-2xl border border-border bg-green-1 px-8 py-4 rounded-2xl hover:bg-[#197686]/50 cursor-pointer">+</p>
          <p>{noTicket}</p>
          <p onClick={()=>{reduceTicket()}} className="text-2xl border border-border bg-green-1 px-8 py-4 rounded-2xl hover:bg-[#197686]/50 cursor-pointer">-</p>
        </div>
      </div>
      {noTicket === 52 && <p className='text-sm text-red-400 mt-1'>sold out</p>}

    </section>
  )
}

export default NoOfTicket
