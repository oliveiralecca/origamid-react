import React from 'react';
import Checkbox from './Form/Checkbox';
import Input from './Form/Input';
import Radio from './Form/Radio';
import Select from './Form/Select';

/*
  Podemos definir um componente para cada tipo de campo de formulário, assim, evitamos criar códigos repetidos.
*/

const App = () => {
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')

  const [produto,setProduto] = React.useState('')

  const [cor,setCor] = React.useState('Vermelho')
  const [frutas,setFrutas] = React.useState('Laranja')

  const [sapato, setSapato] = React.useState([])
  const [termos, setTermos] = React.useState([])

  return (
    <form>
      <h2>Termos</h2>
      <Checkbox options={['Li e aceito os termos.']} valor={termos} setValue={setTermos}/>

      <h2>Checkbox</h2>
      <Checkbox options={['Tênis', 'Chinelo', 'Salto']} valor={sapato} setValue={setSapato}/>

      <h2>Cores</h2>
      <Radio options={['Azul', 'Vermelho']} valor={cor} setValue={setCor} />
      <h2>Frutas</h2>
      <Radio options={['Limão', 'Laranja', 'Uva']} valor={frutas} setValue={setFrutas} />

      <Select options={['Smartphone', 'Notebook', 'Tablet']} value={produto} setValue={setProduto} />

      <Input id="nome" label="Nome" valor={nome} setValue={setNome} required />
      <Input id="email" label="E-mail" valor={email} setValue={setEmail} />

      <button>Enviar</button>     
    </form>
  )
}

export default App;
