import React from 'react'

import PropTypes from 'prop-types'

import './pop-up04.css'

const PopUp04 = (props) => {
  return (
    <div className={`pop-up04-pop-up01 ${props.rootClassName} `}>
      <div className="pop-up04-barra">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="pop-up04-image"
        />
      </div>
      <div className="pop-up04-logo">
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="pop-up04-image1"
        />
      </div>
      <div className="pop-up04-steps">
        <div className="pop-up04-container">
          <div className="pop-up04-container01"></div>
        </div>
        <div className="pop-up04-container02">
          <div className="pop-up04-container03"></div>
        </div>
        <div className="pop-up04-container04">
          <div className="pop-up04-container05"></div>
        </div>
        <div className="pop-up04-container06">
          <div className="pop-up04-container07"></div>
        </div>
        <div className="pop-up04-container08">
          <div className="pop-up04-container09"></div>
        </div>
        <div className="pop-up04-container10">
          <div className="pop-up04-container11"></div>
        </div>
      </div>
      <div className="pop-up04-texto">
        <div className="pop-up04-container12">
          <h2 className="pop-up04-text">{props.heading}</h2>
          <input
            type="text"
            placeholder="Número médio de desistências"
            className="pop-up04-textinput input"
          />
        </div>
        <div className="pop-up04-container13">
          <h2 className="pop-up04-text1">{props.heading1}</h2>
          <input
            type="text"
            placeholder="Em média"
            className="pop-up04-textinput1 input"
          />
        </div>
      </div>
      <div className="pop-up04-boto">
        <button type="button" className="pop-up04-button">
          <span className="pop-up04-text2">{props.text1}</span>
        </button>
      </div>
    </div>
  )
}

PopUp04.defaultProps = {
  image_src:
    'https://api.iconify.design/icon-park-outline/close-one.svg?color=white',
  image_src1:
    'https://res.cloudinary.com/dd9puomgu/image/upload/v1695736645/dzhofokf4nj4kbtplv3x.svg',
  heading1: 'Quantas vendas você efetua mensalmente?',
  heading: 'Desses agendamentos, qual a taxa de não comparecimento?',
  image_alt1: 'image',
  text211: '11',
  text1: 'Enviar respostas',
  image_alt: 'image',
  text21: 'de',
  text2: '7',
  rootClassName: '',
  text: 'Pular essa pergunta',
}

PopUp04.propTypes = {
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  heading1: PropTypes.string,
  heading: PropTypes.string,
  image_alt1: PropTypes.string,
  text211: PropTypes.string,
  text1: PropTypes.string,
  image_alt: PropTypes.string,
  text21: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default PopUp04
