import { BtnDelete, BtnEdit } from "../Buttons";

function ProductCard({ title, price, info, weight, image, id, products }) {
  return (
    <div className="flex product-card">
      <div className="product-info flex" id={id}>
        <h2 className="title">{title}</h2>
        <img src={image} alt={title} />
        <p className="info">{info}</p>
        <p>{`Peso: ${weight}kg`}</p>
        <p className="price">{`R$${price}`}</p>
      </div>
      <div className="flex buttons-card">
        <BtnEdit />
        <BtnDelete id={id} products={products} />
      </div>
    </div>
  );
}

export default function ProductList({ products }) {
  return (
    <div className="products flex">
      <div className="products-container flex ">
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
