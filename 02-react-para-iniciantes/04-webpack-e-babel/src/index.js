import ReactDOM from 'react-dom'
import React from 'react' // para que seja possível usar a sintaxe React (React.createElement()) criada a partir da sintaxe JSX (render <App/>, e no próprio arquivo App) que o Babel traduz 
import App from './App'

ReactDOM.render(<App/>, document.getElementById('root'))
