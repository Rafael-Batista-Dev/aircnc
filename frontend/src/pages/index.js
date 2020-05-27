import React, { Component } from "react";

import Header from "./components/Header/Index";
import Beneficios from "./components/Beneficios/index";
import Footer from "./components/Footer/Index";

export default class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Beneficios />
        <Footer />
      </div>
    );
  }
}
