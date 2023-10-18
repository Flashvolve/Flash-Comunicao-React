import React from 'react'

import PropTypes from 'prop-types'

import './nav-pages.css'

const NavPages = (props) => {
  return (
    <div className={`nav-pages-actions ${props.rootClassName} `}>
      <div className="nav-pages-boto">
        <div className="nav-pages-container">
          <button type="button" className="nav-pages-button button">
            <img
              alt="image"
              src="https://api.iconify.design/ion/arrow-back.svg?color=%23dc0f37"
              className="nav-pages-image"
            />
          </button>
        </div>
        <div className="nav-pages-container1">
          <button type="button" className="nav-pages-button1">
            <span className="nav-pages-text">{props.text17}</span>
          </button>
        </div>
      </div>
      <div className="nav-pages-container2">
        <span className="nav-pages-text1">{props.text2111}</span>
        <div className="nav-pages-drop">
          <div className="nav-pages-drop-menu">
            <span className="nav-pages-text2">{props.text16}</span>
          </div>
        </div>
        <span className="nav-pages-text3">{props.text212}</span>
      </div>
    </div>
  )
}

NavPages.defaultProps = {
  rootClassName: '',
  text16: '1',
  text212: 'de 50',
  rootClassName11: '',
  text17: 'Próxima página',
  text2111: 'Página',
  rootClassName1: '',
}

NavPages.propTypes = {
  rootClassName: PropTypes.string,
  text16: PropTypes.string,
  text212: PropTypes.string,
  rootClassName11: PropTypes.string,
  text17: PropTypes.string,
  text2111: PropTypes.string,
  rootClassName1: PropTypes.string,
}

export default NavPages
