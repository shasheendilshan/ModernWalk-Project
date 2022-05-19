import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Navbar } from './components';
import { Home } from "./page-templates";


const App=()=> {


  return (
   <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
