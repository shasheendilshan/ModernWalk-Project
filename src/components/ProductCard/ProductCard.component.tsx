import React from "react";

import { IProduct } from "../../interfaces/products/products.interfaces";
import { formatCurrency } from "./../../utilities/formatCurancy";
import { useCartContext } from "../../context/cartContext";
import { useGlobalContext } from "../../context/globalStateContext";

type Props = {
  product: IProduct;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const cartCtx = useCartContext();
  const globalCtx = useGlobalContext();

  const cardClick = () => {
    globalCtx.setProductDetails(product);
    globalCtx.showModal(true);
  };

  return (
    <div
      className="h-full w-72 bg-white flex flex-col mx-auto items-center  rounded-lg drop-shadow-2xl pt-2 cursor-pointer scale-90 hover:scale-100 transition duration-300 ease-linear"
      onClick={cardClick}
    >
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
        className={`h-36  w-full ${
          product.category !== "men's clothing" ? "bg-secondary" : "bg-primary"
        }  rounded-lg p-3 flex flex-col items-center overflow-auto`}
      >
        <h3 className="text-xl font-bold text-blue-900 pb-2">
          {/* RS {product.price} */}
          {formatCurrency(product.price)}
        </h3>

        {/* <button
          className="bg-blue-600 p-2 rounded-full my-1 text-white w-full font-bold shadow-md active:brightness-150"
          onClick={() => cartCtx.addProduct(product)}
        >
          Add to cart
        </button> */}
        <div className="h-20 overflow-hidden py-2 w-full">
          <p className=" text-xs md:text-sm text-center text-zinc-900  overflow-hidden py-2">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
