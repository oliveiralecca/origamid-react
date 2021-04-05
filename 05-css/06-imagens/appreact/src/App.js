import React from 'react'
import './App.css'
import foto from './img/foto.jpg'
// import dog from './img/dog.svg'
// import { ReactComponent as Dog } from './img/dog.svg' // para maior controle do svg (animações e etc), importar assim
import DogSvg from './DogSvg' // controle ainda maior do svg, importando-o como um componente React

/*
  Imagens:
  - Podemos importar a imagem direto para o componente. O webpack irá gerar o caminho correto na build final.
*/

const App = () => {
  const [olho, setOlho] = React.useState(0)

  function handleClick() {
    setOlho(olho + 1)
  }

  return (
    <div>
      <p className="fundo" onClick={handleClick}></p>
      {/* <img src={dog} alt="Doguinho Brand"/> */}
      {/* <Dog /> */}
      <DogSvg color="#84e" olho={olho}/>
      <img src={foto} alt="Cachorro"/>     
    </div>
  )
}

export default App
