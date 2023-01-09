import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Shop from "./Components/Shop";
import ItemDetail from "./Components/ItemDetail";
import Checkout from "./Components/Checkout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ItemDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/basket" element={<Checkout title="basket"/>} />

        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
