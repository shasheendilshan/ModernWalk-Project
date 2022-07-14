import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

import { Button } from "../index";
import { useGlobalContext } from "../../context/globalStateContext";
import { useCartContext } from "../../context/cartContext";
import style from "./ProductModal.module.scss";
import { formatCurrency } from "./../../utilities/formatCurancy";

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
        className={style.dialog}
      >
        <div className={style.blurBackground}>
          <div className={style.dialogPanelContainer}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={style.dialogPanel}>
                <Dialog.Title className={style.header}>
                  <span>{product?.title}</span>
                  <span
                    className={style.closeIconContainer}
                    onClick={closeModal}
                  >
                    <AiOutlineClose size={22} />
                  </span>
                </Dialog.Title>

                <div className={style.content}>
                  <div className={style.productImage}>
                    <img src={product?.image} alt="product" />
                  </div>
                  <h3>{product && formatCurrency(product?.price)}</h3>

                  <div className={style.countContainer}>
                    <span onClick={decrement}>
                      <AiOutlineMinus color="#fff" />
                    </span>
                    <div className="px-2 text-xl">{count}</div>
                    <span onClick={increment}>
                      <AiOutlinePlus color="#fff" />
                    </span>
                  </div>

                  <div className={style.description}>
                    <h3>Description : </h3>
                    <p>{product?.description}</p>
                  </div>
                </div>

                <div className={style.bottomContainer}>
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
                        closeModal();
                      }
                    }}
                  />
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