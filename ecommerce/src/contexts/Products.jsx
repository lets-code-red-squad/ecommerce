import React, { createContext, useContext, useState } from "react";
import data from "./data";

const ProductContext = createContext();

export default function ProdutProvider({ children }) {
  const [products, setProduct] = useState(data);

  return (
    <ProductContext.Provider value={{ products, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProdutos = () => {
  const context = useContext(ProductContext);
  const { products, setProduct } = context;

  return [products, setProduct];
};
