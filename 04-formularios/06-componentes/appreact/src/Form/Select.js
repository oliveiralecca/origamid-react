import React from 'react'

const Select = ({ options, value, setValue, ...props }) => {
  return (
    // value="" em <select> deixa selecionada a option que tem value vazio
    <select value={value} onChange={({ target }) => setValue(target.value)} {...props}> 
      <option value="" disabled>Selecione uma opção</option>
      {options.map(option => 
      <option key={option} value={option}>
        {option}
      </option>)}
    </select>
  )
} // LEMBRAR: sempre que tem map, preciso de uma key para cada elemento que será criado a partir desse map

export default Select

