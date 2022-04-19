import Cadastro from "../Cadastro";
import { useNavigate, useParams } from "react-router-dom";
import { useProdutos } from "../../contexts/Products";
import { BtnCancel, BtnDelete, BtnEdit } from "../Buttons";
import "./ProductCard.css";
import "./ProductList.css";
import "./ProductView.css";
import Footer from "../DefaultTemplate/Footer";

export function ProductCard({ title, image, id, products }) {
  const navigate = useNavigate();

  return (
    <div className="product-card-container flex">
      <div className="product-card flex" id={id}>
        <div
          className="product-info flex"
          onClick={() => {
            navigate(`/view/${id}`, { replace: true });
          }}
        >
          <div className="image-card flex">
            <img src={image} alt={title} className="image" />
          </div>
          <div className="title-container-card flex">
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
  const [products] = useProdutos();
  const { id } = useParams();
  const { title, price, info, weight, image } = products.find(
    (element) => element.id === id
  );

  const priceFormated = Number(price).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL"
  });

  const weightFormated = Number(weight).toLocaleString("pt-BR", {
    style: "unit",
    unit: "kilogram"
  });

  return (
    <>
      <div className="product-view flex">
        <div className="product-view-container flex">
          <div className="title-view">
            <h1 className="title-container">{title}</h1>
          </div>
          <div className="flex">
            <div className="left-view">
              <img src={image} alt={title} className="image-view" />
            </div>
            <div className="right-view flex">
              <div>
                <h3>Preço:</h3>
                <p>{priceFormated}</p>
              </div>
              <div>
                <h3>Informações/Descrição:</h3>
                <div className="info-view">
                  {info.split("\n").map((paragraph) => (
                    <p>{paragraph}<br /></p>
                  ))}
                </div>
              </div>
              <div>
                <h3>Peso:</h3>
                <p>{weightFormated}</p>
              </div>
            </div>
          </div>
          <div className="btn-back">
            <BtnCancel name="Voltar" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const ProductEdit = () => {
  const [products] = useProdutos();
  const { id } = useParams();
  const { title, price, info, weight, image } = products.find(
    (element) => element.id === id
  );

  return (
    <Cadastro
      titleContainer="Edição"
      title={title}
      price={price}
      info={info}
      weight={weight}
      image={image}
      id={id}
    />
  );
};

export const ProductSearch = () => {
  const [products] = useProdutos();
  const { search } = useParams();
  const allWordsSearch = search.toLowerCase().split(" ");
  const productsFiltred = products.filter((element) =>
    allWordsSearch.some((word) =>
      element.title.toLowerCase().split(" ").includes(word)
    )
  );

  return productsFiltred.length === 0 ? (
    <div className="undefined flex">
      <p>
        Nenhum resultado para <strong>{search}</strong>...
      </p>
      <p>Verifique sua pesquisa e tente novamente.</p>
      <Footer />
    </div>
  ) : (
    <ProductList products={productsFiltred} />
  );
};

export default function ProductList({ products }) {
  return (
    <>
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
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
