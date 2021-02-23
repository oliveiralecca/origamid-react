import React from 'react'
import Produto from './Produto'

/*
  Os links abaixo puxam dados de um produto em formato JSON
  https://ranekapi.origamid.dev/json/api/produto/tablet
  https://ranekapi.origamid.dev/json/api/produto/smartphone
  https://ranekapi.origamid.dev/json/api/produto/notebook
  Crie uma interface com 3 botões, um para cada produto.
  Ao clicar no botão faça um fetch da api e mostre os dados do produto na tela.
  Mostre apenas um produto por vez
  Mostre a mensagem carregando... enquanto o fetch é realizado
*/

const Ex003 = () => {
  const [dados, setDados] = React.useState(null)
  const [carregando, setCarregando] = React.useState(null)

  async function handleClick(event) {
    setCarregando(true)

    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
    const json = await response.json()

    setDados(json)
    setCarregando(false)
  }
  
  return (
    <div>
      <button onClick={handleClick} style={{margin: '5px'}}>notebook</button>
      <button onClick={handleClick} style={{margin: '5px'}}>smartphone</button>
      <button onClick={handleClick} style={{margin: '5px'}}>tablet</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados}/>} {/* se não tiver mais carregando e existirem dados, mostra produto */}
    </div>
  )
}

export default Ex003

