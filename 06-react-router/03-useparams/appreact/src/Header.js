import React from 'react';
import './Header.css';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation() // uso do location em elemento global, que é o Header

  React.useEffect(() => {
    console.log('Mudou a rota')
  }, [location])

  return (
    <nav>
      Link: <Link to="/">Home</Link> | <Link to="sobre">Sobre</Link>
      <br/>
      NavLink: <NavLink to="/" end>Home</NavLink> | <NavLink to="sobre">Sobre</NavLink> | <NavLink to="login">Login</NavLink>
    </nav>
  )
}

export default Header
