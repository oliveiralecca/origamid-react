import React from 'react'
import Produto2 from './Produto2'
import { GlobalStorage } from './GlobalContext'

const App2 = () => {
  return (
    <GlobalStorage>
      <Produto2/> {/* children de GlobalStorage */}
    </GlobalStorage>
  )
}

export default App2
