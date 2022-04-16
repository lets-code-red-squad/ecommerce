import { Input } from "../Input/";
import { BtnCancel, BtnSave } from "../Buttons";
import { useState, useEffect } from "react";
import { useProdutos } from "../../contexts/Products";
import { useNavigate } from "react-router-dom";

export default function Cadastro({ title = '', price = 0, info = '', weight = 0, image = 'https://via.placeholder.com/350' }) {
  const [getTitle, setTitle] = useState(title);
  const [getPrice, setPrice] = useState(price);
  const [getInfo, setInfo] = useState(info);
  const [getWeight, setWeight] = useState(weight);
  const [getImage, setImage] = useState(image);
  const [buttonDisabled = true, setButtonDisabled] = useState();
  const [products, setProducts] = useProdutos();
  const navigate = useNavigate();

  useEffect(() => {
    const minCharacter = 5;
    const maxCharacter = 25;

    const errors = [
      getTitle.length < minCharacter || getTitle.length > maxCharacter,
      getInfo.length < minCharacter,
      getImage.length === 0,
      getPrice < 0,
      getWeight < 0,
    ];

    setButtonDisabled(() => errors.some((error) => error));
  }, [getTitle, getInfo, getPrice, getWeight, getImage]);


  const handleSubmit = (event) => {
    event.preventDefault();
    setProducts([{
      title: getTitle,
      price: getPrice,
      info: getInfo,
      weigth: getWeight,
      image: getImage !== image ? URL.createObjectURL(getImage) : image
    }, ...products]);
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
            value={getTitle}
            func={setTitle}
          />
          <Input
            name='price'
            label="Preço"
            type="number"
            id="input-price"
            value={getPrice}
            func={setPrice}
          />
          <Input
            name='info'
            label="Informações/Descrição"
            type="text"
            id="input-info"
            tag="textarea"
            value={getInfo}
            func={setInfo}
          />
          <Input
            name='weight'
            label="Peso"
            type="number"
            id="input-weigth"
            value={getWeight}
            func={setWeight}
          />
        </div>

        <div className="image-container">

          {
            getImage !== image ? <img src={URL.createObjectURL(getImage)} alt='Imagem' /> : <img src={image} alt='Imagem' />
          }
          { }
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
