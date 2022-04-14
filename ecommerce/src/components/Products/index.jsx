import ProductCard from "./ProductCard";
import { useProdutos } from "../../contexts/Products";

export default function ProdutoEdit() {
  const [produtos] = useProdutos();

  return (
    <div className="products-container flex">
      {produtos.map((element, index) => (
        <ProductCard
          title={element.title}
          price={element.price}
          info={element.info}
          weigth={element.weight}
          id={index}
          key={index}
        />
      ))}
    </div>
  );
}
