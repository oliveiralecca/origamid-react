import React from 'react'

/*
  Às vezes precisamos executar um efeito sempre que um componente for desmontado. Para isso utilizamos um callback no retorno do callback do efeito (callback dentro de callback)
*/

const Produto = () => {
  // Utilizamos o useEffect para adicionar eventos direto ao DOM
  React.useEffect(() => {
    function handleScroll(event) {
      console.log(event)
    }
    window.addEventListener('scroll', handleScroll)

    // Esse retorno só acontece quando o elemento some da tela (limpa o evento quando o elemento é removido do DOM)
    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
  }, [])

  return (
    <div style={{height: '200vh'}}>
      <p>Meu Produto</p>
    </div>
  )
}

export default Produto
