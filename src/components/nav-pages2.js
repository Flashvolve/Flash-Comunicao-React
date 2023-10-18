import React from 'react'

import PropTypes from 'prop-types'

import './nav-pages2.css'

const NavPages2 = (props) => {
  return (
    <div className={`nav-pages2-actions ${props.rootClassName} `}>
      <div className="nav-pages2-boto">
        <div className="nav-pages2-container">
          <button type="button" className="nav-pages2-button button">
            <img
              alt="image"
              src="https://api.iconify.design/ion/arrow-back.svg?color=%23FF9F0D"
              className="nav-pages2-image"
            />
          </button>
        </div>
      </div>
      <div className="nav-pages2-container1">
        <span className="nav-pages2-text">{props.text2111}</span>
        <div className="nav-pages2-drop">
          <div className="nav-pages2-drop-menu">
            <span className="nav-pages2-text1">{props.text16}</span>
          </div>
        </div>
        <span className="nav-pages2-text2">{props.text212}</span>
      </div>
      <div className="nav-pages2-container2">
        <button type="button" className="nav-pages2-button1">
          <span className="nav-pages2-text3">{props.text17}</span>
        </button>
      </div>
    </div>
  )
}

NavPages2.defaultProps = {
  rootClassName11: '',
  rootClassName: '',
  text212: 'de 50',
  text17: 'Próxima página',
  text2111: 'Página',
  rootClassName1: '',
  text16: '1',
}

NavPages2.propTypes = {
  rootClassName11: PropTypes.string,
  rootClassName: PropTypes.string,
  text212: PropTypes.string,
  text17: PropTypes.string,
  text2111: PropTypes.string,
  rootClassName1: PropTypes.string,
  text16: PropTypes.string,
}

export default NavPages2
