import { Link } from "react-router-dom";
import { useProdutos } from '../../contexts/Products'

export const onSubmit = (event) => {
  event.preventDefault(); //  evitando que, ao clicar no botão, ele recarregue a página
  console.log("onSubmit");
  return <></>;
};

export const BtnSave = () => {
  return (
    <Link to='/'><button className="buttons">Salvar</button></Link>
  )
}

export const BtnEdit = () => {
  console.log("BtnEdit");
};

export const BtnDelete = ({ id }) => {
  const [ produts ]= useProdutos();
  
  return (
    <button
    onClick={(event) => {
        const element = event.target.parentElement;
        element.parentElement.removeChild(element);
        produts.splice(id, 1);
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
