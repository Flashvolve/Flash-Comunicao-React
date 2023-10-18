import React from 'react'

import PropTypes from 'prop-types'

import './pop-up03.css'

const PopUp03 = (props) => {
  return (
    <div className={`pop-up03-pop-up01 ${props.rootClassName} `}>
      <div className="pop-up03-barra">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="pop-up03-image"
        />
      </div>
      <div className="pop-up03-logo">
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="pop-up03-image1"
        />
      </div>
      <div className="pop-up03-steps">
        <div className="pop-up03-container">
          <div className="pop-up03-container01"></div>
        </div>
        <div className="pop-up03-container02">
          <div className="pop-up03-container03"></div>
        </div>
        <div className="pop-up03-container04">
          <div className="pop-up03-container05"></div>
        </div>
        <div className="pop-up03-container06">
          <div className="pop-up03-container07"></div>
        </div>
        <div className="pop-up03-container08">
          <div className="pop-up03-container09"></div>
        </div>
        <div className="pop-up03-container10">
          <div className="pop-up03-container11"></div>
        </div>
      </div>
      <div className="pop-up03-texto">
        <div className="pop-up03-container12">
          <h2 className="pop-up03-text">{props.heading}</h2>
          <input
            type="text"
            placeholder="Número de pessoas nessa função"
            className="pop-up03-textinput input"
          />
        </div>
        <div className="pop-up03-container13">
          <h2 className="pop-up03-text1">{props.heading1}</h2>
          <input
            type="text"
            placeholder="Total de agendamentos"
            className="pop-up03-textinput1 input"
          />
        </div>
      </div>
      <div className="pop-up03-boto">
        <button type="button" className="pop-up03-button">
          <span className="pop-up03-text2">{props.text1}</span>
        </button>
      </div>
    </div>
  )
}

PopUp03.defaultProps = {
  text21: 'de',
  text: 'Pular essa pergunta',
  heading1:
    'Quantos agendamentos com possíveis clientes vocês fazem mensalmente?',
  image_src:
    'https://api.iconify.design/icon-park-outline/close-one.svg?color=white',
  image_src1:
    'https://res.cloudinary.com/dd9puomgu/image/upload/v1695736645/dzhofokf4nj4kbtplv3x.svg',
  rootClassName: '',
  text211: '11',
  image_alt: 'image',
  text1: 'Enviar respostas',
  heading:
    'Quantas pessoas do seu time hoje são responsáveis pela prospecção de clientes?',
  text2: '5',
  image_alt1: 'image',
}

PopUp03.propTypes = {
  text21: PropTypes.string,
  text: PropTypes.string,
  heading1: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  rootClassName: PropTypes.string,
  text211: PropTypes.string,
  image_alt: PropTypes.string,
  text1: PropTypes.string,
  heading: PropTypes.string,
  text2: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default PopUp03
