import React from 'react'
import ExProduto from './ExProduto'
import { ExStorage } from './ExContext'
import ExLimpar from './ExLimpar'

// no APP principal, só os dados/valores do contexto são importados (Storage). O contexto por completo é importado nos demais componentes que compõem o APP

/*
  Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
  https://ranekapi.origamid.dev/json/api/produto/
  assim que o usuário acessar o app
  coloque os dados da API no contexto global, dando acesso aos dados da mesma
  defina uma função chamada limparDados que é responsável por zerar os dados de produto
  e exponha essa função no contexto global
*/

const Ex005 = () => {
  return (
    <ExStorage>
      <ExProduto/>
      <ExLimpar/>
    </ExStorage>
  )
}

export default Ex005

