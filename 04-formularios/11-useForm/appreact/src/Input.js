import React from 'react'

const Input = ({ id, label, valor, onChange, value, type, onBlur, placeholder, error }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} name={id} value={valor} onChange={onChange} placeholder={placeholder} onBlur={onBlur}/>
      {error && <p>{error}</p>}
    </>
  )
}

export default Input
