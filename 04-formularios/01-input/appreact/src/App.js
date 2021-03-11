import React from 'react';

/*
  Input: para criar campos de formulário reativos, o estado deve vir no "value" e a função atualizadora no "onChange" (estado e função do hook useState).
*/

const Caso1 = () => {
  const [nome, setNome] = React.useState('')

  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <input id="nome" type="text" value={nome} onChange={event => setNome(event.target.value)}/>
    </form>
  )
}


/*
  Form (em si): no <form> controlamos o que acontece ao enviá-lo, por isso definimos uma função para lidar com o onSubmit. O preventDefault() irá prevenir o comportamento padrão de envio, que seria atualizar a página enviando uma requisição para o que estiver em action="".
*/

const Caso2 = () => {
  const [nome, setNome] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    console.log(event)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input id="nome" type="text" name="nome" value={nome} onChange={event => setNome(event.target.value)}/>
      <button>Enviar</button>
    </form>
  )
}


/*
  Múltiplos campos: podemos definir um estado para cada campo.
*/

const Caso3 = () => {
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    console.log(event)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input id="nome" type="text" name="nome" value={nome} onChange={event => setNome(event.target.value)}/>

      <label htmlFor="email">E-mail</label>
      <input id="email" type="email" name="email" value={email} onChange={event => setEmail(event.target.value)}/>

      <button>Enviar</button>
    </form>
  )
}


/*
  Objeto: definindo um objeto para guardar todos os valores dos campos do formulário.
*/

const App = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: ''
  })

  function handleSubmit(event) {
    event.preventDefault()
    console.log(event)
  }

  // desestruturo o event.target
  function handleChange({target}) {
    // desestruturo o target.id, target.value
    const {id, value} = target
    setForm({...form, [id]: value}) // [id] = nome, quando digito no campo do Nome; email, quando digito no campo de email // ...form = pegando os valores antigos para que um não sobrescreva o outro
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input id="nome" type="text" name="nome" value={form.nome} onChange={handleChange}/>
      {form.nome} {/* verificando se tá reativo = se mudar junto com oq digito no campo, ESTÁ */}

      <label htmlFor="email">E-mail</label>
      <input id="email" type="email" name="email" value={form.email} onChange={handleChange}/>
      {form.email}

      <button>Enviar</button>
    </form>
  )
}

export default App;
