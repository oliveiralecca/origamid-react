import React from 'react';

const App = () => {
const produtos = ['Notebook, ', 'Tablet, ', 'Smartphone'] // um jeito não muito utilizado para formatar

  return (
    <div>
      {produtos} {/* simplesmente coloca um item ao lado do outro sem formatação */}
    </div>
  );
}

const Caso1 = () => {
  const produtos = [<li key="e1">Notebook</li>, <li key="e2">Smartphone</li>] 
  // com a key, ao adicionar um novo elemento ao array, o React vai comparar os elementos pela key, e só adicionar o novo (que tem a key diferente dos demais). caso essa key não seja passada ou não seja diferente, ele vai adicionar todos os elementos novamente no array

  return <div>{produtos}</div>
}

const Caso2 = () => {
  const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight']

  return (
    <ul>
      {filmes.map(filme => (<li key={filme}>{filme}</li>))}
    </ul>
  )
}

const Caso3 = () => {
  const livros = [
    {nome: 'Game of Thrones', ano: 1996},
    {nome: 'A Clash of Kings', ano: 1998},
    {nome: 'A Storm of Swords', ano: 2000}
  ]

  return (
    <ul>
      {livros
        .filter((livro) => livro.ano >= 1998)
        .map(({ nome, ano }) => (
          <li key={nome}>
            {nome}, {ano}
          </li>
        ))}
    </ul> 
    // map(({ nome, ano }) => ...) = destructuring, no filter está sem desestruturar
  )
} // caso mais comum: trabalhar com array[] de objetos{}

export default App;
