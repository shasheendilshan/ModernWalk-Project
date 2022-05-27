import React from "react";
import { AiOutlineLeft, AiOutlineShopping } from "react-icons/ai";
import { useCartContext } from "../../context/cartContext";
import Button from "../Button/Button.component";

const Cart: React.FC = () => {
  const cartCtx = useCartContext();

  return (
    <div className="w-[100vw] fixed bg-black/10 top-0  z-100">
      <div className="h-[100vh] w-[100vw] md:w-[600px] bg-white  float-right relative py-4">
        <button className="flex items-center ml-3 h-9 gap-1 text-xl">
          <AiOutlineLeft onClick={cartCtx?.hideCart} />
          <span className="text-xl ">your Cart</span>
          <span className="ml-3 text-red-500">(0 items)</span>
        </button>

        <div className=" flex flex-col items-center w-full mt-[100px] mx-3">
          <AiOutlineShopping size={150} color="#C0C0C0" />
          <h3 className="text-2xl font-bold text-slate-700">
            Your shopping cart is empty
          </h3>
          <div className="mt-8">
            <Button name="Continue Shopping" onClick={cartCtx?.hideCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
