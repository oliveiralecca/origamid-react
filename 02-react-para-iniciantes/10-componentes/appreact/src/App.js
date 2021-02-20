import React from 'react';
import Header from './Header'
import Footer from './Footer';
import Form from './Form/Form';

/*
  É ideal dividir o aplicativo em pequenos componentes (em arquivos separados) para facilitar a manutenção do mesmo e a organização.
*/

const Teste1 = () => {
  return null
} // todo componente deve sempre retornar algo, sem retorno dá erro. e esse retorno pode ser: string, array, um elemento JSX, null e etc (exceto um objeto - erro!) 

const Teste2 = () => {
  return 'teste'
}

const Teste3 = () => {
  return <p>Teste</p>
}

const Teste = () => {
  const active = false

  if(active) {
    return <p>Teste Ativo</p>
  } else {
    return null
  }
}

const App = () => {
  return (
    <div>
      <Teste/>
      <Header/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default App;
