import Upload from '@/icons/Upload'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"

const ImageUpload = () => {
  const [dataURL, setDataURL] = useState(null)
  // const [uploadedURL, setUploadedURL] = useState(null)

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

  useEffect(()=>{
    console.log(selectedFile)
  },[selectedFile])

  return (
    <div className='border border-border p-6 rounded-3xl bg-[#052228] cursor-pointer' {...getRootProps()}>
      <input  {...getInputProps()} />
        <p className="">Upload Profile Photo</p>
        <div className="relative w-full flex">
        <div className="overflow-hidden relative z-10 w-60 h-60 border-4 bg-[#0E464F] border-border2 rounded-[32px] mx-auto mt-3 mb-1 flex flex-col justify-center items-center text-center gap-5">
          {dataURL && 
          <Image
          src={dataURL}
          alt='upload'
          width={240}
          height={240}
          className='z-10 hover:z-0 w-full bg-inherit'
          />}
            <div className={`${dataURL ? 'hover:z-10 bg-black/20' : '' } w-60 h-60  absolute flex flex-col items-center justify-center`}>
            <Upload/>
            <p className="">Drag & drop or click to <br/>upload</p>
            </div>
        </div>
        <div className="hidden sm:block top-8 absolute w-full h-[200px] bg-[#041B20]"></div>
        </div>
    </div>
  )
}

export default ImageUpload
