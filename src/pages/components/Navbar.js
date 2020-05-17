import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <Link to="/">Home</Link>
      <Link to="/missao">Missão</Link>
      <Link to="/servicos">Serviços</Link>
    </ul>
  );
};

export default Navbar;
