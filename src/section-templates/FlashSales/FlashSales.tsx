import React, { useState, useEffect } from "react";
import { BallBeat } from "react-pure-loaders";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { ProductsSlider } from "../../components";
import { IProduct } from "../../interfaces/product";
import { getAllProducts } from "../../api/products";

const FlashSales: React.FC = () => {
  const [flashSaleProducts, setFlashSaleProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const productsData = await getAllProducts();
      setFlashSaleProducts(
        productsData?.data.filter(
          (product: IProduct) =>
            product.category === "men's clothing" ||
            product.category === "women's clothing"
        )
      );
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
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
          <ProductsSlider products={flashSaleProducts} />
        </div>
      </div>
    );
  }
};

export default FlashSales;
