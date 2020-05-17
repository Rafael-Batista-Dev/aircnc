import React, { Component } from "react";

import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";

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
