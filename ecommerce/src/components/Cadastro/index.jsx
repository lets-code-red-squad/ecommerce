import { Input } from "../Input/";
import { BtnCancel, BtnSave } from "../Buttons";
import { useState, useEffect } from "react";
import { useProdutos } from "../../contexts/Products";

export default function Cadastro() {
  const [title = '', setTitle] = useState();
  const [price = '0', setPrice] = useState();
  const [info = '', setInfo] = useState();
  const [weight = '0', setWeight] = useState();
  const [buttonDisabled = true, setButtonDisabled] = useState();
  const [products, setProducts] = useProdutos();

  useEffect(() => {
    const minCharacter = 5;

    const errors = [
      title.length < minCharacter,
      info.length < minCharacter,
      price < 0,
      weight < 0,
    ];

    setButtonDisabled(() => errors.some((error) => error));
  }, [title, info, price, weight]);


  const handlerSubmit = (event) => {
    event.preventDefault();
    setProducts([{ title, price, info, weight }, ...products]);
  }

  return (
    <form className="cadastro-container flex">
      <div className="cadastro-inputs flex">
        <div>
          <Input
            label="Título"
            type="text"
            id="input-title"
            tag="input"
            func={setTitle}
          />
          <Input
            label="Preço"
            type="number"
            id="input-price"
            tag="input"
            func={setPrice}
          />
          <Input
            label="Informações/Descrição"
            type="text"
            id="input-info"
            tag="textarea"
            func={setInfo}
          />
          <Input
            label="Peso"
            type="number"
            id="input-weigth"
            tag="input"
            func={setWeight}
          />
        </div>

        <div>
          <img src="https://via.placeholder.com/350" alt="example" />
        </div>
      </div>

      <div>
        <BtnSave handlerSubmit={handlerSubmit} disabled={buttonDisabled} />
        <BtnCancel />
      </div>
    </form>
  );
}
