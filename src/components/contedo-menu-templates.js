import React from 'react'

import PropTypes from 'prop-types'

import BotaoMenuTemplates from './botao-menu-templates'
import './contedo-menu-templates.css'

const ContedoMenuTemplates = (props) => {
  return (
    <div className={`contedo-menu-templates-contedo ${props.rootClassName} `}>
      <BotaoMenuTemplates rootClassName="botao-menu-templates-root-class-name"></BotaoMenuTemplates>
    </div>
  )
}

ContedoMenuTemplates.defaultProps = {
  rootClassName: '',
}

ContedoMenuTemplates.propTypes = {
  rootClassName: PropTypes.string,
}

export default ContedoMenuTemplates
