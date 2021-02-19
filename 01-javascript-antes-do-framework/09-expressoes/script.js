/* Expressões => podem ser atribuídas a variáveis */

const grupoA = 100
const grupoB = 300

/*
  IF = É um bloco, não é uma expressão, portanto não pode ser usado no JSX (React): 
  <button onClick={event => event.target.classList.add("active")}>Botão</button>

  if(grupoA > grupoB) {
    console.log("Teste")
  } 
*/

const vencedor = grupoA > grupoB ? "Grupo A Ganhou" : "Grupo B Ganhou"

const active = true 
const button = active && 'Botão está ativo'
console.log(button)

const areaQuadrado = l => l * l

const array = [1,2,3,4,5]


