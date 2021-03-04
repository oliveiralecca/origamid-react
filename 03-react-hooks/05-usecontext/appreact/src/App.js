import React from 'react';
import Produto from './Produto';
import UserContext from './UserContext'

/*
  Antes de mais nada... 
    - createContext: o contexto permite passarmos dados/estado a todos os componentes, sem a necessidade de utilizar propriedades, e esse dado pode ser acessado em qualquer componente que quiser, na hora que quiser. Serve principalmente para dados/estados GLOBAIS, como por exemplo dados do usuário logado (nome, id, etc).

    - .useContext(): hook que acessa os valores do contexto

    - Provider: o método Provider deve ser utilizado para envolver todos os elementos que terão acesso aos dados do Context. Provider recebe uma propriedade chamada "value", dentro dela que devemos informar os dados do contexto.
*/

const App = () => {
  return (
    <UserContext.Provider value={{nome: 'Letícia'}}>
      <div>
        <Produto/> {/* tudo que tiver dentro de produto vai ter acesso ao nome, pode ter um bilhão de componentes, todos terão acesso ao nome */}
      </div>
    </UserContext.Provider>
  )
}

export default App
