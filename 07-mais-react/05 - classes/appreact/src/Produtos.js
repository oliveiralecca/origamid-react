import React from 'react'

class Produtos extends React.Component {
  constructor(props) {
    super(props)
    this.teste = 'teste' // propriedade estática
    this.state = {
      contar: 0
    } // reativas, são passadas em um objeto em this.state

    this.handleClick = this.handleClick.bind(this) // é necessário para definir o "this" para a função "handleClick", que assim faz a referência correta: o objeto criado na classe (Produtos)
  }

  handleClick() {
    this.setState((state) => ({ contar: state.contar + 1 }))
  }

  // CICLO DE VIDA do componente criado com classe
  componentDidMount() {
    console.log('Acontece quando o componente é montado')
    // perfeito para fazer um fetch, por exemplo
  }

  componentDidUpdate() {
    console.log('Acontece sempre que o componente é atualizado, renderizado novamente')
  }

  componentWillUnmount() {
    console.log('Acontece antes do componente sair da tela, desmontar')
  }

  render() {
    return (
      <div>
        {/* <h1>Meus Produtos</h1> */}
        <h1>{this.props.titulo} : {this.teste}</h1>
        <p>{this.state.contar}</p>
        <button onClick={this.handleClick}>Adicionar</button>
      </div>
    )
  }
}

export default Produtos
