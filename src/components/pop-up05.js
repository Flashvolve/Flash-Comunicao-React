import React from 'react'

import PropTypes from 'prop-types'

import './pop-up05.css'

const PopUp05 = (props) => {
  return (
    <div className={`pop-up05-pop-up01 ${props.rootClassName} `}>
      <div className="pop-up05-barra">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="pop-up05-image"
        />
      </div>
      <div className="pop-up05-logo">
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="pop-up05-image1"
        />
      </div>
      <div className="pop-up05-steps">
        <div className="pop-up05-container">
          <div className="pop-up05-container01"></div>
        </div>
        <div className="pop-up05-container02">
          <div className="pop-up05-container03"></div>
        </div>
        <div className="pop-up05-container04">
          <div className="pop-up05-container05"></div>
        </div>
        <div className="pop-up05-container06">
          <div className="pop-up05-container07"></div>
        </div>
        <div className="pop-up05-container08">
          <div className="pop-up05-container09"></div>
        </div>
        <div className="pop-up05-container10">
          <div className="pop-up05-container11"></div>
        </div>
      </div>
      <div className="pop-up05-texto">
        <div className="pop-up05-container12">
          <h2 className="pop-up05-text">{props.heading}</h2>
          <input
            type="text"
            placeholder="Em números"
            className="pop-up05-textinput input"
          />
        </div>
        <div className="pop-up05-container13">
          <h2 className="pop-up05-text1">{props.heading1}</h2>
          <input
            type="text"
            placeholder="Dias, meses ou ano"
            className="pop-up05-textinput1 input"
          />
        </div>
      </div>
      <div className="pop-up05-boto">
        <button type="button" className="pop-up05-button">
          <span className="pop-up05-text2">{props.text1}</span>
        </button>
      </div>
    </div>
  )
}

PopUp05.defaultProps = {
  rootClassName: '',
  text21: 'de',
  text: 'Pular essa pergunta',
  heading1: 'Em quanto tempo você deseja aumentar essas vendas?',
  image_src:
    'https://api.iconify.design/icon-park-outline/close-one.svg?color=white',
  image_alt1: 'image',
  text2: '9',
  text1: 'Enviar resposta',
  text211: '11',
  image_src1:
    'https://res.cloudinary.com/dd9puomgu/image/upload/v1695736645/dzhofokf4nj4kbtplv3x.svg',
  image_alt: 'image',
  heading: 'Quantas vendas você quer efetuar mensalmente?',
}

PopUp05.propTypes = {
  rootClassName: PropTypes.string,
  text21: PropTypes.string,
  text: PropTypes.string,
  heading1: PropTypes.string,
  image_src: PropTypes.string,
  image_alt1: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text211: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
}

export default PopUp05
