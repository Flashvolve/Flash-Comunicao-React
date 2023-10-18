import React from 'react'

import { Helmet } from 'react-helmet'

import MenuLateral from '../components/menu-lateral'
import ContedoSettings from '../components/contedo-settings'
import './growth-settings.css'

const GrowthSettings = (props) => {
  return (
    <div className="growth-settings-container">
      <Helmet>
        <title>Growth-Settings - Flash - Comunicação</title>
        <meta
          property="og:title"
          content="Growth-Settings - Flash - Comunicação"
        />
      </Helmet>
      <MenuLateral rootClassName="menu-lateral-root-class-name5"></MenuLateral>
      <ContedoSettings rootClassName="contedo-settings-root-class-name1"></ContedoSettings>
    </div>
  )
}

export default GrowthSettings
