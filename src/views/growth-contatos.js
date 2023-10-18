import React from 'react'

import { Helmet } from 'react-helmet'

import MenuLateral from '../components/menu-lateral'
import ContedoColaboradores from '../components/contedo-colaboradores'
import './growth-contatos.css'

const GrowthContatos = (props) => {
  return (
    <div className="growth-contatos-container">
      <Helmet>
        <title>Growth-Contatos - Flash - Comunicação</title>
        <meta
          property="og:title"
          content="Growth-Contatos - Flash - Comunicação"
        />
      </Helmet>
      <MenuLateral rootClassName="menu-lateral-root-class-name2"></MenuLateral>
      <ContedoColaboradores rootClassName="contedo-colaboradores-root-class-name1"></ContedoColaboradores>
    </div>
  )
}

export default GrowthContatos
