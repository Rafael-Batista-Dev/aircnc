import React, { Component } from "react";

import Header from "./components/Header/Index";
import Beneficios from "./components/Beneficios/Index";
import Planos from "./components/Planos/Index";
import Footer from "./components/Footer/Index";

export default class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Beneficios />
        <Planos />
        <Footer />
      </div>
    );
  }
}
