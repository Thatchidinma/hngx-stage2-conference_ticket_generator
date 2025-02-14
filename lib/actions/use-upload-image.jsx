import { TicketDetailsContext } from '@/context/TickectDetailsContext'
import { useContext, useState } from 'react'

const UseUploadImage = () => {
    const [uploading, setUpLoading] = useState(false)
    const { setImageUrl} = useContext(TicketDetailsContext)
    

    const uploadImage = async (selected) => {
        setUpLoading(true)
        let formData = new FormData()
    
        formData.append("file", selected)
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
            setUpLoading(false)
          })
    
      }

  return {
    uploadImage,uploading, setUpLoading
  }
}

export default UseUploadImage
