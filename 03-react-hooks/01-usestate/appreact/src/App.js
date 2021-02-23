import React from 'react';
import ButtonModal from './ButtonModal';

/*
  Estado: o estado de uma aplicação representa as características dela naquele momento exato. Ex: o botão está ativo ou inativo, os dados foram carregados, a página que o usuário está, etc... o React é uma tecnologia que facilita o gerenciamento do estado
*/

const Caso1 = () => {
  const ativo = false;

  return (
    <button disabled={!ativo}>
      {ativo ? 'Botão Ativo' : 'Botão Inativo'}
    </button>
  )
}

const Caso2 = () => {
  let ativo = true;

  function handleClick() {
    ativo = !ativo
    console.log(ativo)
  }

  return (
    <button onClick={handleClick}>
      {ativo ? 'Botão Ativo' : 'Botão Inativo'} {/* filho do componente */}
    </button>
  )
} // porém, dessa forma não altera o texto interno do botão, porque os filhos do componente não são renderizados novamente ao clicar e uma variável interna mudar de valor, apenas a função interna é executada a cada clique (o valor só muda no log)


/*
  Aí que entram os Hooks: são funções especiais do React que permitem controlarmos o estado e o ciclo de vida de componentes funcionais. Antes isso só era possível com classes.

  .useState(initial State) = pode ser string, number, boolean, arrays, null, undefined e objetos. => retorna um array com 2 valores: [esse valor inicial, função para atualizar esse valor]
*/

const Caso3 = () => {
  const [ativo, setAtivo] = React.useState(true);

  function handleClick() {
    setAtivo(!ativo)
  }

  return (
    <button onClick={handleClick}>
      {ativo ? 'Botão Ativo' : 'Botão Inativo'}
    </button>
  )
}


/* 
  Múltiplos estados: não existe limite para o uso do useState, podemos definir vários no mesmo componente
*/

const Caso4 = () => {
  const [ativo, setAtivo] = React.useState(true);
  const [dados,setDados] = React.useState({ nome: 'Letícia', idade: 27 })

  function handleClick() {
    setAtivo(!ativo)
    setDados({...dados, faculdade: 'Possui faculdade'})
  }

  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>
        {ativo ? 'Botão Ativo' : 'Botão Inativo'}
      </button>
    </div>
  )
}


/*
  Props: podemos passar o estado e a função de modificação como propriedades para outros elementos.
*/

const Caso5 = () => {
  const [modal, setModal] = React.useState(false)

  return (
    <div>
      <p>{modal ? 'Modal Aberto' : 'Modal Fechado'}</p>
      <ButtonModal setModal={setModal} modal={modal}/>
    </div>
  )
}


/*
  Não modificar o estado diretamente na variável do valor inicial. Utilizar SEMPRE a função de atualização do estado, pois ela garante da reatividade do componente (uma nova renderização dos elementos na tela, a cada mudança de estado)
*/

const Caso6 = () => {
  const [items, setItems] = React.useState(['Item 1', 'Item 2'])

  function handleClick() {
    // Errado. Não vai renderizar na tela. Modifique o estado apenas com a função de atualização (setItems) 
    items.push('Novo Item')
  }

  function handleClickReativo() {
    // Correto. Eu desestruturo a array atual, criando uma nova e adiciono um novo elemento
    setItems([...items, 'Novo Item'])
  }

  return (
    <>
      {items.map((item, i) => (<li key={i}>{item}</li>))}
      <button onClick={handleClick}>Adicionar Item</button>
      <button onClick={handleClickReativo}>Adicionar Reativo</button>
    </>
  )
}


/*
  Atualizar o estado passando uma função de CALLBACK na função de atualização do estado.
*/

const Caso7 = () => {
  const [ativo, setAtivo] = React.useState(true)

  function handleClick() {
    // usando um callback. "anterior" é a mesma coisa que o valor de "ativo" na const acima, só que não estou dependendo mais desse valor especificamente (o retorno dessa função de callback passa a ser o novo valor de setAtivo)
    setAtivo((anterior) => !anterior)
  }

  return (
    <button onClick={handleClick}>
      {ativo ? 'Está Ativo' : 'Está Inativo'}
    </button>
  )
}


/*
  Passando uma função de CALLBACK no valor inicial.
*/

const Caso8 = () => {
  // Callback no estado inicial (puxando dado externo para ser o valor inicial), só será executado na criação do componente
  const [ativo, setAtivo] = React.useState(() => {
    const ativoLocal = window.localStorage.getItem('ativo')
    return ativoLocal
  })

  function handleClick() {
    setAtivo((anterior) => !anterior)
  }

  return (
    <button onClick={handleClick}>
      {ativo ? 'Está Ativo' : 'Está Inativo'}
    </button>
  )
}


/*
  <React.StrictMode> (em index.js): invoca duas vezes a renderização do componente (só no modo development, na build final não) quando o estado é atualizado, a fim de evitar funções com efeitos colaterais (side effects) - aquelas que modificam estados fora delas, e não deveriam fazer isso (bug)
*/

const App = () => {
  const [contar, setContar] = React.useState(1)
  const [items, setItems] = React.useState(['Item 1'])

  function handleClick() {
    setContar((contar) => {
      return contar + 1
    })
    setItems([...items, 'Item ' + (contar + 1)]) // essa função dentro de setContar faz com que setContar tenha efeito colateral, alterando o que não devia, o que não é atribuição sua (atualizar os itens na tela)
  }

  return (
    <div>
      {items.map(item => <li key={item}>{item}</li>)}
      <button onClick={handleClick}>{contar}</button>
    </div>
  )
}

export default App;
