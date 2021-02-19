/*
  Async => cria funções assíncronas que irão esperar ("await" - só funciona com promessas) a promise ser resolvida, antes de continuar o código
  - substitue o uso do .then()
*/

/*
  Exatamente a mesma função, mas sem o uso de async/await:

  fetch('https://ranekapi.origamid.dev/json/api/produto')
    .then(response => response.json())
    .then(json => {
      console.log(json)
    })
*/

async function fetchProdutos(url) {
  const response = await fetch(url)
  const jsonBody = await response.json()
  return jsonBody
}

fetchProdutos("https://ranekapi.origamid.dev/json/api/produto")
