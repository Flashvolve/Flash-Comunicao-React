import React from 'react'

import { Helmet } from 'react-helmet'

import MenuLateral from '../components/menu-lateral'
import AcompanharChamado from '../components/acompanhar-chamado'
import './growth-chamado-status.css'

const GrowthChamadoStatus = (props) => {
  return (
    <div className="growth-chamado-status-container">
      <Helmet>
        <title>Growth-Chamado-Status - Flash - Comunicação</title>
        <meta
          property="og:title"
          content="Growth-Chamado-Status - Flash - Comunicação"
        />
      </Helmet>
      <MenuLateral rootClassName="menu-lateral-root-class-name7"></MenuLateral>
      <AcompanharChamado rootClassName="acompanhar-chamado-root-class-name"></AcompanharChamado>
    </div>
  )
}

export default GrowthChamadoStatus
