import React from 'react'

import { Helmet } from 'react-helmet'

import MenuLateral from '../components/menu-lateral'
import ContedoColaboradores from '../components/contedo-colaboradores'
import './comunicao-colaboradores.css'

const ComunicaoColaboradores = (props) => {
  return (
    <div className="comunicao-colaboradores-container">
      <Helmet>
        <title>Comunicao-Colaboradores - Flash - Comunicação</title>
        <meta
          property="og:title"
          content="Comunicao-Colaboradores - Flash - Comunicação"
        />
      </Helmet>
      <MenuLateral rootClassName="menu-lateral-root-class-name9"></MenuLateral>
      <ContedoColaboradores rootClassName="contedo-colaboradores-root-class-name"></ContedoColaboradores>
    </div>
  )
}

export default ComunicaoColaboradores
