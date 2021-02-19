import { areaQuadrado, perimetroQuadrado } from "./quadrado.js" // no JS puro tem que informar a extensão
import teste from "./numero-aleatorio.js" // com "export default" pode importar com nome diferente
import Circulo from "./circulo.js"

console.log(areaQuadrado(4))
console.log(perimetroQuadrado(5))

console.log(teste())

console.log(Circulo.area(5))
console.log(Circulo.circunferencia(7))
console.log(Circulo.aleatorio())
