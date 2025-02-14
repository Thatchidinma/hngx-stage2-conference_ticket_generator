import React from 'react'
import Button from '../ui/Button'

const ButtonPair = ({text1, text2, className, onClick_1, onClick_2, button1ClassName, button2ClassName }) => {
  return (
    <div className={`${className} flex flex-col-reverse md:grid md:grid-cols-2 w-full gap-6 `} >
      <Button type='button' onClick={onClick_1} text={text1} className={`${button1ClassName} text-border2`}/>
      <Button type='submit' onClick={onClick_2} text={text2} className={`${button2ClassName} bg-border2`}/>
    </div>
  )
}

export default ButtonPair
