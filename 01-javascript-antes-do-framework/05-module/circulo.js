import numeroAleatorio from "./numero-aleatorio.js"

function area (raio) {
  return Math.PI * raio ** 2
}

function circunferencia(raio) {
  return 2 * raio * Math.PI
}

function aleatorio() {
  return numeroAleatorio()
}

// exportando todas as funções de uma vez a partir de um objeto
const Circulo = {
  area,
  circunferencia,
  aleatorio
}

export default Circulo
