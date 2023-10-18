import React from 'react'

import PropTypes from 'prop-types'

import BotaoMenu from './botao-menu'
import './configuraes-templates.css'

const ConfiguraesTemplates = (props) => {
  return (
    <div className={`configuraes-templates-settings ${props.rootClassName} `}>
      <BotaoMenu
        text="Configurações"
        image_src="/settings.svg"
        rootClassName="botao-menu-root-class-name5"
        className=""
      ></BotaoMenu>
    </div>
  )
}

ConfiguraesTemplates.defaultProps = {
  rootClassName: '',
}

ConfiguraesTemplates.propTypes = {
  rootClassName: PropTypes.string,
}

export default ConfiguraesTemplates
