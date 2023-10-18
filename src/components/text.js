import React from 'react'

import PropTypes from 'prop-types'

import './text.css'

const Text = (props) => {
  return (
    <div className={`text-container ${props.rootClassName} `}>
      <span className="Textbox">
        O seu resultado até o momento comparado a empresas do mesmo segmento
        está: Acima da meta
      </span>
    </div>
  )
}

Text.defaultProps = {
  rootClassName: '',
}

Text.propTypes = {
  rootClassName: PropTypes.string,
}

export default Text
