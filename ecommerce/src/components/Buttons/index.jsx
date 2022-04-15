import { Link } from "react-router-dom";

export const BtnSave = ({ handlerSubmit, disabled }) => {
  return (
    <Link to='/'><button type="submit" className="buttons" onClick={handlerSubmit} disabled={disabled} >Salvar</button></Link>
  )
}

export const BtnEdit = () => {
  return (
    <Link to='/'><button onClick={(() => console.log('Eu ainda não estou funcionando :c'))}>Editar</button></Link>
  );
};

export const BtnDelete = ({ id, products }) => {
  return (
    <button
      onClick={(event) => {
        const element = event.target.parentElement;
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
