import React from 'react'

import PropTypes from 'prop-types'

import './botao-menu.css'

const BotaoMenu = (props) => {
  return (
    <div
      id="teste123"
      className={`botao-menu-container hover-menu-button ${props.rootClassName} `}
    >
      <button type="button" className="botao-menu-botao-menu">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="botao-menu-image"
        />
        <span className="botao-menu-text MenuBarra">{props.text}</span>
      </button>
    </div>
  )
}

BotaoMenu.defaultProps = {
  image_src: '/Novos ícones/dashboard-200h.png',
  rootClassName: '',
  image_alt: 'image',
  text: 'Dashboard',
}

BotaoMenu.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
}

export default BotaoMenu
