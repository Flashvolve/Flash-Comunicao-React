import React from 'react'

import PropTypes from 'prop-types'

import './pesquisa.css'

const Pesquisa = (props) => {
  return (
    <div className={`pesquisa-container ${props.rootClassName} `}>
      <img
        alt="image"
        src="https://api.iconify.design/radix-icons/magnifying-glass.svg?color=%23FF9F0D"
        className="pesquisa-image"
      />
      <input type="text" placeholder="Pesquisar" className="pesquisa-input" />
    </div>
  )
}

Pesquisa.defaultProps = {
  rootClassName: '',
}

Pesquisa.propTypes = {
  rootClassName: PropTypes.string,
}

export default Pesquisa
