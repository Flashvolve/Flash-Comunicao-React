import React from 'react'

import PropTypes from 'prop-types'

import './profile-templates.css'

const ProfileTemplates = (props) => {
  return (
    <div className={`profile-templates-profile ${props.rootClassName} `}>
      <div className="profile-templates-foto">
        <img
          alt="image"
          src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695044084/jsnns64kvxwhtb4hhzq3.png"
          className="profile-templates-image"
        />
      </div>
      <div className="profile-templates-user">
        <span className="profile-templates-nome">{props.text}</span>
        <span className="profile-templates-email">{props.text1}</span>
      </div>
      <div className="profile-templates-icon">
        <img
          alt="image"
          src="https://api.iconify.design/ci/log-out.svg?color=%23fccf00"
          className="profile-templates-image1"
        />
      </div>
    </div>
  )
}

ProfileTemplates.defaultProps = {
  text1: 'bsantos@flashvolve.com',
  text: 'Bruno Santos',
  rootClassName: '',
}

ProfileTemplates.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ProfileTemplates
