import React from 'react';
import useFetch from './useFetch';
import useLocalStorage from './useLocalStorage'

/*
  Custom Hooks: criação dos próprios hooks. Todos eles devem começar com "use" (useNomeDoHook), e deles podemos retornar um valor único, array ou objeto.
*/

const App = () => {
  // useLocalStorage(argumentos = key, inicial)
  const [produto, setProduto] = useLocalStorage('produto', '')
  const {request, data, loading, error} = useFetch()

  // Fazer o request assim que o componente montar
  React.useEffect(() => {
    async function fetchData() {
      const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto/')
    }
    fetchData()    
  }, [request])

  function handleClick({ target }) {
    setProduto(target.innerText)
  }

  if(error) return <p>{error}</p>
  if(loading) return <p>Loading...</p>
  if(data) // ou: {data && data.map()...}
    return (
      <div>
        <p>Produto preferido: {produto}</p>
        <button onClick={handleClick}>notebook</button>
        <p></p>
        <button onClick={handleClick}>smartphone</button>

        {data.map(produto => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </div>
    )
  else return null
}

export default App;
