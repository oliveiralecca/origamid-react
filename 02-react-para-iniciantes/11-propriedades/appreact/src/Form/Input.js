import React from 'react'

/* 
  Rest e Spread: usamos quando não sabemos todas as propriedades que um componente pode receber
*/

const Input = ({label, id, ...props}) => {
  return (
    <div style={{margin: '1rem 0'}}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props}/>
    </div>
  )
}

export default Input;
