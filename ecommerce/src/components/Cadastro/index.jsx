import { Input } from "../Input/";
import { onSubmit, BtnCancel, BtnSave } from "../Buttons";

export default function Cadastro() {
  return (
    <form className="cadastro-container flex" onSubmit={onSubmit}>
      <div className="cadastro-inputs flex">
        <div>
          <Input
            name="title"
            label="Título"
            type="text"
            id="input-title"
            tag="input"
          />
          <Input
            name="price"
            label="Preço"
            type="number"
            id="input-price"
            tag="input"
          />
          <Input
            name="info"
            label="Informações/Descrição"
            type="text"
            id="input-info"
            tag="textarea"
          />
          <Input
            name="weight"
            label="Peso"
            type="number"
            id="input-weigth"
            tag="input"
          />
        </div>
        <img src="https://via.placeholder.com/350" alt="example" />
      </div>

      <div>
        <BtnSave />
        <BtnCancel />
      </div>
    </form>
  );
}
