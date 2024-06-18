import React from "react";
// import Crud from "./Componenet/Crud";
// import CRUD1 from "./Componenet/CRUD1";
// import Validation from "./Componenet/Validation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./REDUX/Home";
import Cart from "./REDUX/Cart";
import Navbar from "./REDUX/Navbar";
import { Provider } from "react-redux";
import Store from "./REDUX/Store/Store";
import SinglePage from "./REDUX/SinglePage";

const App = () => {
  return (
    <div>
      {/* <Crud />
      <Validation />
      <CRUD1 /> */}

      <Provider store={Store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="demo/:id" element={<SinglePage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
