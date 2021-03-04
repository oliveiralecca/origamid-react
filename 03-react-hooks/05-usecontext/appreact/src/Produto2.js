import React from 'react'
import { GlobalContext } from './GlobalContext'

const Produto2 = () => {
  const global = React.useContext(GlobalContext)

  return (
    <div>
      <p>Nome: {global.nome}</p>
      <p>Idade: {global.idade}</p>
      <p>Estado Contar: {global.contar}</p> {/* esse valor é global, tenho acesso a ele onde eu quiser */}
      <button onClick={() => global.adicionarUm()}>OK</button>
    </div>
  )
}

export default Produto2
