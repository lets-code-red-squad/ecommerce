import { useState } from "react";
import { Link } from "react-router-dom";
import { BtnSearch } from "../Buttons";
import { Input } from "../Input";
import logo from './logo.png'

export default function Header() {
  const [search, setSearch] = useState();

  return (
    <header className="flex">
      <Link to="/"><img className="image-logo" src={logo} alt="" /></Link>
      <div className="search-container flex">
        <Input
          name='search'
          type='search'
          func={setSearch}
        />
        <BtnSearch search={search} />
      </div>
      <div className="nav-bar-header flex">

        <Link className="link-header" to="/">Página Inicial</Link>
        <Link className="link-header" to="/cadastro">Cadastro</Link>
      </div>
    </header>
  );
}
