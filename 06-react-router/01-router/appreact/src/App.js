import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Page404 from './Page404';
import Header from './Header';
import Home from './Home';
import Sobre from './Sobre';

/*
  Router = serve para gerenciar as rotas;
  Rotas = URL de onde a página está no momento (.../contato);

  BrowserRouter = deve ser o componente pai que envolve tudo que depender do react-router;
  Routes = define a área em que vamos colocar os nossos "Route" (tem componenetes que ficam fora, que independem de rotas, como o Header do site, ele é fixo para todas as páginas);
  Route = recebe um caminho em "path", se esse caminho for o mesmo do URL ele irá renderizar o component que estiver dentro de "element={}";

  path="*" = renderiza um elemento para uma rota não definida nos Routes
*/

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
