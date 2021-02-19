/* 
  REST 
  - "...clientes" => ao passar os argumentos showList("Origamid", "Ana", "Maria", "Pedro"), "Origamid" casa com empresa, e todo o restante será atribuído a clientes como um array [];
*/

function showList(empresa, ...clientes) {
  console.log(empresa)
  console.log(clientes)
}

showList('Origamid', 'João', 'Maria')

/* 
  SPREAD 
  - "...numeros" => está espalhando os números, tirando de um em um e colocando no método max() sem o array, pois este método não aceita arrays;
*/

const numeros = [1, 2, 4, 29, 32, 2, 45, 3]
// console.log(Math.max(numeros)) => erro! max() não aceita arrays, apenas números
console.log(Math.max(...numeros))


/* Exemplo real */
const items = document.querySelectorAll("li") 
console.log(items) // é um NodeList, e não um array, então alguns métodos de array não funcionam aqui (ex: map)

items.forEach(item => {
   console.log(item)
})

// transformando em array
const items = Array.from(document.querySelectorAll("li")) 

/*
  [...items].map(item => {
    console.log(item)
  });
*/


/* Clonando objetos */
const carro = { cor: "azul", portas: 4, ano: 2020 }

const cloneCarro = { ...carro, turbo: true } // cria um clone, independente do objeto gerador

// clone a partir de um objeto criado com Classe => não é um clone perfeito
class Transporte {
  constructor() {
    this.terrestre = true
  }
  andar() {
    console.log("andou")
  }
}

class Carro extends Transporte {
  constructor(cor, portas) {
    super()
    this.cor = cor
    this.portas = portas
  }
} // classe que extende a de cima, e toda extensão precisa do "super()"

const carro2 = new Carro("vermelho", 4)

const cloneCarro2 = { ...carro2 }

console.log(carro2) // objeto do tipo Carro, com protótipo Transporte
console.log(cloneCarro2) // objeto do tipo e protótipo objeto

carro2.andar() // aqui o método se aplica pois carro2 tem o protótipo Transporte
cloneCarro2.andar() // aqui não se aplica
