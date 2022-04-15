import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Cadastro from "./Cadastro";
import DefalutTemplate from "./DefaultTemplate";

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
        </Routes>
      </DefalutTemplate>
    </Router>
  );
}
