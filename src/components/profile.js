import React from 'react'

import PropTypes from 'prop-types'

import './profile.css'

const Profile = (props) => {
  return (
    <div className={`profile-profile ${props.rootClassName} `}>
      <div className="profile-foto">
        <img
          alt="image"
          src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695044084/jsnns64kvxwhtb4hhzq3.png"
          className="profile-image"
        />
      </div>
      <div className="profile-user">
        <span className="profile-nome">{props.text}</span>
        <span className="profile-nome1">{props.text1}</span>
      </div>
      <div className="profile-icon">
        <img
          alt="image"
          src="https://api.iconify.design/ci/log-out.svg?color=white"
          className="profile-image1"
        />
      </div>
    </div>
  )
}

Profile.defaultProps = {
  text1: 'bsantos@flashvolve.com',
  rootClassName: '',
  text: 'Bruno Santos',
}

Profile.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Profile
