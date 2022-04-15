import { BtnDelete, BtnEdit } from "../Buttons";

export default function ProductCard({ title, price, info, weight, id }) {
  return (
    <div className="product-card" id={id}>
      <BtnDelete id={id} />
      <p className="title">{title}</p>
      <p className="price">{price}</p>
      <p className="info">{info}</p>
      <p>{`${weight}kg`}</p>
      <BtnEdit />
    </div>
  );
}
