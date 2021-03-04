import React from 'react' 
import { ExContext } from './ExContext'

const ExProduto = () => {
  const global = React.useContext(ExContext)

  if(global.dados === null) return null
  return (
    <div>
      Produto: {global.dados.map(produto => <li key={produto.id}>{produto.nome}</li>)}
    </div>
  )
}

export default ExProduto
