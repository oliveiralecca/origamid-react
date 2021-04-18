import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

/*
  OBS.: como link da Home é somente "/" e a barra está presente em todos os outros links, o NavLink não consegue diferenciar qual página está ativa, se fazendo necessário o uso do "end" no <Link /> da Home.
*/

const Header = () => {
  return (
    <nav>
      Link: <Link to="/">Home</Link> | <Link to="sobre">Sobre</Link>
      <br/>
      NavLink: <NavLink to="/" end>Home</NavLink> | <NavLink to="sobre">Sobre</NavLink> | <NavLink to="login">Login</NavLink>
    </nav>
  )
}

export default Header
