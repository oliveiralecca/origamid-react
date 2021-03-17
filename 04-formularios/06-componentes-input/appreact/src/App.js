import React from 'react';
import Input from './Form/Input';

/*
  Podemos definir um componente para cada tipo de campo de formulário, assim, evitamos criar códigos repetidos.
*/

const App = () => {
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')

  return (
    <form>
      <Input id="nome" label="Nome" valor={nome} setValue={setNome} required/>
      {nome}
      <Input id="email" label="E-mail" valor={email} setValue={setEmail}/>
      {email}
      <button>Enviar</button>
    </form>
  )
}

export default App;
