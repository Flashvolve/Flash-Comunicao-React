import React from 'react'

import { Helmet } from 'react-helmet'

import MenuLateralTemplates from '../components/menu-lateral-templates'
import ModelosDeCabealho from '../components/modelos-de-cabealho'
import './templates-flashvolve.css'

const TemplatesFlashvolve = (props) => {
  return (
    <div className="templates-flashvolve-container">
      <Helmet>
        <title>Templates-Flashvolve - Flash - Comunicação</title>
        <meta
          property="og:title"
          content="Templates-Flashvolve - Flash - Comunicação"
        />
      </Helmet>
      <MenuLateralTemplates rootClassName="menu-lateral-templates-root-class-name"></MenuLateralTemplates>
      <ModelosDeCabealho rootClassName="modelos-de-cabealho-root-class-name"></ModelosDeCabealho>
    </div>
  )
}

export default TemplatesFlashvolve
