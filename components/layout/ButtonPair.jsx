import React from 'react'
import Button from '../ui/Button'

const ButtonPair = ({text1, text2, className, onClick_1, onClick_2 }) => {
  return (
    <div className={`${className} flex flex-col-reverse md:grid md:grid-cols-2 w-full `} >
      <Button onClick={onClick_1} text={text1} className=' text-border2'/>
      <Button onClick={onClick_2} text={text2} className=' bg-border2'/>
    </div>
  )
}

export default ButtonPair
