import React from 'react'
import { AiOutlineLeft  } from "react-icons/ai";


const PreviousArrow:React.FC = () => {
  return (
    <div
    className="absolute z-10 top-[180px] left-2 md:left-[-20px] w-[50px] h-[50px] rounded-full bg-[#FF5E84]/30 flex items-center justify-center "
    
  >
    <button className="prev">
      <AiOutlineLeft size={25} />
    </button>
  </div>
  )
}

export default PreviousArrow