import React from 'react';
import Header from './Header';

/*
  Memo: retorna um componente memorizado, ou seja, evita que o mesmo seja renderizado novamente toda vez que o estado do elemento pai mudar (nesse caso, o estado "contar" do elemento pai "App"). 

  - usar apenas para elementos que não dependam de estados dentro deles (serve para elementos que são fixos, como header e footer, por exemplo)
*/

const App = () => {
  const [contar, setContar] = React.useState(0)

  return (
    <div>
      <Header />
      <button onClick={() => setContar(contar + 1)}>Contando... {contar}</button>
    </div>
  );
}

export default App;
