import React from 'react' 

const useLocalStorage = (key, inicial) => {
  const [state, setState] = React.useState(() => {
    // verificar se a chave já existe salva no localStorage
    const local = window.localStorage.getItem(key)
    return local ? local : inicial
  })

  // toda vez que o estado modificar, quero salvá-lo no localStorage
  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [state, key])

  return [state, setState]
}

export default useLocalStorage
