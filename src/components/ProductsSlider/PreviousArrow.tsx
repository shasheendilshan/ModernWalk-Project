import React from 'react'
import { AiOutlineLeft  } from "react-icons/ai";

type Props ={
  onclick:()=>void
}

const PreviousArrow:React.FC<Props> = ({onclick}) => {
  return (
    <div
    className="absolute z-10 top-[180px] left-2 md:left-[-20px] w-[50px] h-[50px] rounded-full bg-[#FF5E84]/30 flex items-center justify-center "
     onClick={onclick}
  >
    <button className="prev">
      <AiOutlineLeft size={25} />
    </button>
  </div>
  )
}

export default PreviousArrow