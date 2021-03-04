import React from 'react' 
import { ExContext } from './ExContext'

const ExLimpar = () => {
  const { limparDados } = React.useContext(ExContext)

  return (
    <button onClick={limparDados}>
      Limpar
    </button>
  )
}

export default ExLimpar

