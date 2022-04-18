import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Cadastro from "./Cadastro";
import DefalutTemplate from "./DefaultTemplate";
import { ProductEdit, ProductSearch, ProductView } from "./Products";

export default function AppRoutes() {
  return (
    <Router>
      <DefalutTemplate>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cadastro" element={ <Cadastro /> } />
          <Route path='/edit-product/:id' element={<ProductEdit />}  />
          <Route path='/search/:search' element={<ProductSearch />} />
          <Route path='/view/:id' element={<ProductView />} />
        </Routes>
      </DefalutTemplate>
    </Router>
  );
}
