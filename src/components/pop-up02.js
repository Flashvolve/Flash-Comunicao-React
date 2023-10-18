import React from 'react'

import PropTypes from 'prop-types'

import './pop-up02.css'

const PopUp02 = (props) => {
  return (
    <div className={`pop-up02-pop-up01 ${props.rootClassName} `}>
      <div className="pop-up02-barra">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="pop-up02-image"
        />
      </div>
      <div className="pop-up02-logo">
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="pop-up02-image1"
        />
      </div>
      <div className="pop-up02-steps">
        <div className="pop-up02-container">
          <div className="pop-up02-container01"></div>
        </div>
        <div className="pop-up02-container02">
          <div className="pop-up02-container03"></div>
        </div>
        <div className="pop-up02-container04">
          <div className="pop-up02-container05"></div>
        </div>
        <div className="pop-up02-container06">
          <div className="pop-up02-container07"></div>
        </div>
        <div className="pop-up02-container08">
          <div className="pop-up02-container09"></div>
        </div>
        <div className="pop-up02-container10">
          <div className="pop-up02-container11"></div>
        </div>
      </div>
      <div className="pop-up02-texto">
        <div className="pop-up02-container12">
          <h2 className="pop-up02-text">{props.heading}</h2>
          <input
            type="text"
            placeholder="Qual é o carro chefe da empresa?"
            className="pop-up02-textinput input"
          />
        </div>
        <div className="pop-up02-container13">
          <h2 className="pop-up02-text1">{props.heading1}</h2>
          <input
            type="text"
            placeholder="Valor em reais"
            className="pop-up02-textinput1 input"
          />
        </div>
      </div>
      <div className="pop-up02-boto">
        <button type="button" className="pop-up02-button">
          <span className="pop-up02-text2">{props.text1}</span>
        </button>
      </div>
    </div>
  )
}

PopUp02.defaultProps = {
  image_alt1: 'image',
  text: 'Pular essa pergunta',
  image_src:
    'https://api.iconify.design/icon-park-outline/close-one.svg?color=white',
  heading1: 'Qual o valor do ticket médio de vocês?',
  text1: 'Enviar respostas',
  text211: '11',
  text2: '3',
  heading: 'Qual produto é o mais vendido?',
  image_alt: 'image',
  text21: 'de',
  rootClassName: '',
  image_src1:
    'https://res.cloudinary.com/dd9puomgu/image/upload/v1695736645/dzhofokf4nj4kbtplv3x.svg',
}

PopUp02.propTypes = {
  image_alt1: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  heading1: PropTypes.string,
  text1: PropTypes.string,
  text211: PropTypes.string,
  text2: PropTypes.string,
  heading: PropTypes.string,
  image_alt: PropTypes.string,
  text21: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src1: PropTypes.string,
}

export default PopUp02
