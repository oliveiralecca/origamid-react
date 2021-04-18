import React from 'react'
import { useLocation, useParams } from 'react-router'

/*
  useParams = o hook terá um objeto com todos os parâmetros da rota. É possível ter mais de um parâmetro;
  useLocation = retorna o objeto location, com diversas informações sobre a rota atual, como o caminho, parâmetros de busca e mais
*/

const Produto = () => {
  const params = useParams()
  const location = useLocation()
  console.log(location)
  const search = new URLSearchParams(location.search)
  console.log(search.get('memoria')) // busca em: ".../produto/notebook?memoria=16" e retorna "16"

  return (
    <div>
      <h1>Produto: {params.id}</h1>
    </div>
  )
}

export default Produto

