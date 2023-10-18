import React from 'react'

import PropTypes from 'prop-types'

import './botao-menu-templates.css'

const BotaoMenuTemplates = (props) => {
  return (
    <div
      id="teste123"
      className={`botao-menu-templates-container hover-menu-button ${props.rootClassName} `}
    >
      <button type="button" className="botao-menu-templates-botao-menu">
        <span className="botao-menu-templates-text">{props.text}</span>
      </button>
    </div>
  )
}

BotaoMenuTemplates.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  image_src: 'ed0cae4e-f7f3-4ebe-8021-71de575d3484',
  text: 'Dashboard',
}

BotaoMenuTemplates.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
}

export default BotaoMenuTemplates
