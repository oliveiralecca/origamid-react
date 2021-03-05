import React from 'react';

/*
  Regras de uso dos Hooks
*/

/* Top Level = sempre tem que estar no primeiro nível do meu componente. Não utilizar os hooks dentro de funções, loops ou condicionais (dá erro). */

const App = () => {
  // Correto
  React.useEffect(() => {
    document.title = 'Titulo novo'
  }, [])

  let condicao = true
  if(condicao) {
    // Errado
    React.useEffect(() => {
      document.title = 'Titulo novo'
    }, [])
  }

  function mudarTitulo() {
    // Errado
    React.useEffect(() => {
      document.title = 'Titulo novo'
    }, [])
  }

  for(let i = 0; i < 10; i++) {
    // Errado
    React.useEffect(() => {
      document.title = 'Titulo novo'
    }, [])
  }

  return (
    <div>
      Meu app
    </div>
  )
}


/* Componentes e Custom Hooks = utilizar hooks apenas em componentes e em custom hooks */

// Errado, mas pode se transformar em um custom hook se começar com useNumeroAleatorio
function numeroAleatorio() {
  const numero = Math.random()
  React.useEffect(() => {
    document.title = numero
  }, [])
  return numero
}

const App = () => {
  return <div></div>
}

export default App;
