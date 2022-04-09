import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

import ProductPage from './Routes/product';

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/products/productId" element={<ProductPage />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
