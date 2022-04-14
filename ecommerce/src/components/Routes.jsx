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
            element={
              <Cadastro
                title="Teste"
                price="Teste"
                info="Aaaa"
                weight="BBbbb"
                saveButtonDisabled={false}
                handleChange={console.log("alô")}
                saveButton={console.log("teste")}
              />
            }
          />
          <Route path="/" element={<App />} />
        </Routes>
      </DefalutTemplate>
    </Router>
  );
}
