import React from 'react'

/*
  Faça um fetch (POST) para a API abaixo
  Para a criação ser aceita é necessário enviar dados de:
  nome, email, senha, cep, rua, numero, bairro, cidade e estado
*/

const formFields = [
  {
    id: 'nome',
    label: 'Nome Completo',
    type: 'text'
  },
  {
    id: 'email',
    label: 'E-mail',
    type: 'email'
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password'
  },
  {
    id: 'cep',
    label: 'CEP',
    type: 'text'
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text'
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text'
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text'
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text'
  },
]

const Ex006 = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    bairro: '',
    cidade: '',
    estado: ''
  })

  /*
    OU... AUTOMATIZANDO OS CAMPOS...

    const [form, setForm] = React.useState(
      formFields.reduce((acc, field) => {
        return {
          ...acc,
          [field.id]: ''
        }
      }, {}) -> valor inicial do acumulador, objeto vazio
    )

  */

  const [response, setResponse] = React.useState(null)

  function handleChange({ target }) {
    const { id, value } = target
    setForm({ ...form, [id]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    // Função utilizada para realizar o envio dos dados (POST)
    // fetch(url, opções que é um obj {})
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // (form) é o objeto com os dados do formulário que será enviado
      body: JSON.stringify(form)
    }).then(response => setResponse(response))
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }) => 
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input id={id} type={type} value={form[id]} onChange={handleChange}/>
        </div>
      )}
      
      {response && response.ok && <p>Formulário enviado!</p>}

      <button>Enviar</button>
    </form>
  )
}

export default Ex006
