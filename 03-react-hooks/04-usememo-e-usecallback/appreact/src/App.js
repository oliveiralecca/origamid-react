import React from 'react'

/* HOOKS PARA PERFORMANCE */

/*
  useMemo: só executa na criação do componente, memorizando um valor, e evitando a recriação desse valor todas as vezes que um componente for atualizado. Recebe um callback e um array de dependências. Serve principalmente quando se tem uma operação lenta de JS (por ex: uma soma com um array de zilhões de itens)
*/

const Caso1 = () => {
  const [contar, setContar] = React.useState(0)
  // Operação que retorna um valor, e só é executada na primeira renderização, quando o componente é montado (dependência vazia)
  const valor = React.useMemo(() => {
    const localItem = window.localStorage.getItem('produto')
    console.log('Aconteceu o memo')
    return localItem
  }, [])

  console.log(valor)

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>
}


/*
  Criando uma operação matemática lenta para o uso do .useMemo()
*/

function operacaoLenta() {
  let c
  for(let i = 0; i < 100000000; i++) {
    c = i + i / 10
  }
  return c
}

const Caso2 = () => {
  const [contar, setContar] = React.useState(0)

  /*
    const t1 = performance.now() // retorna o time onde o app se encontra (em milisegundos: operação em JS que ocorre em 100 ms é HIPERLENTA)
    const valor = operacaoLenta()
    console.log(performance.now() - t1) // compara o time que estava em t1 com o time dessa linha aqui, ou seja, o tempo de execução da função acima
  */

  const t1 = performance.now()
  // com .useMemo() o tempo da primeira renderização é alto e nas seguintes reduz a quase 0
  // o valor é salvo na memória e ele não executa novamente essa operação
  const valor = React.useMemo(() => operacaoLenta(), []) 
  console.log(performance.now() - t1)

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>
}


/*
  useCallback: permite definirmos um callback e uma lista de dependências dele. Esse callback só será recriado se essa lista de dependências for modificada, caso contrário ele não irá recriar o callback. É ainda mais difícil de achar um momento para utilizar essa função.
*/

const App = () => {
  const [contar, setContar] = React.useState(0)

  const handleClick = React.useCallback (() => {
    setContar((contar) => contar + 1) // acessando o valor anterior, assim ele não será recriado toda vez que eu clicar no botão. se não acessar o valor anterior, ele depende do valor de contar que está fora dessa função [contar], ou seja, será recriado sempre que "contar" mudar
  }, [])

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>
}

export default App
