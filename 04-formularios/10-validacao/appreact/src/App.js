import React from 'react';
import Input from './Input';

/*
  O "onBlur" é ativado sempre que o campo fica fora de foco, momento perfeito para validarmos o dado do campo. A validação pode ser feita com JavaScript utilizando REGEX.
*/

const App = () => {
  const [cep, setCep] = React.useState('')
  const [error, setError] = React.useState(null)

  function validateCep(value) {
    if(value.length === 0) {
      setError('Preencha com um valor!')
      return false
    } else if(!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha com um CEP válido!')
      return false
    } else {
      setError(null)
      return true
    }
  }

  // Valida quando tiro o foco do input
  function handleBlur({ target }) {
    //começa (^) com 5 dígitos (\d{5}), depois um hífen opcional (-?) e depois termina ($) em 3 dígitos (\d{3})
    //const regex = /^\d{5}-?\d{3}$/ 
    //const validacao = regex.test(target.value)
    validateCep(target.value)
  }

  // Valida a cada mudança na digitação (estado)
  function handleChange({ target }) {
    if(error) validateCep(target.value)
    setCep(target.value)
  }

  // Valida ao tentar enviar o formulário
  function handleSubmit(event) {
    event.preventDefault()
    if(validateCep(cep)) {
      console.log('Enviou')
    } else {
      console.log('Não enviar')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label="CEP" id="cep" type="text" valor={cep} onChange={handleChange} onBlur={handleBlur} placeholder="00000-000" />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  )
}

export default App;
