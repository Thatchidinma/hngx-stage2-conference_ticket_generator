import { jejuMyeongjo } from "@/app/font"
const Button = ({ text, className, onClick }) => {
    return (
      <div>
          <button onClick={onClick} className={`${className} ${jejuMyeongjo.className} w-full border border-border2  p-3  text-base  hover:animate-pulse transition-all rounded-lg`}>
              {text}
          </button>
      </div>
    )
  }
  
  export default Button
  