import { Input } from "../Input/";
import { onSubmit, BtnCancel, BtnSave } from "../Buttons";
import { useState } from "react";
import { useProdutos } from "../../contexts/Products";

export default function Cadastro() {
  const [ title, setTitle ] = useState();
  const [ price, setPrice ] = useState();
  const [ info, setInfo ] = useState();
  const [ weight, setWeight ] = useState();
  const [ products, setProducts ] = useProdutos();

  const handlerSubmit = (event) => {
    event.preventDefault()
    
    setProducts([...products, {
      title,
      price,
      info,
      weight,
    }])
  }

  return (
    <form className="cadastro-container flex">
      <div className="cadastro-inputs flex">
        <div>
          <Input
            name='title'
            label="Título"
            type="text"
            id="input-title"
            tag="input"
            func={setTitle}
          />
          <Input
            name="price"
            label="Preço"
            type="number"
            id="input-price"
            tag="input"
            func={setPrice}
          />
          <Input
            name="info"
            label="Informações/Descrição"
            type="text"
            id="input-info"
            tag="textarea"
            func={setInfo}
          />
          <Input
            name="weight"
            label="Peso"
            type="number"
            id="input-weigth"
            tag="input"
            func={setWeight}
          />
        </div>
        <img src="https://via.placeholder.com/350" alt="example" />
      </div>

      <div>
        <BtnSave handlerSubmit={handlerSubmit} />
        <BtnCancel />
      </div>
    </form>
  );
}
