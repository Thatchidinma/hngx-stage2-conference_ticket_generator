import React from 'react'
import { jejuMyeongjo } from "@/app/font";

const Title = ({text}) => {
  return (
    <h1 className={`text-[24px] lg:text-[32px] ${jejuMyeongjo.className}`}>
      {text}
    </h1>
  )
}

export default Title
