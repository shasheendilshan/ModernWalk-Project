import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Navbar } from "./components";
import { UserProvider } from "./context/userContext";
import { Home, Category, SignUp, SignIn } from "./page-templates";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route
            path="/mens-clothing"
            element={
              <Category category={"men's clothing"} title={"Men's Clothing"} />
            }
          />
          <Route
            path="/womens-clothing"
            element={
              <Category
                category={"women's clothing"}
                title={"Women's Clothing"}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
