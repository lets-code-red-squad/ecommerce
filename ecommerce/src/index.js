import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProdutoProvider from "./contexts/Products";
import AppRoutes from "./components/Routes";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ProdutoProvider>
      <AppRoutes />
    </ProdutoProvider>
  </StrictMode>
);
