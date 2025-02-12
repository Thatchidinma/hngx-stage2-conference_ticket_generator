'use client'
import ProgressBar from "../ui/ProgressBar";
import Title from "../ui/Title";
import "@/app/globals.css";
import React from 'react'
import { usePathname } from "next/navigation";

const EventLayout = ({children}) => {
  const pathname = usePathname()

  return (
    <div className="flex justify-center mt-5 lg:mt-[2.8rem]">
    <main className=" w-full lg:w-[702px] border border-border bg-[#08252B] lg:bg-green-1 rounded-[40px] p-6 lg:p-12 lg:pt-10">
        <div className="flex flex-col md:flex-row justify-between md:items-center">
            <Title text={pathname === '/event' ? 'Ticket Selection' : (pathname === '/event/attendee-details' ? 'Attendee details' : 'Ready')}/>
            <div className="">
                <p className="">Step {pathname === '/event' ? 1 : (pathname === '/event/attendee-details' ? 2 : 3)}/3 </p>
            </div>
        </div>
        <ProgressBar
        max="9"
        value={pathname === '/event' ? 3 : (pathname === '/event/attendee-details' ? 6 : 9)}
        />
        {children}
    </main>
    </div>
  )
}

export default EventLayout
