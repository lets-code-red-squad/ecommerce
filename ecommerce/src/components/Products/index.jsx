import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
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
  );
}
