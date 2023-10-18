import React from 'react'

import PropTypes from 'prop-types'

import './logo-menu-templates.css'

const LogoMenuTemplates = (props) => {
  return (
    <div className={`logo-menu-templates-logo ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src="https://res.cloudinary.com/dd9puomgu/image/upload/v1696423695/ccsvrsjp14lwsz0e8don.png"
        className="logo-menu-templates-image"
      />
    </div>
  )
}

LogoMenuTemplates.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  image_src: '3e8475b4-c786-4069-bdc8-cabac908f3e4',
}

LogoMenuTemplates.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default LogoMenuTemplates
