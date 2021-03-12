import React from 'react';

/*
  No React o textarea é utilizado como um input (tag única sem fechamento, diferente do HTML) e com o value para definir o seu valor interno.
*/

const App = () => {
  const [mensagem, setMensagem] = React.useState('')

  return (
    <form>
      <label htmlFor="msg">Mensagem</label>
      <textarea id="msg" value={mensagem} rows="5" onChange={({ target }) => setMensagem(target.value)}/>
      {mensagem}
    </form>
  )
}

export default App;
