import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import NewProduct from "./components/NewProduct";
import ProductDetail from "./components/ProductDetail";
import ProductEdit from "./components/ProductEdit";
import ProductDelete from "./components/ProductDelete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList/>} />
        <Route path="/products" element={<NewProduct/>} />
        <Route path={`/products/:productId`} element={<ProductDetail />} />
        <Route path={`/products/edit/:productId`} element={<ProductEdit />} />
        <Route path={`/products/delete/:productId`} element={<ProductDelete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
