import React from "react";
import Skeleton from "react-loading-skeleton";
import { BallBeat } from "react-pure-loaders";
import { useQuery } from "react-query";
import "react-loading-skeleton/dist/skeleton.css";

import { getSpecificCategory } from "../../services/products.services";
import { ProductCard } from "../../components";
import {
  IProduct,
  productCategory,
} from "../../interfaces/products/products.interfaces";

type Props = {
  category: productCategory;
  title: string;
};

const Category: React.FC<Props> = ({ category, title }) => {
  const getProducts = () => {
    return getSpecificCategory(category);
  };

  const { data, isLoading } = useQuery(
    ["getProductsCategory", category],
    getProducts
  );

  if (isLoading) {
    return (
      <div className="container mx-auto mt-[100px]">
        <div className="mt-[10px]">
          <h2 className="text-2xl font-bold text-zinc-600 m-10">{title}</h2>
        </div>
        <div className="w-full flex justify-center">
          <BallBeat
            color={title === "Men's Clothing" ? "#2BD9AF" : "#FF5E84"}
            loading
          />
        </div>

        <div className=" container mx-auto  h-[400px]">
          <div className="w-full flex flex-wrap  md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-3 justify-center">
            <div className=" w-72 scale-90 rounded-sm bg-slate-200">
              <Skeleton className="rounded-sm  h-[400px]" />
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
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col container mx-auto mt-[50px]">
        <div className="mt-[10px]">
          <h2 className="text-2xl font-bold text-zinc-600 m-10">{title}</h2>
        </div>
        <div className="w-full flex flex-wrap  md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-3 justify-center">
          {data?.data.map((product: IProduct, index: number) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    );
  }
};

export default Category;
