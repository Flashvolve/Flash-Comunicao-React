import React from 'react'

import { Helmet } from 'react-helmet'

import MenuLateral from '../components/menu-lateral'
import ContedoIntegraes from '../components/contedo-integraes'
import './growth-integraes.css'

const GrowthIntegraes = (props) => {
  return (
    <div className="growth-integraes-container">
      <Helmet>
        <title>Growth-Integraes - Flash - Comunicação</title>
        <meta
          property="og:title"
          content="Growth-Integraes - Flash - Comunicação"
        />
      </Helmet>
      <MenuLateral rootClassName="menu-lateral-root-class-name3"></MenuLateral>
      <ContedoIntegraes rootClassName="contedo-integraes-root-class-name"></ContedoIntegraes>
    </div>
  )
}

export default GrowthIntegraes
