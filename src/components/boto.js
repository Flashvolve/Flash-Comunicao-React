import React from 'react'

import PropTypes from 'prop-types'

import './boto.css'

const Boto = (props) => {
  return (
    <div className={`boto-container ${props.rootClassName} `}>
      <button type="button" className="boto-button button">
        <img
          alt="image"
          src="https://api.iconify.design/ph/export-bold.svg?color=white"
          className="boto-image"
        />
        <span className="boto-text textbutton">Exportar</span>
      </button>
    </div>
  )
}

Boto.defaultProps = {
  rootClassName: '',
}

Boto.propTypes = {
  rootClassName: PropTypes.string,
}

export default Boto
