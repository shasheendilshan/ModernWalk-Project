import React from 'react'
import { Link } from "react-router-dom";

const Categories:React.FC = () => {
  return (
    <div className="container mx-auto px-2">
    <h2 className="text-2xl font-bold text-zinc-600 mb-8">Categories</h2>

    <div className="h-96 flex flex-col md:flex-row gap-2 px-7 pb-10">
      <Link
        to="/mens-clothing"
        className="h-24 md:h-64  md:w-1/2 bg-[#2BD9AF] rounded-3xl flex justify-center items-center cursor-pointer"
      >
        <h1 className="text-2xl md:text-3xl text-white font-bold">
          Men's Clothing
        </h1>
      </Link>

      <Link
        to="womens-clothing"
        className="h-24 md:h-64 md:w-1/2 bg-[#FF5E84] rounded-3xl flex justify-center items-center cursor-pointer"
      >
        <h1 className="text-2xl md:text-3xl text-white  font-bold">
          Women's Clothing
        </h1>
      </Link>
    </div>
  </div>
  )
}

export default Categories