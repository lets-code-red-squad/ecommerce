import { Link, useNavigate } from "react-router-dom";
import { useProdutos } from "../../contexts/Products";
import ProductList from "../Products";
import './style.css';

export const BtnSave = ({ disabled }) => {
  return (
    <button
      type="submit"
      className="buttons"
      disabled={disabled}
    >
      Salvar
    </button>
  )
}

export const BtnSearch = ({ search }) => {
  const navigate = useNavigate();
  const [products] = useProdutos();

  return (
    <button
      className="btn-search"
      onClick={() => {
        if (search === '' || search === undefined) {
          navigate('/', { replace: true });
          return <ProductList products={products} />;
        }

        navigate(`/search/${search}`, { replace: true });
      }}
    >
      Pesquisar
    </button>
  )
}

export const BtnEdit = ({ id }) => {
  const navigate = useNavigate();
  return (
    <button className="btn-edit" onClick={(() => {
      navigate(`/edit-product/${id}`, { replace: true });
    })}>Editar</button>
  );
};

export const BtnDelete = ({ id, products }) => {
  return (
    <button
      className="btn-delete"
      onClick={(event) => {
        const element = event.target.parentElement.parentElement.parentElement;
        element.parentElement.removeChild(element);
        products.splice(id, 1);
      }}
    >
      Excluir
    </button>
  );
};

export const BtnCancel = ({ name }) => {
  return (
    <Link to="/">
      <button className="buttons">{name}</button>
    </Link>
  );
};
