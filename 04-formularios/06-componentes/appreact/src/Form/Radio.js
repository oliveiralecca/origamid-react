import React from 'react'

const Radio = ({ options, valor, setValue, ...props }) => {
  return (
    <>
      {options.map(option => 
        <label key={option} htmlFor={option}>
          <input id={option} type="radio" value={option} checked={valor === option} onChange={({ target }) => setValue(target.value)} {...props}/>
          {option}
        </label>)}
    </>
  )
}

export default Radio
