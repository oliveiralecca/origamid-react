import React from 'react'

const ButtonModal = ({modal, setModal}) => {
  return (
    <button onClick={() => setModal(!modal)}>
      {modal ? 'Fechar' : 'Abrir'}
    </button>
  )
}


/*
  Fazendo a mudança de estado com uma função de callback, não é preciso passar o "modal" como propriedade (como no componente acima), pois esse valor anterior é acessado pelo próprio callback

  const ButtonModal = ({setModal}) => {
    function handleClick() {
      setModal((ativo) => !ativo)
    }

    return (
      <button onClick={handleClick}>
        Abrir
      </button>
    )
  }
*/

export default ButtonModal

