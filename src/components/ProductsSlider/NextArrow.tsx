import React from 'react'
import { AiOutlineRight  } from "react-icons/ai";


const NextArrow:React.FC = () => {


  return (
    <div
    className="absolute top-[180px] right-2 md:right-[-20px] w-[50px] h-[50px] rounded-full bg-[#FF5E84]/30 flex items-center justify-center "
  >
    <button>
      <AiOutlineRight size={25} />
    </button>
  </div>
  )
}

export default NextArrow