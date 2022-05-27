import React from "react";
import FlashSales from "../../section-templates/FlashSales/FlashSales";
import Categories from "../../section-templates/Categories/Categories";

const Home: React.FC = () => {
  return (
    <div className="mt-[80px]">
      {/* flash Sales Section */}
      <FlashSales />
      {/* Categories Section */}
      <Categories />
    </div>
  );
};

export default Home;
