import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

import { Button } from "../index";
import { useGlobalContext } from "../../context/globalStateContext";
import { useCartContext } from "../../context/cartContext";
import "./style.css";
import styles from "./ProductModal.module.scss";

const ProductModal = () => {
  const globalCtx = useGlobalContext();
  const cartCtx = useCartContext();
  const product = globalCtx.product;

  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const closeModal = () => {
    setCount(1);
    console.log("count", count);
    globalCtx.showModal(false);
  };

  return (
    <Transition appear show={globalCtx.productModalState} as={Fragment}>
      <Dialog
        as="div"
        open={globalCtx.productModalState}
        onClose={closeModal}
        className="relative z-20"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative bg-white  w-full max-w-md h-[550px] rounded-2xl">
                <Dialog.Title className={styles.header}>
                  <span>{product?.title}</span>
                  <span
                    className="flex items-center justify-center"
                    onClick={closeModal}
                  >
                    <AiOutlineClose size={22} color="rgba(24, 33, 50, 0.3)" />
                  </span>
                </Dialog.Title>
                {/* <div className="absolute top-[10px] right-[8px]">
                  <span
                    className="flex items-center justify-center p-2"
                    onClick={closeModal}
                  >
                    <AiOutlineClose size={22} color="rgba(24, 33, 50, 0.3)" />
                  </span>
                </div> */}
                <div>
                  <div className="w-full  mt-8 h-[350px] modal-panel ">
                    <div className="h-36 w-36 mb-2 flex justify-center mx-auto">
                      <img
                        src={product?.image}
                        alt="product"
                        className="object-contain"
                      />
                    </div>
                    <div className="flex items-center w-full px-36 py-3 justify-between  mb-4">
                      <div
                        className="bg-blue-600 p-3 rounded-md active:brightness-125 cursor-pointer"
                        onClick={decrement}
                      >
                        <AiOutlineMinus color="#fff" />
                      </div>
                      <div className="px-2 text-xl">{count}</div>
                      <div
                        className="bg-blue-600 p-3 rounded-md  active:brightness-125 cursor-pointer"
                        onClick={increment}
                      >
                        <AiOutlinePlus color="#fff" />
                      </div>
                    </div>
                    <div className="text-justify px-3">
                      <h3 className="text-md font-quicksand font-bold leading-8">
                        Description :{" "}
                      </h3>
                      <p className="text-sm font-quicksand text-text_primary">
                        {product?.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute w-full  py-3 max-w-md bottom-0 left-0">
                  <div className="flex gap-2 px-6">
                    <Button
                      name="Cancel"
                      variant="outlined"
                      onClick={closeModal}
                    />
                    <Button
                      name="Add To Cart"
                      onClick={() => {
                        if (product) {
                          cartCtx.addProductToCart(product, count);
                        }
                      }}
                    />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProductModal;
