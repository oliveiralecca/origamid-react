import React from 'react';

const Caso = () => {
  function handleClick(event) {
    console.log(event.target)
  }

  return <button onClick={handleClick} onMouseMove={handleClick}>Clique aqui!</button>
}

const Caso1 = () => {
  return <button onClick={(event) => alert(event.target.innerText)}>Clique!</button>
} // é possível executar uma função anônima no evento

const App = () => {
  function handleScroll(event) {
    console.log(event)
  }
  window.addEventListener('scroll', handleScroll)

  return (
    <div style={{height: '200vh'}}>
      <button>Botão</button>
    </div>
  )
} // eventos no window/document e qualquer outro elemento fora do React, devem ser adicionados com .addEventListener()

export default App;
