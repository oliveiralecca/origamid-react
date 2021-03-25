import React from 'react'

/*
  Esse hook só funciona pra "input", mas é geralmente no input mesmo que a gente precisa de um regex para validação de dados.
*/

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'Cep inválido!'
  },
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email inválido!'
  }
}

// useForm('cep')
// types[type] == types.cep

const useForm = (type) => {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState(null)

  function validate(value) {
    if(type === false) return true
    if(value.length === 0) {
      setError('Preencha com um valor!')
      return false
    } else if(types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  function onChange({ target }) {
    if(error) validate(target.value)
    setValue(target.value)
  }

  return { value, setValue, error, onChange, onBlur: () => validate(value), validate: () => validate(value) }
}

export default useForm

