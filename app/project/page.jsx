'use client'
import ButtonPair from '@/components/layout/ButtonPair'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const ProjectHome = () => {
    const route = useRouter();
    
  return (
    <div className="flex justify-center mt-5 lg:mt-[2.8rem]">
        <main className=" w-full lg:w-[800px] border border-border bg-[#08252B] lg:bg-green-1 rounded-[40px] p-6 lg:p-12 lg:pt-10">
            <h1 className="text-2xl lg:text-4xl py-4"> Event Ticket Booking UI – Open Source Practice Project 🎟️</h1>
            <h2 className="text-xl lg:text-2xl py-2">Overview</h2>
            <p className="">
            This is a beginner-friendly yet practical Event Ticket Booking UI designed for developers to clone, explore, and build upon. The design focuses on a seamless, login-free ticket reservation flow, allowing users to book event tickets quickly and efficiently.
            </p>
            <br/>
            <p className="">The project consists of a three-step ticket booking flow, and developers can extend it further by integrating payment solutions, user authentication (optional), and ticket validation systems.
            </p>
            <br/>
            <h2 className="text-xl lg:text-2xl py-2">Flow & Features</h2>
            <div className="">
                <p className="">1️⃣ Ticket Selection</p>
                <ul className='list-disc ml-8 lg:ml-14'>
                    <li>Users can browse available tickets (Free & Paid).</li>
                    <li>Ticket options are displayed in a list or card view.</li>
                    <li>For Free Tickets → Clicking “Get Free Ticket” proceeds to attendee details.</li>
                    <li>For Paid Tickets → Clicking “Purchase Ticket” would ideally open a payment modal.</li>
                </ul>
            </div>
            <br/>
            <div className="">
                <p className="">2️⃣ Attendee Details Form</p>
                <ul className='list-disc ml-8 lg:ml-14'>
                    <li>Users input their Name, Email, and optional Phone Number.</li>
                    <li>Profile picture upload option with preview functionality.</li>
                    <li>Ticket summary is visible to ensure users review their details before submission.</li>
                </ul>
            </div>
            <br/>
            <div className="">
                <p className="">3️⃣ Payment or Success Page</p>
                <ul className='list-disc ml-8 lg:ml-14'>
                    <li>If the ticket is free, the user is taken directly to the Ticket Confirmation Page.</li>
                    <li>If the ticket is paid, developers can integrate Stripe, Paystack, or Flutterwave to process payments before showing the confirmation page.</li>
                    <li>Upon successful booking, users should receive:</li>
                    <ul className='list-disc ml-8 lg:ml-14'>
                        <li>A visual ticket preview with a unique QR Code.</li>
                        <li>An option to download the ticket as PDF or save it to their device.</li>
                        <li>An email confirmation containing ticket details.</li>
                    </ul>
                </ul>
            </div>
            <br/>
            <h2 className="text-xl lg:text-2xl py-2">How to Build This 🚀</h2>
            <p className="">This UI can be implemented using:</p>
            <div className="">
                <p className="">📌 Frontend (Next.js or React)</p>
                <p className="">Component Breakdown:</p>
                <ul className='list-disc ml-8 lg:ml-14'>
                    <li>TicketCard.tsx → Displays ticket details</li>
                    <li>AttendeeForm.tsx → Captures user details</li>
                    <li>PaymentModal.tsx → Handles payment processing</li>
                    <li>SuccessScreen.tsx → Shows the final ticket preview</li>
                    <li>State Management: React’s Context API, Zustand, or Redux (if needed).</li>
                    <li>File Handling: Users should be able to upload images (profile picture for ticket) using Firebase Storage, Cloudinary, or local preview with URL.createObjectURL().</li>
                </ul>
            </div>
            <br/>
            <div className="">
                <p className="">📌 Backend (Optional)</p>
                <ul className='list-disc ml-8 lg:ml-14'>
                    <li>If persistence is required, a backend can be built using:</li>
                    <li>Node.js & Express or Firebase Functions</li>
                    <li>Database: MongoDB, PostgreSQL, or Firebase Firestore to store ticket records</li>
                </ul>
            </div>
            <br/>
            <div className="">
                <p className="">📌 Payment Integration</p>
                <ul className='list-disc ml-8 lg:ml-14'>
                    <li>For paid events, developers should integrate:</li>
                    <ul className='list-disc ml-8 lg:ml-14'>
                        <li>Stripe Checkout (for international transactions)</li>
                        <li>Paystack or Flutterwave (for African users)</li>
                    </ul>
                </ul>
            </div>
            <br/>
            <h2 className="text-xl lg:text-2xl py-2">What You’ll Learn 🧑‍💻</h2>
            <ul className="list-disc ml-8 lg:ml-14">
                <li>File handling & validation (profile picture uploads).</li>
                <li>Dynamic UI updates based on ticket selection.</li>
                <li>Persisting bookings using local state or a backend.</li>
                <li>Integrating payment gateways for ticket purchases.</li>
                <li>Generating & validating QR Codes for event check-in (Advanced).</li>
            </ul>
            <p className="mt-8 text-center font-semibold ">Need Help? Reach Out! 💬</p>
            <Link href={"http://thatchidinma.com"}><p className="mt-4 mb-8 text-center hover:scale-110 animate ease-in-out w-fit mx-auto"> <span className="text-4xl">👩🏾‍💻</span>  Thatchidinma.com</p></Link>

            <ButtonPair className='border border-border px-8 py-4 rounded-2xl w-[80%] m-auto ' text1={'Design File'} text2={'Github Code'} onClick_1={()=>{route.push('https://www.figma.com/design/zrf46XZuo6VPYREhZQTjQr/Event-Ticket-Booking-UI-%E2%80%93-Open-Source-Practice-Project-%F0%9F%8E%9F%EF%B8%8F-(Community)?node-id=2-142&t=AIMycAwC5pdeg1Qt-1')}} onClick_2={()=>{route.push("https://github.com/Thatchidinma/hngx-stage2-conference_ticket_generator")}}/>
        </main>
    </div>
  )
}

export default ProjectHome
