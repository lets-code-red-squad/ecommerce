import { Input } from "../Input/";
import { BtnCancel, BtnSave } from "../Buttons";
import { useState, useEffect } from "react";
import { useProdutos } from "../../contexts/Products";

export default function Cadastro() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('0');
  const [info, setInfo] = useState('');
  const [weight, setWeight] = useState('0');
  const [image, setImage] = useState();
  const [endImage] = useState('https://via.placeholder.com/350');
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
            name='title'
            label="Título"
            type="text"
            id="input-title"
            tag="input"
            func={setTitle}
          />
          <Input
            name='price'
            label="Preço"
            type="number"
            id="input-price"
            tag="input"
            func={setPrice}
          />
          <Input
            name='info'
            label="Informações/Descrição"
            type="text"
            id="input-info"
            tag="textarea"
            func={setInfo}
          />
          <Input
            name='weight'
            label="Peso"
            type="number"
            id="input-weigth"
            tag="input"
            func={setWeight}
          />
        </div>

        <div>

          {
            image ? <img src={URL.createObjectURL(image)} alt='Imagem' /> : <img src={endImage} alt='Imagem' />
          }
          <Input
            name='image'
            label="Selecione uma imagem"
            type="file"
            id="input-image"
            tag="input"
            func={setImage}
          />
        </div>
      </div>

      <div>
        <BtnSave handlerSubmit={handlerSubmit} disabled={buttonDisabled} />
        <BtnCancel />
      </div>
    </form>
  );
}
