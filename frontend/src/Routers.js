import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./pages/components/Navbar/Index";
import Index from "./pages/Index";
import Missao from "./pages/Missao";
import SobreNos from "./pages/SobreNos";
import Servico from "./pages/Servico";
import Contato from "./pages/Contato";
import Login from "./pages/Login";

export default class Routers extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Index} />
        <Route path="/missao" component={Missao} />
        <Route path="/sobre-nos" component={SobreNos} />
        <Route path="/servico" component={Servico} />
        <Route path="/contato" component={Contato} />
        <Route path="/login" component={Login} />
      </BrowserRouter>
    );
  }
}
