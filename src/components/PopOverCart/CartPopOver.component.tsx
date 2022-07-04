import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  AiOutlineShopping,
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineDelete,
} from "react-icons/ai";
import { useCartContext } from "../../context/cartContext";
import { formatCurrency } from "../../utilities/formatCurancy";

const CartPopOver = () => {
  const cartCtx = useCartContext();

  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button className="outline-none relative">
            {cartCtx.totalItems > 0 && (
              <span className="bg-red-500 p-2 h-[25px] w-[25px] rounded-full text-white flex items-center justify-center absolute top-[-10px] right-[-12px]">
                {cartCtx.totalItems}
              </span>
            )}

            <AiOutlineShopping size={35} />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute top-14 right-0 translate-x-10 bg-white  shadow-2xl rounded-sm w-[400px] h-[100vh]">
              <div className=" relative h-[90vh]">
                <div className="w-full  text-center">
                  <h2 className="p-3 text-xl">Cart items</h2>
                </div>
                <div className="flex flex-col gap-1">
                  {cartCtx.cartItems?.map((product, index) => (
                    <div
                      className="flex shadow-md rounded-xl h-28 overflow-hidden p-3  mx-2"
                      key={index}
                    >
                      <div className="w-16">
                        <img
                          src={product.product.image}
                          alt=""
                          className="w-16 h-16 object-contain "
                        />
                      </div>
                      <div className="w-48 px-1">
                        <div className="h-10">
                          <p className="text-sm">
                            {product.product.title.substring(0, 30)}
                          </p>
                        </div>
                        <div className="flex items-center mt-4 w-28 justify-between m-auto">
                          <span
                            className="bg-primary p-1 rounded-full active:brightness-125"
                            onClick={() => {
                              cartCtx.decreaseQuantity(product.product.id);
                            }}
                          >
                            <AiOutlineMinus color="#fff" />
                          </span>
                          <p className="px-2 text-xl">{product.quantity}</p>
                          <span
                            className="bg-primary p-1 rounded-full  active:brightness-125"
                            onClick={() => {
                              cartCtx.addProduct(product.product);
                            }}
                          >
                            <AiOutlinePlus color="#fff" />
                          </span>
                        </div>
                      </div>
                      <div className="w-32 text-center">
                        <div> {formatCurrency(product.product.price)}</div>
                        <div className="mt-6 flex items-center justify-end">
                          <span className="p-2 outline-1  rounded-full active:brightness-125">
                            <AiOutlineDelete
                              size={20}
                              color="red"
                              onClick={() =>
                                cartCtx.removeProduct(product.product.id)
                              }
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-full bg-slate-200 h-24 absolute bottom-0 right-0 ">
                  <div className="flex w-full justify-between px-2">
                    <div>
                      <h2 className="text-xl font-bold">Total Items :</h2>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">
                        {cartCtx.totalItems}
                      </h2>
                    </div>
                  </div>
                  <div className="flex w-full justify-between px-2">
                    <div>
                      <h2 className="text-xl font-bold">Total :</h2>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">
                        {formatCurrency(cartCtx.totalPrice)}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default CartPopOver;
