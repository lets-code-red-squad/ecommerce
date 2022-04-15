import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <div className="products-container flex">
      {products.map((element, index) => (
        <ProductCard
          title={element.title}
          price={element.price}
          info={element.info}
          weight={element.weight}
          id={index}
          products={products}
          key={index}
        />
      ))}
    </div>
  );
}
