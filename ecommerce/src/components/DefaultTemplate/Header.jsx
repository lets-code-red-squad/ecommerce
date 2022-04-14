import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex">
      <h1>Logo</h1>
      <Link to="/">Página Inicial</Link>
      <Link to="/cadastro">Cadastro</Link>
    </header>
  );
}
