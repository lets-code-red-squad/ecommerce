import "./styles.css";
import ProductList from "./components/Products";
import { useProdutos } from "./contexts/Products";

export default function App() {
  const [products] = useProdutos();
  return <ProductList products={products} />
}
