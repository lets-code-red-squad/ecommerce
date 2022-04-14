import React, { createContext, useContext, useState } from "react";
import data from "./data";

const ProductContext = createContext();

export default function ProdutProvider({ children }) {
  const [produts, setProduct] = useState(data);

  return (
    <ProductContext.Provider value={{ produts, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProdutos = () => {
  const context = useContext(ProductContext);
  const { produts, setProduct } = context;

  return [produts, setProduct];
};
