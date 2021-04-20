import React from 'react'
import { Route, Routes, useParams, NavLink } from 'react-router-dom'
import ProdutoDescricao from './ProdutoDescricao'
import ProdutoAvaliacao from './ProdutoAvaliacao'
import ProdutoCustomizado from './ProdutoCustomizado'

const Produto = () => {
  const params = useParams()

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>{' '}
        <NavLink to="avaliacao">Avaliação</NavLink>{' '}
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Routes>
        <Route path="" element={<ProdutoDescricao/>} /> {/* path vazio é a rota da página atual que é a de Produto */}
        <Route path="avaliacao" element={<ProdutoAvaliacao/>} />
        <Route path="customizado" element={<ProdutoCustomizado/>} />
      </Routes>
    </div>
  )
}

export default Produto

