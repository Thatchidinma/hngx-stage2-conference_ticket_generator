'use client'
import React, { useContext, useEffect } from 'react'
import ButtonPair from '../layout/ButtonPair'
import { useRouter } from 'next/navigation'
import ImageUpload from './ImageUpload'
import Divider from '../ui/Divider'
import Envelope from '@/icons/Envelope'
import { z} from 'zod'
import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { TicketDetailsContext } from '@/context/TickectDetailsContext'

const AttendeeForm = () => {
  const route = useRouter();
  const {name, setName,email, setEmail, request, setRequest} = useContext(TicketDetailsContext)
  
  const schema = z.object({
    name : z.string().min(2).max(10),
    email : z.string().email(),
    specialRequest : z.union([z.string().length(0), z.string().min(2).max(100)])
    .optional()
  })

  const {register, handleSubmit,watch, formState:{errors}} = useForm({resolver: zodResolver(schema)})

  const nameValue = watch("name");
  const emailValue = watch("email");
  const messageValue = watch("specialRequest");

  useEffect(()=>{
    localStorage.setItem('name', nameValue);
    localStorage.setItem('email', emailValue);
    localStorage.setItem('request', messageValue);
  },[nameValue,emailValue, messageValue])


  const submitData = (data) =>{

    route.push("/event/ready-ticket")
  }

  return (
    <section className='slide-up-now bg-[#08252B] lg:border border-border rounded-[32px] lg:p-6 mt-8'>
      <ImageUpload/>
      <Divider/>
      <form onSubmit={handleSubmit(submitData)} className=''>
        <div className="mb-8">
          <label htmlFor="name">Enter your name</label>
          <input id='name' onChange={(e)=> setName(e.target.value)} name='name' {...register('name')} type="text" className='bg-inherit border border-border w-full rounded-2xl mt-2 outline-none p-3'/>
          {errors.name && <p className='text-sm text-red-400 mt-1'>name should be between 2-10 letters, PS:enter just one name</p>}
        </div>

        <div className="mb-8">
        <label htmlFor="email">Enter your email *</label>
        <div className="relative">
          <Envelope className='absolute left-4 top-5'/>
          <input name='email' id='email' {...register('email')} placeholder='hello@gmail.com' type="email" className='bg-inherit border border-border w-full rounded-2xl mt-2 outline-none pl-12 p-3 placeholder:text-white'/>
        </div>
        {errors.email && <p className='text-sm text-red-400 mt-1'>{errors.email.message}</p>}
        </div>

        <div className="mb-8">
        <label htmlFor="request">Special request?</label>
        <textarea id='request' name='request' {...register('specialRequest')} className='bg-inherit border border-border w-full rounded-2xl mt-2  outline-none p-3' rows={4}></textarea>
        {errors.specialRequest && (<p className='text-sm text-red-400 mt-96'>{errors.specialRequest.message}</p>)}
        </div>

        <ButtonPair text1={'Back'} text2={'Get My Free Ticket'} onClick_1={()=>{route.push("/event")}} className='gap-4'/>
      </form>
    </section>
  )
}

export default AttendeeForm
