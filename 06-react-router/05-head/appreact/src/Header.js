import React from 'react';
import './Header.css';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation() // uso do location em elemento global, que é o Header

  React.useEffect(() => {
    console.log('Mudou a rota')
  }, [location])

  return (
    <nav>
      <NavLink to="/" end>Home</NavLink> | <NavLink to="sobre">Sobre</NavLink>
    </nav>
  )
}

export default Header
