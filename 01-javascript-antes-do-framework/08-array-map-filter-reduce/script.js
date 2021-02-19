/*
  Métodos de Array => todos eles retornam um array novo, o original se mantém intacto

  - MAP: transforma todos os itens de um array, devolvendo um novo de mesmo tamanho;
  - FILTER: caso o item atenda a uma propriedade de uma função (true), filtra esses itens e devolve-os em um novo array;
  - REDUCE: reduz o array a um único valor
*/

const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas a Pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados"
]

/* 
  const precosFiltro = precos.filter(function(preco) {
    if(preco.includes("R$")) {
      return true
    } else {
      return false
    }
  })
*/

const precosFiltro = precos.filter(preco => preco.includes("R$"))

/*
const precoNumeros = precosFiltro.map(function(preco) {
  return Number(preco.replace("R$ ", ""))
}) // +preco... = transforma as strings em número positivo
*/

const precoNumeros = precosFiltro.map(preco => Number(preco.replace("R$ ", "")))

/*
const total = precoNumeros.reduce(function(anterior, atual) {
  return anterior + atual
}) 
*/

const total = precoNumeros.reduce((acumulador, item) => acumulador + item)

console.log(total)
