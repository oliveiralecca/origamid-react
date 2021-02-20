import React from 'react';

const App = () => {
  return <a href="www.origamid.com" title="Isso é um site">Origamid</a>
}

const Caso1 = () => {
  return <div className="grid">Origamid</div> // em HTML => class = ""
}

const Caso2 = () => {
  return (
    <> {/* o mesmo que <React.Fragment> e substitui a <div>, deixando o código mais limpo */}
      <label htmlFor="nome">Nome</label> {/* em HTML => for = "" */}
      <input type="text" id="nome"/> 
    </>
  )
}

const Caso3 = () => {
  return <video autoPlay></video> // em HTML => autoplay (camelCase)
}

const Caso4 = () => {
  // expressões, funções, variáveis podem ser colocadas dentro do JSX utilizando {}
  const nome = 'Letícia'
  return <p>{nome}</p>
}

const Caso41 = () => {
  const desconto = 50
  const preco = 250
  return <p>{preco - desconto}</p>
}

const Caso42 = () => {
  const ativo = false
  return <p className={ativo ? 'ativo' : 'inativo'}>Olá</p>
}

const titulo = <h1>Esse é o título externo</h1> // atribuindo JSX direto a uma variável/constante
const Caso43 = () => {
  const titulo = <h1>Esse é o título do escopo local (prioridade)</h1>
  return <>{titulo}</>
}

const Caso5 = () => {
  return <p>{true}</p> // booleano, undefined e null não aparece nada na tela
}

const Caso51 = () => {
  return <p>Número, string e arrays (de num/str) aparecem na tela = {10}</p>
}

const Caso52 = () => {
  function meuNome(sobrenome) {
    return 'Letícia ' + sobrenome
  }

  return <p>{meuNome('Oliveira')}</p>
}

const Caso53 = () => {
  return <p>{new Date().getFullYear()}</p>
}

const Caso54 = () => {
  const carro = {
    marca: 'Ford',
    rodas: '4'
  }

  return (
    <>
      <p>Posso passar... {carro.marca}</p> 
      <p>atributos de um objeto: {carro.rodas}</p>
      {/* <p>{carro}</p> => mas passar um objeto inteiro direto, vai dar erro! */}
    </>
  )
}

const Caso55 = () => {
  const estiloH1 = {
    color: 'blue',
    fontSize: '2rem',
    fontFamily: 'Helvetica'
  }

  return (
    <div>
      <h1 style={estiloH1}>Empresa</h1>
      <p style={{color: 'green'}}>Sempre aberta</p>
    </div>
  )
} // para passar o style="" inline numa tag do JSX, usa-se um objeto com as propriedades CSS em camelCase

export default App;
