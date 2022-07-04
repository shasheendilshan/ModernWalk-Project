import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

import { Navbar } from "./components";
import { CartProvider } from "./context/cartContext";
import { UserProvider } from "./context/userContext";
import { Home, Category, SignUp, SignIn } from "./page-templates";
import { QueryProvider } from "./context/react query/reactQuery";
import { productCategories } from "./interfaces/products/products.interfaces";

const App = () => {
  return (
    <QueryProvider>
      <UserProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <ToastContainer />
            <Toaster />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route
                path="/mens-clothing"
                element={
                  <Category
                    category={productCategories.men}
                    title="Men's Clothing"
                  />
                }
              />
              <Route
                path="/womens-clothing"
                element={
                  <Category
                    category={productCategories.women}
                    title="Women's Clothing"
                  />
                }
              />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </UserProvider>
    </QueryProvider>
  );
};

export default App;
