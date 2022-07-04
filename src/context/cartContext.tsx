import React, { useState, createContext, useMemo, useContext } from "react";
import { IProduct } from "../interfaces/products/products.interfaces";
import toast from "react-hot-toast";
type cartItem = {
  product: IProduct;
  quantity: number;
};

interface ICartContext {
  show: boolean;
  showCart: () => void;
  hideCart: () => void;
  addProduct: (product: IProduct) => void;
  decreaseQuantity: (id: number) => void;
  removeProduct: (id: number) => void;
  cartItems: cartItem[];
  totalItems: number;
  totalPrice: number;
}

export const CartContext = createContext({} as ICartContext);

type Props = {
  children: React.ReactNode;
};

const CartProvider = ({ children }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<cartItem[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const showCart = () => {
    setShow(true);
  };

  const hideCart = () => {
    setShow(false);
  };

  const addProduct = (product: IProduct) => {
    if (cartItems.find((item) => item.product.id === product.id) == null) {
      const items = [...cartItems, { product: product, quantity: 1 }];
      setCartItems(items);
      setTotalItems((prev) => prev + 1);
      setTotalPrice((prev) => prev + product.price);
      console.log("cart items", cartItems);
      toast.success("Product added to the cart.");
    } else {
      const increaseQuantityIndex = cartItems.findIndex(
        (item) => item.product.id === product.id
      );
      cartItems[increaseQuantityIndex].quantity++;
      setTotalItems((prev) => prev + 1);
      setTotalPrice((prev) => prev + product.price);
      console.log("increase quantity");
    }
  };
  const decreaseQuantity = (id: number) => {
    const decreaseQuantityIndex = cartItems.findIndex(
      (item) => item.product.id === id
    );

    const foundProduct = cartItems[decreaseQuantityIndex];

    if (foundProduct.quantity > 1) {
      foundProduct.quantity--;
      setTotalItems((prev) => prev - 1);
      setTotalPrice((prev) => prev - foundProduct.product.price);
      console.log("cart items decrease");
    }
  };

  const removeProduct = (id: number) => {
    const removedItemIndex = cartItems.findIndex(
      (item) => item.product.id === id
    );
    const removeItem = cartItems[removedItemIndex];

    const newCartItems = cartItems.filter((item) => item.product.id !== id);

    setCartItems(newCartItems);
    setTotalItems((prev) => prev - removeItem.quantity);
    setTotalPrice(
      (prev) => prev - removeItem.product.price * removeItem.quantity
    );
    console.log("remove item", cartItems);
  };

  const data = useMemo(() => {
    return {
      show,
      showCart,
      hideCart,
      cartItems,
      addProduct,
      decreaseQuantity,
      removeProduct,
      totalItems,
      totalPrice,
    };
  }, [show, cartItems, totalItems, totalPrice]);

  // const data = {
  //   show,
  //   showCart,
  //   hideCart,
  //   cartItems,
  //   addProduct,
  //   decreaseQuantity,
  //   removeProduct,
  //   getTotalItems,
  //   totalItems,
  //   totalPrice,
  // };

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
