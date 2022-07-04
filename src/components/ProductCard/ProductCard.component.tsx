import React from "react";

import { IProduct } from "../../interfaces/products/products.interfaces";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { formatCurrency } from "./../../utilities/formatCurancy";
import { useCartContext } from "../../context/cartContext";

type Props = {
  product: IProduct;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  // console.log("productCard rendered");
  const cartCtx = useCartContext();

  return (
    <div className="h-full w-72 bg-white flex flex-col mx-auto items-center  rounded-lg drop-shadow-2xl pt-2 cursor-pointer scale-90 hover:scale-100 transition duration-300 ease-linear">
      <div className="w-full p-2 h-24 overflow-hidden">
        <h3 className="text-lg font-semibold text-center">
          {product.title.substring(0, 100)}
        </h3>
      </div>
      <div className="h-36 w-36 mb-2 flex justify-center">
        <img
          src={product.image}
          alt="product"
          className="object-contain  h-36 w-36"
        />
      </div>

      <div
        className={`h-48  w-full ${
          product.category !== "men's clothing" ? "bg-secondary" : "bg-primary"
        }  rounded-lg p-3 flex flex-col items-center overflow-auto`}
      >
        <h3 className="text-xl font-bold text-blue-900 pb-2">
          {/* RS {product.price} */}
          {formatCurrency(product.price)}
        </h3>
        {/* <div className="flex items-center  w-28 justify-between">
          <span
            className="bg-blue-600 p-2 rounded-full active:brightness-125"
            onClick={() => cartCtx.decrease(product.id)}
          >
            <AiOutlineMinus color="#fff" />
          </span>
          <p className="px-2 text-xl">{cartCtx.getItemQuantity(product.id)}</p>
          <span
            className="bg-blue-600 p-2 rounded-full  active:brightness-125"
            onClick={() => cartCtx.increase(product.id)}
          >
            <AiOutlinePlus color="#fff" />
          </span>
        </div> */}
        <button
          className="bg-blue-600 p-2 rounded-full my-1 text-white w-full font-bold shadow-md active:brightness-150"
          onClick={() => cartCtx.addProduct(product)}
        >
          Add to cart
        </button>

        <p className=" text-xs md:text-sm text-center text-zinc-900  text-ellipsis overflow-hidden py-2">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
