import "./styles.css";
import React, { Component } from "react";
import ProdutoEdit from "./components/Products";
import data from "../src/contexts/data";

class App extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      price: "0",
      info: "",
      weight: "0",
      saveButtonDisabled: true,
      products: data,
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => this.verifyFields());
  };

  verifyFields = () => {
    const { title, price, info, weight } = this.state;

    const errors = [
      title.length === 0,
      info.length === 0,
      price < 0,
      weight < 0
    ];

    const isDisabled = errors.some((error) => error);
    this.setState(() => ({ saveButtonDisabled: isDisabled }));
  };

  saveButton = (event) => {
    event.preventDefault();

    const { title, price, info, weight } = this.state;

    const product = { title, price, info, weight };

    this.setState((prevState) => ({
      title: "",
      price: "0",
      info: "",
      weight: "0",
      saveButtonDisabled: true,
      products: [...prevState.products, product]
    }));
  };

  render() {
    const { products } = this.state;

    return (
      <div className="App">
        <ProdutoEdit />
      </div>
    );
  }
}

export default App;
