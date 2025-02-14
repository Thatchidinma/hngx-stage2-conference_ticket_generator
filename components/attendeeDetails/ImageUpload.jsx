import { TicketDetailsContext } from '@/context/TickectDetailsContext'
import SpinnerIcon from '@/icons/Spinner'
import Upload from '@/icons/Upload'
import Image from 'next/image'
import React, { useContext, useEffect } from 'react'
import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"

const ImageUpload = () => {
  const [dataURL, setDataURL] = useState(null)
  const [uploadedURL, setUploadedURL] = useState(null)
  const {imageUrl, setImageUrl} = useContext(TicketDetailsContext)
  const [loading, setLoading] = useState(false)


  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader()
      reader.onabort = () => console.log("file reading was aborted")
      reader.onerror = () => console.log("file reading has failed")
      reader.onload = () => {
        const binaryStr = reader.result
        setDataURL(binaryStr)
      }
      reader.readAsDataURL(file)
    })
  }, [])

  const {
    getRootProps,
    acceptedFiles,
    getInputProps,
    isDragActive,
  } = useDropzone({ onDrop })

  const selectedFile = acceptedFiles[0]

  const uploadImage = async () => {
    setLoading(true)
    let formData = new FormData()

    formData.append("file", selectedFile)
    formData.append("upload_preset", 'HNG_Stage2')
    formData.append("api_key", process.env.NEXT_PUBLIC_API_KEY)

    await fetch("https://api.cloudinary.com/v1_1/thatchidinma/image/upload", {
      method: "POST",
      body: formData,
    })
      .then(r => {
        return r.json()
      })
      .then(data => {
        console.log(data.url)
        setImageUrl(data.url)
        setLoading(false)
      })

  }

  useEffect(()=>{ 
    if (dataURL) { 
      uploadImage(); 
    }
  },[dataURL])

  return (
    <div className='border border-border p-6 rounded-3xl bg-[#052228] cursor-pointer' {...getRootProps()}>
      <input  {...getInputProps()} />
      {
        isDragActive ? <div className=" w-full h-[280px] border-2 border-dashed border-border rounded-3xl flex justify-center items-center">
          <Upload/>
          <p className="">Drop here</p>
        </div> :
         <>
            <p className="">Upload Profile Photo</p>
            <div className="relative w-full flex">
            <div className="overflow-hidden relative z-10 w-60 h-60 border-4 bg-[#0E464F] border-border2 rounded-[32px] mx-auto mt-3 mb-1 flex flex-col justify-center items-center text-center gap-5">
              {imageUrl && <Image
              src={imageUrl}
              alt='upload'
              width={240}
              height={240} 
              className='z-10 hover:z-0 h-full  bg-inherit object-cover '
              />}
                <div className={`${ imageUrl ? 'hover:z-50 bg-black/20' : '' } w-60 h-60  absolute flex flex-col items-center justify-center`}>
                {
                  loading ? <SpinnerIcon/> 
                  :
                  <>
                    <Upload/>
                    <p className="">Drag & drop or click to <br/>upload</p>
                  </>
                }
                </div>
            </div>
            <div className="hidden sm:block top-8 absolute w-full h-[200px] bg-[#041B20]"></div>
            </div>
         </>
}
    </div>
  )
}

export default ImageUpload
