/*
  Forma tradicional de fazer a função com evento:

  function handleMouseMove(event) {
    const eventoX = event.clientX
    const eventoY = event.clientY
    console.log(clientX, clientY)
  }

*/

/* Formas com destructuring */

// Objeto => deve ser o mesmo nome da chave no objeto ("clientX, ...")
function handleMouseMove(event) {
  const { clientX, clientY } = event
  console.log(clientX, clientY)
}

function handleMouseMove({ clientX, clientY }) {
  console.log(clientX, clientY)
}

document.documentElement.addEventListener("mousemove", handleMouseMove)

/*
  Forma tradicional:

  const frutas = ["Banana", "Uva"]
  const fruta1 = frutas[0]
  console.log(fruta1)

*/

/* Formas com destructuring */

// Array => já que não existe chave no array, apenas valores, posso dar qualquer nome ("fruta1, ...")
const frutas = ['Banana', 'Uva']
const [fruta1, fruta2] = frutas

console.log(fruta1, fruta2)

// exemplo em React (Hooks)
const useState = ['blue', function (color) {
    useState[0] = color
  }
];

const [color, setColor] = useState
setColor('red')

// Destructuring no array é um casamento de padrão!!
