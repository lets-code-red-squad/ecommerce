import { useState } from "react";
import { Link } from "react-router-dom";
import { BtnSearch } from "../Buttons";
import { Input } from "../Input";

export default function Header() {
  const [search, setSearch] = useState();

  return (
    <header className="flex">
      <h1>Logo</h1>
      <div className="search-container flex">
        <Input
          name='search'
          type='search'
          func={setSearch}
        />
        <BtnSearch search={search} />
      </div>
      <div>
        <Link to="/">Página Inicial</Link>
        <Link to="/cadastro">Cadastro</Link>
      </div>
    </header>
  );
}
