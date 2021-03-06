import { Input } from "../Input/";
import { BtnCancel, BtnSave } from "../Buttons";
import { useState, useEffect } from "react";
import { useProdutos } from "../../contexts/Products";
import { useNavigate } from "react-router-dom";
import './style.css';
import Footer from "../DefaultTemplate/Footer";

export default function Cadastro({
  titleContainer = 'Cadastro',
  title = '',
  price = 0,
  info = '',
  weight = 0,
  image = 'https://via.placeholder.com/350',
  id = ''
}) {
  const [getTitle, setTitle] = useState(title);
  const [getPrice, setPrice] = useState(price);
  const [getInfo, setInfo] = useState(info);
  const [getWeight, setWeight] = useState(weight);
  const [getImage, setImage] = useState(image);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [products, setProducts] = useProdutos();
  const navigate = useNavigate();

  useEffect(() => {
    const minCharacter = 5;
    const maxCharacter = 35;

    const errors = [
      getTitle.length < minCharacter || getTitle.length > maxCharacter,
      getInfo.length < minCharacter,
      getImage === 'https://via.placeholder.com/350',
      getPrice < 0,
      getWeight < 0,
    ];

    setButtonDisabled(() => errors.some((error) => error));
  }, [getTitle, getInfo, getPrice, getWeight, getImage, products]);


  const handleSubmit = (event) => {
    event.preventDefault();

    const productObj = {
      id: products.some((element) => element.title === getTitle)
        ? `${getTitle.toLowerCase().split(' ').join('-')}-${Math.floor(Math.random() * 1000)}`
        : getTitle.toLowerCase().split(' ').join('-'),
      title: getTitle,
      price: getPrice,
      info: getInfo,
      weight: getWeight,
      image: getImage !== image ? URL.createObjectURL(getImage) : image,
    };

    products.some((element) => element.id === id)
      ? products.splice(products.findIndex((element) => element.id === id), 1, productObj)
      : setProducts([productObj, ...products]);

    navigate('../', { replace: true });
  }

  return (
    <>
      <form className="cadastro-container flex" onSubmit={handleSubmit} id='cadastro-form'>
      <h1 className="title-container">{titleContainer} do Produto</h1>
        <div className="cadastro-inputs flex">
          <div>
            <Input
              name='title'
              label="T??tulo"
              type="text"
              id="input-title"
              value={getTitle}
              func={setTitle}
              className='input-cadastro'
            />
            <Input
              name='price'
              label="Pre??o"
              type="number"
              id="input-price"
              value={getPrice}
              func={setPrice}
              className='input-cadastro'
            />
            <Input
              name='info'
              label="Informa????es/Descri????o"
              type="text"
              id="input-info"
              tag="textarea"
              value={getInfo}
              func={setInfo}
              className='input-cadastro'
            />
            <Input
              name='weight'
              label="Peso"
              type="number"
              id="input-weigth"
              value={getWeight}
              func={setWeight}
              className='input-cadastro'
            />
          </div>

          <div className="image-container">
            {
              getImage !== image
                ? <img src={URL.createObjectURL(getImage)} alt='Imagem' className="image-cadastro" />
                : <img src={image} alt='Imagem' className="image-cadastro" />
            }
            <Input
              name='image'
              label="Selecione uma imagem"
              type="file"
              id="input-image"
              func={setImage}
              className='input-image'
            />
          </div>
        </div>

        <div className="btn-cadastro">
          <BtnSave disabled={buttonDisabled} />
          <BtnCancel name='Cancelar' />
        </div>
      </form>
      <Footer />
    </>
  );
}
