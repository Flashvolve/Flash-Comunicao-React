import React from 'react'

import { Helmet } from 'react-helmet'

import RecuperarSenha from '../components/recuperar-senha'
import './flash-growth-reset.css'

const FlashGrowthReset = (props) => {
  return (
    <div className="flash-growth-reset-container">
      <Helmet>
        <title>Flash-Growth-Reset - Flash - Comunicação</title>
        <meta
          property="og:title"
          content="Flash-Growth-Reset - Flash - Comunicação"
        />
      </Helmet>
      <div className="flash-growth-reset-content-left">
        <div className="flash-growth-reset-container1">
          <img
            alt="image"
            src="https://res.cloudinary.com/dd9puomgu/image/upload/v1694793656/l9mubmkcl3gb4g66m9cb.svg"
            className="flash-growth-reset-image"
          />
        </div>
      </div>
      <div className="flash-growth-reset-content-right">
        <div className="flash-growth-reset-container2">
          <RecuperarSenha></RecuperarSenha>
        </div>
      </div>
    </div>
  )
}

export default FlashGrowthReset
