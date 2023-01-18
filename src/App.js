import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/variables.css';
import './styles/index.css';

import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Shop from "./Components/Shop";
import ItemDetail from "./Components/ItemDetail";
import Checkout from "./Components/Checkout";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="grid grid-main">
      <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ItemDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/basket" element={<Checkout title="basket"/>} />

        </Routes>
        <Footer />
      </BrowserRouter>      
    </div>
  );
}

export default App;
