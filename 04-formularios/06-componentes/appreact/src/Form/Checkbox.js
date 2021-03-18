import React from 'react'

const Checkbox = ({ options, valor, setValue }) => {
  function handleChange({ target }) {
    if(target.checked) {
      setValue([...valor, target.value])
    } else {
      setValue(valor.filter(item => item !== target.value))
    }
  }

  return (
    <>
      {options.map(option => 
      <label key={option}>
        <input type="checkbox" value={option} checked={valor.includes(option)} onChange={handleChange}/>
        {option}
      </label>
      )}     
    </>
  )
}

export default Checkbox
