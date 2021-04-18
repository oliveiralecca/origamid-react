import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page404 from './Page404';
import Header from './Header';
import Home from './Home';
import Sobre from './Sobre';
import Login from './Login';

/*
  (EM HEADER.JS)
  Link = irá modificar a rota e renderizar o novo componente sem recarregar a página;
  NavLink = adiciona a class="active" ao link que está ativo no momento

  (EM LOGIN.JS)
  useNavigate = hook que permite navegarmos programaticamente entre as rotas. Por exemplo, pode ser utilizado quando o usuário faz um login bem sucedido e enviamos o mesmo à página da sua conta
*/

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
