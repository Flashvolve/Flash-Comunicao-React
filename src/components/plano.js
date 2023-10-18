import React from 'react'

import PropTypes from 'prop-types'

import './plano.css'

const Plano = (props) => {
  return (
    <div className="plano-plano">
      <span className="plano-text">{props.text}</span>
      <span className="plano-text1">{props.text11}</span>
      <div className="plano-barrafundo">
        <div className="plano-container"></div>
      </div>
      <span className="plano-text2">{props.text1}</span>
    </div>
  )
}

Plano.defaultProps = {
  text11: 'Vigência até 25/04/2024',
  text1: 'Ver assinatura',
  text: 'Plano de Enterprise',
}

Plano.propTypes = {
  text11: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default Plano
