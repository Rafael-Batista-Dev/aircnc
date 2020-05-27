import React, { Component } from "react";
import logo from "../../../assets/img/logo.svg";
import { Link } from "react-router-dom";

import { LangToggle, LangToggleUl } from "./style";

import { Icon } from "react-icons-kit";
import { iosWorld } from "react-icons-kit/ionicons/iosWorld";
import { person } from "react-icons-kit/ionicons/person";
import { arrowSortedDown } from "react-icons-kit/typicons/arrowSortedDown";

class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  state = {
    langContent: false,
  };

  handleToggle = (e) => {
    e.preventDefault();
    this.setState({
      langContent: !this.state.langContent,
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
              <Link to="/">Home</Link>
            </li>
            <li className="borderleft">
              <Link to="/sobre">Sobre Nós</Link>
            </li>
            <li className="borderleft">
              <Link to="/servicos">Serviços</Link>
            </li>
            <li className="borderleft">
              <Link to="/contato">Contato</Link>
            </li>
            <li className="borderleft">
              <div class="searchbar">
                <input
                  className="search-input"
                  type="text"
                  placeholder="Pesquisar..."
                />
                <Link to="!#" className="search-icon">
                  <i class="fa fa-search"></i>
                </Link>
              </div>
            </li>
          </ul>
        </div>

        <div className="buttons">
          <button className="btn-select" onClick={this.handleToggle}>
            <Icon icon={iosWorld} size={25} />
            &nbsp;&nbsp;Pt-br
            <Icon icon={arrowSortedDown} size={20} />
          </button>
          {/* Toggle Language */}
          {this.state.langContent && (
            <LangToggle>
              <LangToggleUl>
                <li style={{ padding: "11px" }}>Português</li>
              </LangToggleUl>
              <LangToggleUl>
                <li style={{ padding: "11px" }}>English</li>
              </LangToggleUl>
            </LangToggle>
          )}
          <button className="btn-select">Ajuda?</button>
          <Link to="/login" className="btn-register">
            <Icon icon={person} size={30} />
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
