'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/public/event_logo.png'
import Link from 'next/link'
import { jejuMyeongjo } from "@/app/font";
import ArrRightIcon from '@/icons/ArrRight';
import { usePathname } from 'next/navigation';
import ArrSlantIcon from '@/icons/ArrSlant'

const Nav = () => {
  const pathname = usePathname()
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);


  return (
    <header className={` ${jejuMyeongjo.className} text-lg w-full h-[76px] flex justify-between items-center py-3 px-4 border border-[#197686] bg-green-1 rounded-3xl`}>
        <Link href='/'>
          <Image
          src={logo}
          height={94}
          width={93}
          alt='logo'
          />
        </Link>

        <nav className=" lg:flex gap-9 pt-1 hidden text-[#B3B3B3] ">
            <Link href="/event" className={`${pathname.includes( "/event" ) ? "active" : ""} `}><p>Events</p></Link>
            {/* <Link href="/my_tickets" className={`${pathname == "/my_tickets" ? "active" : ""} `}><p>My Tickets</p></Link> */}
            <p>My Tickets</p>
            <Link href="/project" className={`${pathname == "/project" ? "active" : ""} `}><p>About Project</p></Link>
        </nav>

        <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='flex justify-between w-[141px] md:w-[169px] md:h-[52px] items-center gap-2 px-4 py-3 md:px-6 md:py-4 bg-white hover:bg-[#24A0B5] hover:text-white border rounded-xl text-black text-[14px] md:text-base'>
            <p className="text-center">MY TICKETS</p>
            {
              hover ? <ArrSlantIcon/> : <ArrRightIcon/>
            }
        </button>
    </header>
  )
}

export default Nav
