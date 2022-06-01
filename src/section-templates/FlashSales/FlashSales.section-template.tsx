import React from "react";
import { BallBeat } from "react-pure-loaders";
import Skeleton from "react-loading-skeleton";
import { useQuery } from "react-query";
import "react-loading-skeleton/dist/skeleton.css";

import { ProductsSlider, ProductCard } from "../../components";
import { IProduct } from "../../interfaces/products/products.interfaces";
import { getAllProducts } from "../../services/products.services";

const FlashSales: React.FC = () => {
  const { data, isLoading } = useQuery("allProducts", getAllProducts);

  if (isLoading) {
    return (
      <>
        <div className="container mx-auto h-[400px] flex justify-center">
          <div className=" w-72 scale-90 rounded-sm bg-slate-200">
            <Skeleton className="rounded-sm h-full" />
          </div>
          <div className=" w-72 scale-90 rounded-sm bg-slate-200">
            <Skeleton className="rounded-sm h-full" />
          </div>
          <div className=" w-72 scale-90 rounded-sm bg-slate-200">
            <Skeleton className="rounded-sm h-full" />
          </div>
          <div className=" w-72 scale-90 rounded-sm bg-slate-200">
            <Skeleton className="rounded-sm h-full" />
          </div>
        </div>
        <div className="container mx-auto flex justify-center">
          <BallBeat color={"#2BD9AF"} loading />
        </div>
      </>
    );
  } else {
    return (
      <div className="container mx-auto mt-[100px] px-2">
        <div>
          <h2 className="text-2xl font-bold text-zinc-600 mt-10">
            Flash Sale !
          </h2>
        </div>
        <div className=" container mx-auto min-h-[480px]">
          <ProductsSlider>
            {data?.data.map((product: IProduct, index: number) => (
              <ProductCard key={index} product={product} />
            ))}
          </ProductsSlider>
        </div>
      </div>
    );
  }
};

export default FlashSales;
