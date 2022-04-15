import { Link } from "react-router-dom";
import { useProdutos } from '../../contexts/Products'

export const BtnSave = ({ handlerSubmit }) => {
  return (
    <Link to='/'><button type="submit" className="buttons" onClick={handlerSubmit}>Salvar</button></Link>
  )
}

export const BtnEdit = () => {
  return (
    <Link to='/'><button>Editar</button></Link>
  );
};

export const BtnDelete = ({ id }) => {
  const [ produts ]= useProdutos();
  
  return (
    <button
    onClick={ (event) => {
        const element = event.target.parentElement;
        element.parentElement.removeChild(element);
        produts.splice(id, 1);
      } }
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
