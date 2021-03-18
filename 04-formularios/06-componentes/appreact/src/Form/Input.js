import React from 'react'

/*
  OBS.: se eu crio o estado (... = React.useState) aqui dentro, não terei acesso a ele fora do componente Input. Por isso, ele deve ser criado direto no App.js
*/

const Input = ({ id, label, valor, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" name={id} value={valor} onChange={({ target }) => setValue(target.value)} {...props}/>
    </>
  )
}

export default Input
