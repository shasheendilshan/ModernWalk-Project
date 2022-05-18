import React from "react";
import { Categories, FlashSales } from "../../section-templates";


const Home:React.FC = () => {
  return (
    <div className="mt-[80px]">
     {/* flash Sales Section */}
      <FlashSales/>
     {/* Categories Section */}
      <Categories/>
    </div>
  );
};

export default Home;
