import { Input } from "../Input/";
import { BtnCancel, BtnSave } from "../Buttons";
import { useState, useEffect } from "react";
import { useProdutos } from "../../contexts/Products";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('0');
  const [info, setInfo] = useState('');
  const [weight, setWeight] = useState('0');
  const [image, setImage] = useState('');
  const [endImage] = useState('https://via.placeholder.com/350');
  const [buttonDisabled = true, setButtonDisabled] = useState();
  const [products, setProducts] = useProdutos();
  const navigate = useNavigate();

  useEffect(() => {
    const minCharacter = 5;
    const maxCharacter = 25;

    const errors = [
      title.length < minCharacter || title.length > maxCharacter,
      info.length < minCharacter,
      image.length === 0 ,
      price < 0,
      weight < 0,
    ];

    setButtonDisabled(() => errors.some((error) => error));
  }, [title, info, price, weight, image, endImage]);


  const handleSubmit = (event) => {
    event.preventDefault();
    setProducts([{ title, price, info, weight, image: URL.createObjectURL(image) }, ...products]);
    navigate('../', { replace: true });
  }

  return (
    <form className="cadastro-container flex" onSubmit={handleSubmit} id='cadastro-form'>
      <div className="cadastro-inputs flex">
        <div>
          <Input
            name='title'
            label="Título"
            type="text"
            id="input-title"
            func={setTitle}
          />
          <Input
            name='price'
            label="Preço"
            type="number"
            id="input-price"
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
            func={setWeight}
          />
        </div>

        <div className="image-container">

          {
            image ? <img src={URL.createObjectURL(image)} alt='Imagem' /> : <img src={endImage} alt='Imagem' />
          }
          {}
          <Input
            name='image'
            label="Selecione uma imagem"
            type="file"
            id="input-image"
            func={setImage}
          />
        </div>
      </div>

      <div>
        <BtnSave disabled={buttonDisabled} id='cadastro-form' />
        <BtnCancel />
      </div>
    </form>
  );
}
