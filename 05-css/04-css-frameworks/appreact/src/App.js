import React from 'react';

import Card from 'react-bootstrap/Card'

/*
  Podemos adicionar qualquer library/framework de CSS ao React. 

  Bootstrap com classes:
  - com o @next vamos instalar a versão 5 do bootstrap (nessa versão não se tem mais dependência do jquery); 
  - Popper.js é necessário para algumas funções do bootstrap.
*/

const Caso1 = () => {
  return (
    <div className="card bg-dark text-white m-5" style={{maxWidth: '18rem'}}>
      <div className="card-header">Notebook</div>
      <div className="card-body">
        <h5 className="card-title">R$ 2500</h5>
        <p className="card-text">Esse é um notebook incrivelmente espetacular e indispensável se você é um gamer assíduo!</p>
      </div>
    </div>
  )
}


/*
  Existem frameworks de CSS que fornecem componentes prontos para serem utilizados ao invés de classes. O react-bootstrap utiliza em sua base o bootstrap, mas fornece componentes React.
*/

const App = () => {
  return (
    <Card bg="dark" text="white" className="m-5" style={{maxWidth: '18rem'}}> {/* nem tudo o componente tem como props, como no caso da margem (m-5), então posso usar como className mesmo */}
      <Card.Header>Notebook</Card.Header>
      <Card.Body>
        <Card.Title>R$ 2500</Card.Title>
        <Card.Text>Esse é um notebook incrivelmente espetacular e indispensável se você é um gamer assíduo!</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default App;
