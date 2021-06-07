import React from 'react';
import Produtos from './Produtos';

/*
  classes = antes dos hooks, era a única forma de criar componentes com estados reativos (através da extensão da classe React.Component)
*/

const App = () => {
  return (
    <div>
      <Produtos titulo="Esse é o título feito com props" />
    </div>
  );
}

export default App;
