import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProdutos } from "../../contexts/Products";
import { BtnDelete, BtnEdit } from "../Buttons";
import Cadastro from "../Cadastro";
import { Input } from "../Input";
// import { Input } from "../Input";

export function ProductCard({ title, price, info, weight, image, id, products }) {
  return (
    <div className="flex product-card" id={id}>
      <div className="product-info flex">
        <h2 className="title">{title}</h2>
        <img src={image} alt={title} />
        <p className="info">{info}</p>
        <p>{`Peso: ${weight}kg`}</p>
        <p className="price">{`R$${price}`}</p>
      </div>
      <div className="flex buttons-card">
        <BtnEdit id={id} title={title} />
        <BtnDelete id={id} products={products} />
      </div>
    </div>
  );
}

export const ProductEdit = () => {
  const [ products ] = useProdutos()
  const { id } = useParams();
  const { title, price, info, weight, image } = products[id];

  return (
    <Cadastro
      title={title}
      price={price}
      info={info}
      weight={weight}
      image={image}
    />
  )
}

export default function ProductList({ products }) {
  return (
    <div className="products flex">
      <div className="products-container flex">
        {products.map(({ title, price, info, weight, image }, index) => (
          <ProductCard
            title={title}
            price={price}
            info={info}
            weight={weight}
            image={image}
            id={index}
            products={products}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
