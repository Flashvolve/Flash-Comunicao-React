import React from 'react'

import PropTypes from 'prop-types'

import LogoMenu from './logo-menu'
import ContedoMenu from './contedo-menu'
import Settings from './settings'
import Plano from './plano'
import Profile from './profile'
import './menu-lateral.css'

const MenuLateral = (props) => {
  return (
    <div className={`menu-lateral-container ${props.rootClassName} `}>
      <LogoMenu className=""></LogoMenu>
      <div className="menu-lateral-barra">
        <div className="menu-lateral-sections">
          <ContedoMenu className=""></ContedoMenu>
        </div>
        <div className="menu-lateral-contentbotton">
          <div className="menu-lateral-acount">
            <Settings className=""></Settings>
            <Plano className=""></Plano>
          </div>
          <Profile
            rootClassName="profile-root-class-name"
            className=""
          ></Profile>
        </div>
      </div>
    </div>
  )
}

MenuLateral.defaultProps = {
  image_alt1: 'image',
  rootClassName: '',
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

MenuLateral.propTypes = {
  image_alt1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
}

export default MenuLateral
