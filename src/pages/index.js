import React, { Component } from "react";
import logo from "../assets/img/logo.svg";

import Header from "./components/Header/Index";
import Sobre from "./components/Sobre/Index";
import Servicos from "./components/Servicos/Index";

export default class Index extends Component {
  render() {
    return (
      <div>
        <img src={logo} alt="" />
        <Header />
        <Sobre />
        <Servicos />
      </div>
    );
  }
}
