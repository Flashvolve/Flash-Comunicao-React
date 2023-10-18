import React from 'react'

import { Helmet } from 'react-helmet'

import MenuLateral from '../components/menu-lateral'
import ContedoCampanhas from '../components/contedo-campanhas'
import './comunicao-campanhas.css'

const ComunicaoCampanhas = (props) => {
  return (
    <div className="comunicao-campanhas-container">
      <Helmet>
        <title>Comunicao-Campanhas - Flash - Comunicação</title>
        <meta
          property="og:title"
          content="Comunicao-Campanhas - Flash - Comunicação"
        />
      </Helmet>
      <MenuLateral rootClassName="menu-lateral-root-class-name8"></MenuLateral>
      <ContedoCampanhas rootClassName="contedo-campanhas-root-class-name"></ContedoCampanhas>
    </div>
  )
}

export default ComunicaoCampanhas
