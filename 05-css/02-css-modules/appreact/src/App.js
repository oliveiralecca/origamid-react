import React from 'react';
import Produto from './Components/Produto';

/*
  Assim como o CSS Import, esse é mais um modo do Webpack (create-react-app) lidando com o CSS, e não o próprio React.

  Os modules garantem que as classes utilizadas sejam sempre únicas, evitando o conflito. O modo já vem configurado com o create-react-app, basta definirmos o nome do arquivo CSS com a palavra .module (Produto.module.css). Devemos definir um nome qualquer para a importação, e a mesma será transformada em um objeto que possui nomes únicos para as classes.
*/

const App = () => {
  return (
    <div>
      <Produto />
    </div>
  )
}

export default App;
