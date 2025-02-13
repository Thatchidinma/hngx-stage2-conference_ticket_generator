import Upload from '@/icons/Upload'
import React from 'react'

const ImageUpload = () => {
  return (
    <div className='border border-border p-6 rounded-3xl bg-[#052228] '>
        <p className="">Upload Profile Photo</p>
        <div className="relative w-full flex">
        <input id='image' type="file" accept="image/png, image/gif, image/jpeg" className='hidden'></input>
        <label htmlFor='image' className="z-10 w-60 h-60 border-4 bg-[#0E464F] border-border2 rounded-[32px] mx-auto mt-3 mb-1 flex flex-col justify-center items-center text-center gap-5">
            <Upload/>
            <p className="">Drag & drop or click to <br/>upload</p>
        </label>
        <div className="hidden sm:block top-8 absolute w-full h-[200px] bg-[#041B20]"></div>
        </div>
    </div>
  )
}

export default ImageUpload
