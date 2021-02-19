/*
  Fetch => forma de enviar "requisições assíncronas" para o servidor. Serve para acessar ou escrever dados de/em APIs externas. Seu retorno é uma promessa (promise).

  - Requisição síncrona: uma requisição é enviada e o processo remetente é bloqueado até que ocorra uma resposta, ou seja, não é possível enviar novas requisições até que nossa requisição atual seja finalizada;
  - Assíncrona: não existe sincronismo entre as requisições, sendo assim, podemos enviar diversas requisições em paralelo, onde cada resposta retorna quando estiver pronta.
*/

// .then() = código que será executado após a requisição ser resolvida; 
// function(response) = função de callback (função que é passada como argumento de outra); 
// response é a resposta da requisição feita com o fetch
// response.json() = transformando a resposta recebida em json que é seu tipo de arquivo originalmente, mas que chega pra gente em um tipo que não se pode manipular (ReadableStream)
// jsonBody retorna o objeto descrito no arquivo json puxado da API (um array com vários objetos dentro dele)

fetch("https://ranekapi.origamid.dev/json/api/produto")
  .then(response => response.json())
  .then(jsonBody => {
    document.querySelector("#app").innerHTML = jsonBody[0].nome
}) // acessar dados da API

const data = {
  id: "lecaroline",
  nome: "Leticia",
  email: "lecaroline@email.com",
  senha: "12345",
  cep: "12345678",
  rua: "Rua A",
  numero: "01",
  bairro: "Sudoeste",
  cidade: "LearnCity",
  estado: "LearnState"
}

fetch("https://ranekapi.origamid.dev/json/api/usuario", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
}) // escrever dados na API
