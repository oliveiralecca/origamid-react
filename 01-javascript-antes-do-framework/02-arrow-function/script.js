function upperName(name) {
  return name.toUpperCase()
} // função comum

const upperName2 = function (name) {
  return name.toUpperCase()
} // função dentro de uma variável

const upperName3 = name => {
  return name.toUpperCase()
} // arrow function

const upperName4 = (name, lastName) => {
  return name.toUpperCase()
} // arrow function com dois argumentos

const upperName5 = name => name.toUpperCase() // arrow function com return implícito
const countLetters = word => word.length

console.log(upperName5("Murilo"))
console.log(countLetters("Ana"))

class Menu {
  constructor(menu) {
    this.menuElement = document.querySelector(menu)
  }
  addActiveEvent() {
    this.menuElement.addEventListener("click", function(event) {
      event.target.classList.add("active")
    }) 
  }
} // classe sempre retorna um objeto

const menu = new Menu(".principal") // ativando uma classe
menu.addActiveEvent() // adicionando o evento, ativando o método

console.log(menu)

/*
  OBS.:
  - function cria um novo this;
  - arrow function não, o que é bom para acessar o elemento pai, nesse caso, a classe Menu.
*/
