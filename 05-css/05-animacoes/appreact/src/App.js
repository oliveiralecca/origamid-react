import React from 'react';
import './App.css';
import Produto from './Produto';

/*
  Animar a entrada de elementos na tela, utilizando a propriedade "animation".
*/

const App = () => {
  const [ativar, setAtivar] = React.useState(false)

  return (
    <div>
      <button onClick={() => setAtivar(!ativar)}>Ativar animação</button>
      {ativar && <Produto />}
    </div>
  )
}

export default App;
