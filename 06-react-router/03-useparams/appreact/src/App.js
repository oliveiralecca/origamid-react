import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page404 from './Page404';
import Header from './Header';
import Home from './Home';
import Sobre from './Sobre';
import Login from './Login';
import Produto from './Produto';

/*
  (EM PRODUTO.JS)
  Rota Dinâmica = o uso de ":nome" irá definir uma rota dinâmica, onde "nome" poderá ser utilizado como uma variável dentro do componente. Serve para buscarmos rotas dinâmicas como produto/notebook ou produto/smartphone ou produto/tablet, etc 
*/

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id" element={<Produto />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
