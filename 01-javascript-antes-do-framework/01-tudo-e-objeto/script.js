// objeto literal
const menu = {
  class: ".principal", // propriedade => chave/valor
  ativar() {
    const menuElement = document.querySelector(this.class)
    console.log(menuElement)
  } // método ou função
} 

menu.ativar() // chamada da função declarada dentro do objeto menu

/*
  OBS.:
  - document também é um objeto, pois estamos acessando um método dele com .queryselector();
  - .querySelector() é um método;
  - console é um objeto e log() é um método dele;
  - this. se refere àquele objeto criado (menu);
  - em "leticia".length, length é uma propriedade, não tem () ao final para ativá-la como nos métodos;
  - pra null e undefined não tem propriedades, não são objetos.
*/
