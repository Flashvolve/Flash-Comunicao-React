import React from 'react'

import PropTypes from 'prop-types'

import './boto-integraes.css'

const BotoIntegraes = (props) => {
  return (
    <div className={`boto-integraes-container ${props.rootClassName} `}>
      <button type="button" className="boto-integraes-button button">
        <span className="boto-integraes-text">
          <span className="">Nova integração</span>
          <br className=""></br>
        </span>
      </button>
    </div>
  )
}

BotoIntegraes.defaultProps = {
  rootClassName: '',
}

BotoIntegraes.propTypes = {
  rootClassName: PropTypes.string,
}

export default BotoIntegraes
