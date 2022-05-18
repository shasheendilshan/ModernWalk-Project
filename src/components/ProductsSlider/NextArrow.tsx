import React from 'react'
import { AiOutlineRight  } from "react-icons/ai";

type Props ={
    onClick:()=>void
}


const NextArrow:React.FC<Props> = ({onClick}) => {

  return (
    <div
    className="absolute top-[180px] right-2 md:right-[-20px] w-[50px] h-[50px] rounded-full bg-[#FF5E84]/30 flex items-center justify-center "
    onClick={onClick}
  >
    <button>
      <AiOutlineRight size={25} />
    </button>
  </div>
  )
}

export default NextArrow