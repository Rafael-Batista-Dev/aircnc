import React, { Component } from "react";
import logo from "../../../assets/img/logo.svg";

import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <nav>
        <div className="logoBtn">
          <div className="logo">
            <a className="logo" href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>

          <div className="btn" onClick={this.handleClick}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <div className="menu">
          <ul className={this.state.isOpen ? "showNav" : "undifined"}>
            <li>
              <a href="/">Home</a>
            </li>
            <li className="borderleft">
              <a href="/sobre">Sobre Nós</a>
            </li>
            <li className="borderleft">
              <a href="/servicos">Serviços</a>
            </li>
            <li className="borderleft">
              <a href="/contato">Contato</a>
            </li>
            <li className="borderleft">
              <div class="searchbar">
                <input
                  className="search-input"
                  type="text"
                  placeholder="Pesquisar..."
                />
                <a href="!#" className="search-icon">
                  <i class="fa fa-search"></i>
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="buttons">
          <button className="btn-select">Pt-br</button>
          <button className="btn-select">Ajuda?</button>
          <button className="btn-register">Registrar</button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
