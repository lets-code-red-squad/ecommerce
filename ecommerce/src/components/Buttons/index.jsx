import { Link, useNavigate } from "react-router-dom";
import { useProdutos } from "../../contexts/Products";
import ProductList, { ProductSearch } from "../Products";
import './style.css';

export const BtnSave = ({ disabled, id }) => {
  return (
    <button
      type="submit"
      className="buttons"
      disabled={disabled}
      form={id}
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
      className="buttons"
      onClick={() => {
        if (search === '') {
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
        const element = event.target.parentElement.parentElement;
        element.parentElement.removeChild(element);
        products.splice(id, 1);
      }}
    >
      Excluir
    </button>
  );
};

export const BtnCancel = () => {
  return (
    <Link to="/">
      <button className="buttons">Cancelar</button>
    </Link>
  );
};
