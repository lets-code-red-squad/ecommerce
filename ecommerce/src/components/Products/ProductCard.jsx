import { BtnDelete, BtnEdit } from "../Buttons";

export default function ProductCard({ title, price, info, weight, id, products }) {

  return (
    <div className="product-card" id={id}>
      <BtnDelete id={id} products={products} />
      <p className="title">{title}</p>
      <p className="price">{`R$${price}`}</p>
      <p className="info">{info}</p>
      <p>{`${weight}kg`}</p>
      <BtnEdit />
    </div>
  );
}
