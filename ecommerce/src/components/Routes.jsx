import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Cadastro from "./Cadastro";
import DefalutTemplate from "./DefaultTemplate";
import { ProductEdit, ProductSearch } from "./Products";

export default function AppRoutes() {
  return (
    <Router>
      <DefalutTemplate>
        <Routes>
          <Route
            path="/cadastro"
            element={ <Cadastro /> }
          />
          <Route path="/" element={<App />} />
          <Route path='/edit-product/:id' element={<ProductEdit />}  />
          <Route path='/search/:search' element={<ProductSearch />} />
        </Routes>
      </DefalutTemplate>
    </Router>
  );
}
