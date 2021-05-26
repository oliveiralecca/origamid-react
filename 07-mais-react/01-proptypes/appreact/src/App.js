import React from 'react';
import Button from './Button';

/*
  PropTypes = retorna um erro caso a propriedade passada num componente seja de um tipo de dado diferente do especificado. Também é possível especificar se uma propriedade é obrigatória ou não. Proptypes vem instalado com o "create-react-app".
*/

const App = () => {
  return (
    <div>
      <Button width={300}>Clique aqui!</Button>
    </div>
  );
}

export default App;
