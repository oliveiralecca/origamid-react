import React from 'react' 

export const ExContext = React.createContext() 

export const ExStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null)

  // Faz o fetch assim que o usário entrou no App, é um efeito
  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then(response => response.json())
      .then(json => setDados(json))
  }, [])

  function limparDados() {
    setDados(null)
  }

  // Provider expondo os valores do contexto para o restante da aplicação onde eu importá-los
  return (
    <ExContext.Provider value={{ dados, limparDados }}>
      {children}
    </ExContext.Provider>
  )
}
