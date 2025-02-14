'use client'
import { useContext, useEffect } from 'react'
import ReadyTicketdetails from './ReadyTicketdetails'
import { TicketDetailsContext } from '@/context/TickectDetailsContext'
import { useRouter } from 'next/navigation'

const ReadyTicket = () => { 
  const {name, email, imageUrl} = useContext(TicketDetailsContext)
  const router = useRouter()

  useEffect(()=>{
    if(!name || !email || !imageUrl){
      router.replace('/event')
    }
  },[name, email,imageUrl])

  return (
    <div className="">
      <ReadyTicketdetails/>
    </div>
  )
}

export default ReadyTicket
