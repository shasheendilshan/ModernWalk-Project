import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Navbar } from './components';
import { Home,Category } from "./page-templates";


const App=()=> {


  return (
   <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route
            path="/mens-clothing"
            element={
              <Category
                category={"men's clothing"}
                title={"Men's Clothing"}
              />
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
  );
}

export default App;
