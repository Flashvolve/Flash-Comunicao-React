import React from 'react'

import { Helmet } from 'react-helmet'

import MenuLateral from '../components/menu-lateral'
import ContedoDashboard from '../components/contedo-dashboard'
import './comunicao-dashboard.css'

const ComunicaoDashboard = (props) => {
  return (
    <div className="comunicao-dashboard-container">
      <Helmet>
        <title>Flash - Comunicação</title>
        <meta property="og:title" content="Flash - Comunicação" />
      </Helmet>
      <MenuLateral rootClassName="menu-lateral-root-class-name"></MenuLateral>
      <ContedoDashboard rootClassName="contedo-dashboard-root-class-name"></ContedoDashboard>
    </div>
  )
}

export default ComunicaoDashboard
