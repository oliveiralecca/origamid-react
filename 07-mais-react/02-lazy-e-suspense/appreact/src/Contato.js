import React from 'react'
import $ from 'jquery'

/* 
  Supondo que aqui é a única parte da aplicação onde eu quero uma biblioteca externa, então uso o lazy e o suspense para só carregar essa página com uma biblioteca extensa, quando for necessário. 
*/

const Contato = () => {
  return (
    <div>
      <h1>Contato</h1>
    </div>
  )
}

export default Contato

