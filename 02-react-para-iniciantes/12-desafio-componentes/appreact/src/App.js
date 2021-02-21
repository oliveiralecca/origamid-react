import React from 'react';
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';

/*
  Replique a interface como a apresentada na aula
  Utilize a array abaixo (Produtos.js) para mostrar os produtos
  Quebre em componentes o que precisar ser reutilizado
  Dica: const { pathname } = window.location; (puxa o caminho do URL)
*/

const App = () => {
  const {pathname} = window.location // o mesmo que => const url = window.location.pathname

  let Pagina;
  if(pathname === '/produtos') {
    Pagina = Produtos
  } else {
    Pagina = Home
  }

  return (
    <section>
      <Header/>
      <Pagina/>
    </section>
  )
}


export default App;
