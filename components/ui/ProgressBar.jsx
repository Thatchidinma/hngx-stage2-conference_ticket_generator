
const ProgressBar = ({ value, max}) => {
    return (
      <div className="w-full bg-border rounded-2xl overflow-hidden m-auto mt-1">
        <div className='h-1 bg-[#24A0B5] rounded-2xl' style={{ width: `${(value / max) * 100}%` }}>
        </div>
      </div>
    )
  }
  
  export default ProgressBar