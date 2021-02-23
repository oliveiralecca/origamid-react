import React from 'react';
import Produto from './Produto';

/*
  Todo componente possui um ciclo de vida: renderizado (aparece na tela), atualizado ou destruído (some da tela). Com o useEffect() podemos definir um CALLBACK que irá ser executado de acordo com o ciclo de vida do componente (ex: definir um efeito que só vai ocorrer quando o elemento é renderizado inicialmente, ou só quando ele sumir da tela...)

  .useEffect(x, y) => x: primeiro argumento é a função de callback que será executada; y: array com lista de DEPENDÊNCIAS (informa quando o efeito deve ocorrer)

  É especialmente utilizado quando precisamos definir um efeito que deve ocorrer apenas uma vez (quando o componente é montado), como o fetch de dados no servidor por exemplo.
*/

const Caso1 = () => {
  const [contar, setContar] = React.useState(0)

  // Array vazio indica que o efeito não possui nenhuma dependência, assim, só irá ocorrer quando o componente é renderizado inicialmente (montado)
  React.useEffect(() => {
    console.log('Apenas quando renderiza')
  }, [])

  // Antes de renderizar e toda vez que atualizar o componente
  console.log('Sempre ocorre, mas antes do useEffect');

  // Agora a dependência tá no estado "contar", assim, sempre que "contar" for atualizado esse efeito será ativado
  React.useEffect(() => {
    console.log('Toda vez que atualiza o contar')
  }, [contar])

  return (
    <button onClick={() => setContar(contar + 1)}>
      {contar}
    </button>
  )
}


/*
  Dependências obrigatórias => se o valor de um estado ou uma propriedade forem utilizados dentro de um efeito, eles são dependências obrigatórias no .useEffect
*/

const Caso2 = () => {
  const [contar, setContar] = React.useState(0)

  const titulo = 'Clicou '

  React.useEffect(() => {
    document.title = titulo + contar;
    // Dependência não declarada [contar] = não funciona! E não depende do "titulo" pq ele é um valor estático
  }, [])

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>
}


/*
  Efeito que ocorre apenas quando o componente é montado => []
*/

const Caso3 = () => {
  const [contar, setContar] = React.useState(0)
  const [dados, setDados] = React.useState(null)

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
    .then(response => response.json())
    .then(json => setDados(json))
  }, [])

  return (
    <div>
      {/* primeiro verifica se existe dados, ou ele vai tentar buscar a propriedade "nome" de null */}
      {dados && <div>
        <h1>{dados.nome}</h1>
        <p>R$ {dados.preco * contar}</p>
      </div>}
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  )
}


/*
  Múltiplos Efeitos => podemos ter vários no nosso código, e o ideal é separar efeitos diferentes em useEffect diferentes
*/

const Caso4 = () => {
  const [contar, setContar] = React.useState(0)
  const [modal, setModal] = React.useState(false)

  React.useEffect(() => {
    document.title = 'Total ' + contar
  }, [contar])

  React.useEffect(() => {
    setContar(0)
  }, [modal])

  return (
    <div>
      {modal && <p>Modal Aberto</p>}
      <button onClick={() => setModal(!modal)}>{modal ? 'Fechar' : 'Abrir e Zerar'}</button>
      <hr />
      <button onClick={() => setContar(contar + 1)}>Contando: {contar}</button>
    </div>
  )
}


/*
  Às vezes precisamos executar um efeito sempre que um componente for desmontado. Para isso utilizamos um callback no retorno do callback do efeito (callback dentro de callback) - em Produto.js
*/

const App = () => {
  const [ativo, setAtivo] = React.useState(false)

  return (
    <div>
      {ativo && <Produto/>}
      <button onClick={() => setAtivo(!ativo)}>{ativo ? 'Desativar' : 'Ativar'}</button>
    </div>
  )
}

export default App
