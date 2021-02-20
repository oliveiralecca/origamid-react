import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
  return (
    <div>
      <Input id="email" label="Email" required/>
      <Input id="senha" type="password" label="Senha"/> {/* type=".." aqui está sobrescrevendo o type="text" definido como padrão no Input.js */}
      <Button/>
    </div>
  )
}

export default Form
