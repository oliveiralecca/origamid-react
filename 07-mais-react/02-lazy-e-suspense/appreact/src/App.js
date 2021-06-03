import React from 'react';
//import Contato from './Contato';
const Contato = React.lazy(() => import('./Contato'))

/* 
  Code splitting: com "Lazy e Suspense" podemos dividir o código da nossa aplicação, assim, o React só irá carregar certas partes quando estas forem necessárias.

  - lazy = carrega o componente apenas quando o usuário entrar na página, ou ao clicar num botão, por exemplo;
  - suspense = utilizado junto com o lazy, caso não, dá erro;
  - "fallback" do suspense = algo a ser mostrado enquanto o lazy carrega o componente (como um loading ou um texto...)
*/

const App = () => {
  const [ativo, setAtivo] = React.useState(false)
  return (
    <div>
      {ativo && (
      <React.Suspense fallback={<div>Carregando...</div>}>
        <Contato />
      </React.Suspense>  
      )}  
      <button onClick={() => setAtivo(!ativo)}>{!ativo?'Ativar':'Desativar'}</button> 
    </div>
  );
}

export default App;
