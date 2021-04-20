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
  Nested Routes = rotas aninhadas, ou seja, uma rota dentro da outra. Por exemplo: "perfil/editar", "perfil/certificados";

  OBS.: As rotas aninhadas também podem ser definidas direto aqui no App.js, importando cada um desses componentes aqui, definindo <Outlet /> no componente de Produto.js, e não se faz necessário o "/*" no path "produto/:id"

  <Route path="produto/:id" element={<Produto />}>
    <Route path="" element={<ProdutoDescricao/>} />
    <Route path="avaliacao" element={<ProdutoAvaliacao/>} />
    <Route path="customizado" element={<ProdutoCustomizado/>} />
  </Route>

  <Route path="produto/:id/*" element={<Produto />} />
  /* = indica que tem outras rotas dentro, exemplo: "/produto/(id)notebook/avaliacao"
*/

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id/*" element={<Produto />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
