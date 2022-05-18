import React from 'react'

const Navbar:React.FC = () => {
  return (
    <div className="w-[100%] h-[70px] z-20 bg-white drop-shadow-lg fixed top-0">
    <div className="flex items-center justify-center h-full ">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-700">
          Modern Walk
        </h1>
    </div>
  </div>
  )
}

export default Navbar