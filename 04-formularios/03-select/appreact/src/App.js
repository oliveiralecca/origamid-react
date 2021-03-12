import React from 'react';

/*
  O "value" e "onChange" são definidos no select mesmo, e não nas option. Para definir um valor inicial já selecionado, colocar no hook useState.
*/

const App = () => {
  const [opcao, setOpcao] = React.useState('')

  return (
    <form>
      <select id="produtos" value={opcao} onChange={({ target }) => setOpcao(target.value)}>
        <option disabled value="">Selecione</option> {/* Esse será o valor (vazio) inicial que aparecerá na caixa */}
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      {opcao}
    </form>
  )
}

export default App;
