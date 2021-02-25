import React from 'react';

/*
  Retorna um objeto com uma única propriedade: current. Esse objeto pode ser utilizado para guardarmos valores que irão persistir durante todo o ciclo de vida do elemento. Geralmente o .useRef() é utilizado para se referir a um elemento do DOM, sem precisar utilizar o querySelector ou similar.
*/

const Caso1 = () => {
  const video = React.useRef()

  React.useEffect(() => {
    // currentTime é uma propriedade da tag de vídeos <video/>
    console.log(video.current.currentTime)
  }, [])

  return (  
    // O "video" que aparece no atributo ref={} é da const definida acima com o .useRef()
    <video ref={video}>Teste</video>    
  )
}


/*
  É comum utilizar em formulários, quando precisamos de uma referência do elemento para colocá-lo em foco.
*/

const Caso2 = () => {
  const [comentarios, setComentarios] = React.useState([])
  const [input, setInput] = React.useState('')

  const inputElement = React.useRef()

  function handleClick() {
    setComentarios([...comentarios, input])
    setInput('') // para limpar o input após o envio
    inputElement.current.focus() // para manter o foco na caixa de texto, no input
  }

  return (  
    <div>
      <ul>
        {comentarios.map((comentario, index) => <li key={index}>{comentario}</li>)}
      </ul>
      <input type="text" ref={inputElement} value={input} onChange={({target}) => setInput(target.value)}/>
      <p>
        <button onClick={handleClick}>Enviar</button>
      </p>
    </div> 
  )
}


/*
  Seu uso não é restrito a elementos do DOM. Podemos utilizar também para guardar um valor do qual quero ter a referência dele mais tarde, como de um setTimeout por exemplo.
*/

const App = () => {
  const [carrinho, setCarrinho] = React.useState(0)
  const [notificacao, setNotificacao] = React.useState(null)
  const timeoutRef = React.useRef()

  function handleClick() {
    setCarrinho(carrinho + 1)
    setNotificacao('Item adicionado ao carrinho!')

    // Limpa o timeout anterior 
    clearTimeout(timeoutRef.current)
    // Agenda um novo (uma nova notificação) de 2 seg
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null)
    }, 2000)
    // Ou seja, não vai ficar gerando uma notificação por cima da outra. Posso clicar quantas vezes quiser, ele vai manter a notificação na tela, e ao parar de clicar é que conta os 2 seg para limpar a notificação
  }

  return (  
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar ao Carrinho: {carrinho}</button>
    </div>    
  )
}

export default App
