import "./styles.css";
import React, { Component } from "react";
import ProdutoEdit from "./components/Products";
import data from "../src/contexts/data";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProdutoEdit />
      </div>
    );
  }
}

export default App;
