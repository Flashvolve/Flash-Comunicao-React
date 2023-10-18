import React from 'react'

import PropTypes from 'prop-types'

import './pop-up01.css'

const PopUp01 = (props) => {
  return (
    <div className={`pop-up01-pop-up01 ${props.rootClassName} `}>
      <div className="pop-up01-barra">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="pop-up01-image"
        />
      </div>
      <div className="pop-up01-logo">
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="pop-up01-image1"
        />
      </div>
      <div className="pop-up01-steps">
        <div className="pop-up01-container">
          <div className="pop-up01-container01"></div>
        </div>
        <div className="pop-up01-container02">
          <div className="pop-up01-container03"></div>
        </div>
        <div className="pop-up01-container04">
          <div className="pop-up01-container05"></div>
        </div>
        <div className="pop-up01-container06">
          <div className="pop-up01-container07"></div>
        </div>
        <div className="pop-up01-container08">
          <div className="pop-up01-container09"></div>
        </div>
        <div className="pop-up01-container10">
          <div className="pop-up01-container11"></div>
        </div>
      </div>
      <div className="pop-up01-texto">
        <div className="pop-up01-container12">
          <h2 className="pop-up01-text">{props.heading}</h2>
          <input
            type="text"
            placeholder="Insira o nome aqui"
            className="pop-up01-textinput input"
          />
        </div>
        <div className="pop-up01-container13">
          <h2 className="pop-up01-text1">{props.heading1}</h2>
          <input
            type="text"
            placeholder="Principais clientes e nível de senioridade (analista, coordenador, gerente, diretor)"
            className="pop-up01-textinput1 input"
          />
        </div>
      </div>
      <div className="pop-up01-boto">
        <button type="button" className="pop-up01-button">
          <span className="pop-up01-text2">{props.text1}</span>
        </button>
      </div>
    </div>
  )
}

PopUp01.defaultProps = {
  text: 'Pular essa pergunta',
  text2: '1',
  image_src:
    'https://api.iconify.design/icon-park-outline/close-one.svg?color=white',
  text21: 'de',
  text211: '11',
  heading: 'Qual o nome da empresa?',
  image_alt: 'image',
  image_alt1: 'image',
  text3: 'Text',
  rootClassName: '',
  text1: 'Enviar respostas',
  heading1: 'Qual o público ideal?',
  textinput_placeholder: 'placeholder',
  image_src1:
    'https://res.cloudinary.com/dd9puomgu/image/upload/v1695736645/dzhofokf4nj4kbtplv3x.svg',
}

PopUp01.propTypes = {
  text: PropTypes.string,
  text2: PropTypes.string,
  image_src: PropTypes.string,
  text21: PropTypes.string,
  text211: PropTypes.string,
  heading: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt1: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  heading1: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  image_src1: PropTypes.string,
}

export default PopUp01
