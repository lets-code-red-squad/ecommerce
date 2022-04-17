import Cadastro from "../Cadastro";
import { useParams } from "react-router-dom";
import { useProdutos } from "../../contexts/Products";
import { BtnDelete, BtnEdit } from "../Buttons";
import './ProductCard.css';
import './ProductList.css';

export function ProductCard({ title, price, info, weight, image, id, products }) {
  const priceFormated = (Number(price)).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL'
  })

  const weightFormated = (Number(weight).toLocaleString('pt-BR', {
    style: 'unit',
    unit: 'kilogram',

  }))

  return (
    <div className="flex product-card" id={id}>
      <div className="product-info flex">
        <h2 className="title">{title}</h2>
        <img src={image} alt={title} />
        <p className="info">{info}</p>
        <p>{`Peso: ${weightFormated}`}</p>
        <p className="price">{priceFormated}</p>
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
      id={id}
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
