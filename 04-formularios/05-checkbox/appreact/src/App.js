import React from 'react';

/*
  Checkbox: outro tipo de input, e seu estado está relacionado ao "checked". Assim como no input do tipo radio, o valor de "value" é estático.
*/

const Caso1 = () => {
  const [termos, setTermos] = React.useState(false)

  return (
    <form>
      <label>
        <input type="checkbox" value="Termos" checked={termos} onChange={({ target }) => setTermos(target.checked)}/>
        &nbsp;Li e aceito os termos.
      </label>  
      {termos && 'Aceitou os termos!'}    
    </form>
  )
}


/*
  Múltiplos itens: podemos definir um estado para cada item (inviável mas possível), ou um array que irá conter todos os itens selecionados.
*/

const App = () => {
  const [cores, setCores] = React.useState(['vermelho'])

  function handleChange({ target }) {
    if(target.checked) {
      setCores([...cores, target.value]) // só adiciona a cor ao array se ela estiver checada, ao desmarcar, a cor não será adicionada novamente (como acontece se não passar a função att dentro do if)
    } else {
      setCores(cores.filter(cor => cor !== target.value)) // remove do array ao desmarcar
    } 
  }

  return (
    <form>
      <label>
        <input type="checkbox" value="azul" checked={cores.includes('azul')} onChange={handleChange}/>
        Azul
      </label>

      <label>
        <input type="checkbox" value="vermelho" checked={cores.includes('vermelho')} onChange={handleChange}/>
        Vermelho
      </label>

      <label>
        <input type="checkbox" value="amarelo" checked={cores.includes('amarelo')} onChange={handleChange}/>
        Amarelo
      </label>
    </form>
  )
}

export default App;
