import React from 'react'

const Produto = ({nome, propriedades}) => {
  return (
    <div style={{border: '1px solid', margin: '10px 0', padding: '10px'}}>
      <p>{nome}</p>
      <ul>
        {propriedades.map(propriedade => <li>{propriedade}</li>)}
      </ul>
    </div>
  )
}

export default Produto
