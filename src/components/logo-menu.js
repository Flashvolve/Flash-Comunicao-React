import React from 'react'

import PropTypes from 'prop-types'

import './logo-menu.css'

const LogoMenu = (props) => {
  return (
    <div className="logo-menu-logo">
      <img
        alt="image"
        src="https://res.cloudinary.com/dd9puomgu/image/upload/v1697057274/wgicw4hdtiqcsatxbdr9.svg"
        className="logo-menu-image"
      />
    </div>
  )
}

LogoMenu.defaultProps = {
  image_src: '3e8475b4-c786-4069-bdc8-cabac908f3e4',
  image_alt: 'image',
}

LogoMenu.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default LogoMenu
