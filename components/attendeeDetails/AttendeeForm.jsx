'use client'
import React, { useContext, useEffect, useState } from 'react'
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
  const {name, setName,email, setEmail, request, setRequest, imageUrl} = useContext(TicketDetailsContext)
  const [isImagefilled, setImagefilled] = useState(true)
  
  const schema = z.object({
    name : z.string()
    .min(2,'name cannot be less than 2 characters' )
    .max(10, 'name cannot be more than 10 characters, PS:enter just one name'),
    email : z.string().email(),
    specialRequest : z.union([
      z.string().length(0), 
      z.string().min(2, 'request cannot be less than 2 characters but can be empty')
      .max(60, 'request cannot be more than 60 characters, PS:keep it simple!' )])
    .optional(),
    })

  const {register, handleSubmit,watch, formState:{errors}} = useForm({resolver: zodResolver(schema)})

  const nameValue = watch("name");
  const emailValue = watch("email");
  const messageValue = watch("specialRequest");

  useEffect(()=>{
    if (typeof window !== 'undefined') {
    localStorage.setItem('name', nameValue);
    localStorage.setItem('email', emailValue);
    localStorage.setItem('request', messageValue);
    }
  },[nameValue,emailValue, messageValue])


  const submitData = (data) =>{
    if(imageUrl){
      setName(data.name),
      setEmail(data.email)
      setRequest(data.specialRequest)
      route.push("/event/ready-ticket")
    }else{
      setImagefilled(false)
    }
  }

  return (
    <section className='slide-up-now bg-[#08252B] lg:border border-border rounded-[32px] lg:p-6 mt-8'>
      <ImageUpload/>
      {!isImagefilled && <p className='text-sm text-red-400 mt-1'>please select an image</p>}

      <Divider/>
      <form onSubmit={handleSubmit(submitData)} className=''>
        <div className="mb-8">
          <label htmlFor="name">Enter your name</label>
          <input id='name'  name='name' {...register('name')} type="text" className='bg-inherit border border-border w-full rounded-2xl mt-2 outline-none p-3'/>
          {errors.name && <p className='text-sm text-red-400 mt-1'>{errors.name.message}</p>}
        </div>

        <div className="mb-8">
        <label htmlFor="email">Enter your email *</label>
        <div className="relative">
          <Envelope className='absolute left-4 top-5'/>
          <input name='email' id='email' {...register('email')} placeholder='hello@gmail.com' type="email" className='bg-inherit border border-border w-full rounded-2xl mt-2 outline-none pl-12 p-3  '/>
        </div>
        {errors.email && <p className='text-sm text-red-400 mt-1'>{errors.email.message}, please enter a valid email</p>}
        </div>

        <div className="mb-8">
        <label htmlFor="request">Special request?</label>
        <textarea id='request' name='request' {...register('specialRequest')} className='bg-inherit border border-border w-full rounded-2xl mt-2  outline-none p-3 ' rows={4}></textarea>
        {errors.specialRequest && (<p className='text-sm text-red-400 mt-1'>request should be between 2-60 characters or can be empty!, PS:keep it simple</p>)}
        </div>

        <ButtonPair text1={'Back'} text2={'Get My Free Ticket'} onClick_1={()=>{route.push("/event")}} className='gap-4'/>
      </form>
    </section>
  )
}

export default AttendeeForm
