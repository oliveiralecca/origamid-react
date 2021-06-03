import React from 'react';
import Exemplo from './Exemplo';

/*
  useReducer: serve para lidar com estados que possuam funções fixas responsáveis por modificá-lo. 

  - passamos uma função no useReducer, e ela será responsável por todas as ações sobre esse estado (no exemplo abaixo, uma única função será responsável pelas ações de aumentar e diminuir o estado de contar);

  - const [estado, função que manda as ações pra função externa] = React.useReducer(função externa, estado inicial)
*/

function redutora(state, action) {
  switch (action) {
    case 'aumentar':
      return state + 1
    case 'diminuir':
      return state - 1
    default:
      throw new Error()
  }

  // if(action === 'aumentar') {
  //   return state + 1
  // } else if(action === 'diminuir') {
  //   return state - 1
  // }
  // return new Error('Error: action não existe!')
}

const App = () => {
  const [state, dispatch] = React.useReducer(redutora, 0)

  // function aumentar() {
  //   setContar(contar + 1)
  // }
  // function diminuir() {
  //   setContar(contar - 1)
  // }

  return (
    <div>
      {/* o que está dentro do "dispatch" é uma action lá da função externa */}
      <button onClick={() => dispatch('aumentar')} style={{margin: '8px'}}>+</button>
      <button onClick={() => dispatch('diminuir')}>-</button>
      <p>{state}</p>
      <Exemplo /> 
    </div>
  );
}

export default App;
