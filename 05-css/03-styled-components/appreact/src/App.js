import React from 'react';
import styled from 'styled-components';

/*
  Permite escrevermos o CSS diretamente no JavaScript. Ao invés de classes, criamos componentes com um estilo único.

  - O styled é um objeto com diferentes métodos que representam as tags HTML, seguidos de string literal ``
*/

const ProdutosContainer = styled.div`
  display: flex;
`

const Produto = styled.div`
  flex: 1;
`

const Titulo = styled.h1`
  font-size: 2rem;
  color: tomato;
`

const Paragrafo = styled.p`
  font-size: 1.5rem;
  color: green;
`

/*
  Props: Podemos passar propriedades como em um component de React, inclusive desesruturado - ${({ cor }) => cor}
*/

const Preco = styled.p`
  //background: ${(props) => props.cor};
  background: hsl(${Math.random() * 360}, 100%, 50%); // usando JS direto para gerar cores aleatórias
  color: white;
`

/*
  Estado: Podemos passar o estado como uma propriedade e modificarmos certos estilos com base nesse estado.
*/

const Comprar = styled.button`
  background: ${({ativo}) => ativo ? '#000' : '#fff'};
  font-size: 1rem;
  border: 2px solid grey;
  border-radius: 5px;
  padding: .5rem;
  color: ${({ativo}) => ativo ? '#fff' : '#000'};
  cursor: pointer;

  // Pseudo elementos: Podemos definir o estado de :hover ou criar elementos com o ::after ou ::before utilizando o "&" na frente do elemento.

  &:hover {
    background: tomato;
  }
`

const App = () => {
  const [ativo, setAtivo] = React.useState(false)

  function handleClick() {
    setAtivo(!ativo)
  }

  return (
    <div>
      <Comprar ativo={ativo} onClick={handleClick}>Compre aqui</Comprar>
      <ProdutosContainer>
        <Produto>
          <Titulo>Notebook</Titulo>
          <Paragrafo>Meu primeiro parágrafo com styled-components.</Paragrafo>
          <Preco cor="#84e">R$ 5000</Preco>
        </Produto>

        <Produto>
          <Titulo>Smartphone</Titulo>
          <Paragrafo>Meu primeiro parágrafo com styled-components.</Paragrafo>
          <Preco cor="#53d956">R$ 3000</Preco>
        </Produto>
      </ProdutosContainer>
    </div>
  )
}

export default App;
