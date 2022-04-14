import { BtnDelete } from "../Buttons";

export default function ProductCard({ title, price, info, weight, id }) {
  return (
    <div className="product-card" id={id}>
      <BtnDelete id={id} />
      <p>{title}</p>
      <p>{price}</p>
      <p>{info}</p>
      <p>{`${weight}kg`}</p>
      <button
        onClick={() => {
          console.log("oláaa");
        }}
      >
        Editar
      </button>
    </div>
  );
}
