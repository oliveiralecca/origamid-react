import React from 'react'

/*
  Otimize o código do slide anterior (sem usar o mesmo HTML várias vezes - <label> <input>),
  utilizando o array abaixo para mostrar
  cada checkbox na tela.
*/

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza']

const Ex007 = () => {
  const [cores, setCores] = React.useState([])

  function handleChange({ target }) {
    if(target.checked) {
      setCores([...cores, target.value])
    } else {
      setCores(cores.filter(cor => cor !== target.value))
    } 
  }

  return (
    <form>
      {coresArray.map(cor => (
        <label key={cor} style={{textTransform: 'capitalize'}}>
          <input type="checkbox" value={cor} checked={cores.includes(cor)} onChange={handleChange}/>
          {cor}
        </label>
      ))}
    </form>
  )
}

export default Ex007
