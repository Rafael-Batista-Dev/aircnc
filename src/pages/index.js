import React, { Component } from "react";

import Header from "./components/Header/Index";
import Sobre from "./components/Sobre/Index";
import Servicos from "./components/Servicos/Index";

export default class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sobre />
        <Servicos />
      </div>
    );
  }
}
