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
  });

  const weightFormated = (Number(weight).toLocaleString('pt-BR', {
    style: 'unit',
    unit: 'kilogram',
  }));

  return (
    <div className="product-card-container flex">
      <div className="product-card flex" id={id} onClick={() => console.log(`item ${id} vizualizado!`)} >
        <div className="product-info flex">
          <div className="image-container">
            <img src={image} alt={title} className="image" />
          </div>
          <div className="title-container flex">
            <h2 className="title">{title}</h2>
          </div>
        </div>
        <div className="flex buttons-card">
          <BtnEdit id={id} title={title} />
          <BtnDelete id={id} products={products} />
        </div>
      </div>
    </div>
  );
}

export const ProductView = () => {
  const [products] = useProdutos()
  const { id } = useParams();
  const { title, price, info, weight, image } = products.find((element) => element.id === id);

  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export const ProductEdit = () => {
  const [products] = useProdutos()
  const { id } = useParams();
  const { title, price, info, weight, image } = products.find((element) => element.id === id);

  return (
    <Cadastro
      title={title}
      price={price}
      info={info}
      weight={weight}
      image={image}
      id={id}
    />
  );
}

export const ProductSearch = () => {
  const [products] = useProdutos();
  const { search } = useParams();
  const allWordsSearch = search.split(' ').toLowerCase();
  const productsFiltred = products.filter((element) => allWordsSearch.some((word) =>
    element.title.toLowerCase().split(' ').includes(word))
  );

  return productsFiltred.length === 0
    ? (
      <div className="undefined flex">
        <p>Nenhum resultado para <strong>{search}</strong>...</p>
        <p>Verifique sua pesquisa e tente novamente.</p>
      </div>
    )
    : (
      <ProductList products={productsFiltred} />
    )
}

export default function ProductList({ products }) {
  return (
    <div className="products flex">
      <div className="products-container flex">
        {products.map(({ title, price, info, weight, image, id }, index) => {

          return (
            <ProductCard
              title={title}
              price={price}
              info={info}
              weight={weight}
              image={image}
              id={id}
              products={products}
              key={index}
            />
          )
        })}
      </div>
    </div>
  );
}
