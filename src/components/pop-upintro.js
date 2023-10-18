import React from 'react'

import PropTypes from 'prop-types'

import './pop-upintro.css'

const PopUpintro = (props) => {
  return (
    <div className={`pop-upintro-pop-upintro ${props.rootClassName} `}>
      <div className="pop-upintro-barra">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="pop-upintro-image"
        />
      </div>
      <div className="pop-upintro-logo">
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="pop-upintro-image1"
        />
      </div>
      <div className="pop-upintro-texto">
        <h1 className="pop-upintro-text">{props.heading}</h1>
        <span className="pop-upintro-text1">
          <span className="">
            Antes de começarmos, vamos precisar de algumas informações
            importantes sobre o ramo de atuação da sua empresa, informações
            sobre os seus produtos e o potencial público alvo para alimentar a
            nossa inteligência e assim maximizar os resultados e agendamentos. É
            bem rápido! 
          </span>
          <br className=""></br>
          <br className=""></br>
          <span className="">Vamos começar? </span>
          <br className=""></br>
        </span>
      </div>
      <div className="pop-upintro-boto">
        <button type="button" className="pop-upintro-button">
          <span className="pop-upintro-text7">{props.text1}</span>
        </button>
      </div>
    </div>
  )
}

PopUpintro.defaultProps = {
  text: 'Responder depois',
  image_src1:
    'https://res.cloudinary.com/dd9puomgu/image/upload/v1695736645/dzhofokf4nj4kbtplv3x.svg',
  rootClassName: '',
  heading: 'Olá! seja bem-vindo, {{Nome}}!',
  image_alt1: 'image',
  text1: 'Responder questionário',
  image_src:
    'https://api.iconify.design/icon-park-outline/close-one.svg?color=white',
  image_alt: 'image',
}

PopUpintro.propTypes = {
  text: PropTypes.string,
  image_src1: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  image_alt1: PropTypes.string,
  text1: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default PopUpintro
