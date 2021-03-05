import React from 'react' 

/*
  Criar um Hook para o fetch, pq o fetch é algo que a gente sempre utiliza mais ou menos da mesma forma
*/
const useFetch = () => {
  // Estado para segurar os dados 
  const [data, setData] = React.useState(null)
  // Estado para o erro
  const [error, setError] = React.useState(null)
  // Estado para o loading
  const [loading, setLoading] = React.useState(null)

  // .useCallback() pois eu quero que essa função seja única, que não seja recriada a cada renderização do APP
  const request = React.useCallback(async (url, options) => {
    let response
    let json

    try {
      setError(null)
      setLoading(true)
      response = await fetch(url, options)
      json = await response.json()      
    } catch(errinho) {
      json = null
      setError('Erro!')
    } finally {
      setData(json) 
      setLoading(false)
      return {response, json}
    }
  }, [])
  
  return { data, error, loading, request }
}

export default useFetch
