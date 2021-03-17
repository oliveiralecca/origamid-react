import React from 'react';

/*
  No input do tipo radio, comparamos o valor selecionado com o valor do input, dentro do atributo "checked". O que retornar true irá marcar o botão (definindo um "name" igual para cada grupo, não precisa disso).

  - Passando o "name" igual para todos os inputs criados, significa que são do mesmo grupo, portanto só um pode ser selecionado por vez.

  - O "value" é estático.
*/

const App = () => {
  const [produto, setProduto] = React.useState('')
  const [cor, setCor] = React.useState('')

  function handleChange({ target }) {
    setProduto(target.value)
  }

  return (
    <form>    
      <h2>PRODUTO - com name=""</h2>
      {produto}
      <label>
        <input type="radio" name="produto" value="smartphone" onChange={handleChange}/>
        Smartphone
      </label>
      <label>
        <input type="radio" name="produto" value="notebook" onChange={handleChange}/>
        Notebook
      </label>

      <h2>COR - com checked={}</h2>
      {cor}
      <label>
        <input type="radio" value="azul" onChange={({ target }) => setCor(target.value)} checked={cor == 'azul'}/>
        Azul
      </label>
      <label>
        <input type="radio" value="vermelho" onChange={({ target }) => setCor(target.value)} checked={cor == 'vermelho'}/>
        Vermelho
      </label>
    </form>
  );
}

export default App;
