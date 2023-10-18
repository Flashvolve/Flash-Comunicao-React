import React from 'react'

import { Helmet } from 'react-helmet'

import MenuLateral from '../components/menu-lateral'
import ContedoHelpdesk from '../components/contedo-helpdesk'
import './growth-helpdesk.css'

const GrowthHelpdesk = (props) => {
  return (
    <div className="growth-helpdesk-container">
      <Helmet>
        <title>Growth-Helpdesk - Flash - Comunicação</title>
        <meta
          property="og:title"
          content="Growth-Helpdesk - Flash - Comunicação"
        />
      </Helmet>
      <MenuLateral rootClassName="menu-lateral-root-class-name4"></MenuLateral>
      <ContedoHelpdesk rootClassName="contedo-helpdesk-root-class-name"></ContedoHelpdesk>
    </div>
  )
}

export default GrowthHelpdesk
