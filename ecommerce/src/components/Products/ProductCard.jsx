import { BtnDelete, BtnEdit } from "../Buttons";

export default function ProductCard({ title, price, info, weight, image, id, products }) {

  return (
    <div className="product-card" id={id}>
      <BtnDelete id={id} products={products} />
      <img src={image} alt={title} />
      <p className="title">{title}</p>
      <p className="price">{`R$${price}`}</p>
      <p className="info">{info}</p>
      <p>{`${weight}kg`}</p>
      <BtnEdit />
    </div>
  );
}
