import React from 'react'
import { useNavigate } from 'react-router'

const Login = () => {
  const navigate = useNavigate()

  function handleClick() {
    console.log('Fazer login provavelmente com um fetch...')
    navigate('/sobre') // aqui o caminho tem que ser completo (com a /), senão ele tenta ir para "login/sobre"
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login

