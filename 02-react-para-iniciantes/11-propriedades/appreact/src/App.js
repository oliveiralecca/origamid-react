import React from 'react';
import Form from './Form/Form';

/*
  Assim como ocorre nas funções, os componentes React também podem receber argumentos. Eles são conhecidos como "propriedades" ou "props". Podem ser passadas strings, arrays, outros componentes, etc... e quantas propriedades quisermos.
*/

const Titulo = (props) => {
  return <h1 style={{color: props.cor}}>{props.texto}</h1>
} // por padrão usamos "props", mas pode ter qualquer nome

const Caso1 = () => {
  return (
    <section>
      {/* o nome da props deve ser exatamente igual {props.TEXTO}, {props.COR} */}
      <Titulo texto="Meu Primeiro Título" cor="blue"/> 
      <Titulo texto="Meu Segundo Título" cor="red"/>
    </section>
  );
} // as props são passadas direto na tag de chamada do componente, como se fossem atributos de HTML


/* 
  Props com desestruturação 
*/

const Paragrafo = ({cor, texto}) => {
  return <p style={{color: cor}}>{texto}</p>
}

const Caso2 = () => {
  return (
    <section>
      <Paragrafo texto="Parágrafo 1..." cor="orange"/>
      <Paragrafo texto="Parágrafo 2..." cor="green"/>
    </section>
  )
}


/* 
  Children: se usarmos o componente no App com uma tag de abertura e uma de fechamento, o conteúdo interno desse componente (string, array, outros elementos JSX, etc) será acessado através da props .children
*/

const Subtitulo = ({cor, children}) => {
  return <h2 style={{color: cor}}>{children}</h2>
}

const Caso3 = () => {
  return (
    <section>
      <Subtitulo cor='red'>Isso é o children</Subtitulo>
      <Subtitulo>
        <p>Subtítulo 2</p>
        <p>Subtítulo 3</p>
      </Subtitulo>
    </section>
  )
} 


/*
  Props com Rest e Spread
*/

const Caso4 = () => {
  return (
    <div>
      <Form/>
    </div>
  )
}


/*
  Podem ser passados diferentes tipos de dados e até outros componentes nas propriedades.
*/

const Header = ({ logado, nome }) => {
  if (logado) {
    return <header>Bem vindo, {nome}</header>
  } else {
    return <header>Header</header>
  }
}

const App = () => {
  const logado = true
  const nome = 'Letícia'

  return (
    <section>
      <Header logado={logado} nome={nome} />
    </section>
  )
}

export default App
