import React from 'react';
import './App.css';
import Title from './Title';

/*
  CSS import: é a forma mais simples de usar o CSS no React, importando direto no JS. Essa importação é feita pelo Webpack e não pelo próprio React. Tem que especificar a extensão (.css)

  Componentes: ao importar um componente, se nele estiver sendo importado algum CSS, esse CSS é adicionado ao meu programa final (npm run build). Independente de utilizarmos esse componente ou não.

  PROBLEMA ao utilizar o CSS dessa forma: pode haver conflito, definir uma classe duas vezes com estilos diferentes.
*/

const App = () => {
  return (
    <div className="container">
      <Title /> {/* nesse caso o título fica azul, definido em Title.css, porque o componente Title foi importado depois do App.css (o que é definidio por último, é o que vale no CSS) */}
    </div>
  )
}

export default App;
