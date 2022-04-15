import { Link, useNavigate } from "react-router-dom";

export const BtnSave = ({ disabled, id }) => {
  return (
      <button type="submit" className="buttons" disabled={disabled} form={id}>Salvar</button>
  )
}

export const BtnSearch = ({ search }) => {
  return (
    <button className="buttons" onClick={() => console.log(search)}>Pesquisar</button>
  )
}

export const BtnEdit = () => {
  const navigate = useNavigate()
  return (
    <button onClick={(() => {
      console.log('não estou funcionando ainda :c')
      navigate('../', { replace: true })})}>Editar</button>
  );
};

export const BtnDelete = ({ id, products }) => {
  return (
    <button
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
