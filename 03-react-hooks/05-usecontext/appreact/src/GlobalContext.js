import React from 'react'

export const GlobalContext = React.createContext()

// criando o Provider do contexto e passando os valores aqui mesmo, evita passar direto no App2
export const GlobalStorage = ({ children }) => {
  const [contar, setContar] = React.useState(0)

  function adicionarUm() {
    setContar((contar) => contar + 1)
  }

  function adicionarDois() {
    setContar((contar) => contar + 2)
  }

  return (
    <GlobalContext.Provider value={{ nome: 'Murilo', idade: 2, contar, adicionarUm, adicionarDois }}>
      {children}
    </GlobalContext.Provider>
  )
}
