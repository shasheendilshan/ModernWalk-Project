import React, { useState, createContext, useMemo, useContext } from "react";

import { ICartContext } from "./../interfaces/products/products.interfaces";
export const CartContext = createContext<ICartContext | null>(null);

type Props = {
  children: React.ReactNode;
};

const CartProvider = ({ children }: Props) => {
  const [show, setShow] = useState<boolean | null>(false);

  const showCart = () => {
    setShow(true);
  };

  const hideCart = () => {
    setShow(false);
  };

  const data = useMemo(() => {
    return {
      show,
      showCart,
      hideCart,
    };
  }, [show]);

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartProvider");
  }

  return context;
};

export { CartProvider, useCartContext };
