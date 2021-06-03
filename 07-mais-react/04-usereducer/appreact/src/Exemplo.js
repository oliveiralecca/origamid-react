import React from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'remover':
      return state.filter(item => item !== action.content)
    case 'adicionar':
      // return state + action.content
      return [...state, action.content]
    default:
      throw new Error()
  }
}

const Exemplo = () => {
  const [state, dispatch] = React.useReducer(reducer, ['Banana', 'Uva'])

  return (
    <div>
      <button onClick={() => dispatch({ type: 'remover', content: 'Banana' })}>Remover Banana</button>
      <button onClick={() => dispatch({ type: 'adicionar', content: 'Laranja' })}>Adicionar Laranja</button>
      <p>{state}</p>
    </div>
  )
}

export default Exemplo
