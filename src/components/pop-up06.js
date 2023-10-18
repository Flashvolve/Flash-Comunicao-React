import React from 'react'

import PropTypes from 'prop-types'

import './pop-up06.css'

const PopUp06 = (props) => {
  return (
    <div className={`pop-up06-pop-up01 ${props.rootClassName} `}>
      <div className="pop-up06-barra">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="pop-up06-image"
        />
      </div>
      <div className="pop-up06-logo">
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="pop-up06-image1"
        />
      </div>
      <div className="pop-up06-steps">
        <div className="pop-up06-container">
          <div className="pop-up06-container01"></div>
        </div>
        <div className="pop-up06-container02">
          <div className="pop-up06-container03"></div>
        </div>
        <div className="pop-up06-container04">
          <div className="pop-up06-container05"></div>
        </div>
        <div className="pop-up06-container06">
          <div className="pop-up06-container07"></div>
        </div>
        <div className="pop-up06-container08">
          <div className="pop-up06-container09"></div>
        </div>
        <div className="pop-up06-container10">
          <div className="pop-up06-container11"></div>
        </div>
      </div>
      <div className="pop-up06-texto">
        <h2 className="pop-up06-text">{props.heading}</h2>
        <input
          type="text"
          placeholder="Nome(s) da(s) empresa(s)"
          className="pop-up06-textinput input"
        />
      </div>
      <div className="pop-up06-boto">
        <button type="button" className="pop-up06-button">
          <span className="pop-up06-text1">{props.text1}</span>
        </button>
      </div>
    </div>
  )
}

PopUp06.defaultProps = {
  text1: 'Enviar resposta',
  heading: 'Existe alguma empresa que não podemos prospectar?',
  image_src:
    'https://api.iconify.design/icon-park-outline/close-one.svg?color=white',
  image_alt: 'image',
  text2: '11',
  image_src1:
    'https://res.cloudinary.com/dd9puomgu/image/upload/v1695736645/dzhofokf4nj4kbtplv3x.svg',
  image_alt1: 'image',
  text: 'Recomeçar',
  text211: '11',
  rootClassName: '',
  text21: 'de',
}

PopUp06.propTypes = {
  text1: PropTypes.string,
  heading: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text2: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  text: PropTypes.string,
  text211: PropTypes.string,
  rootClassName: PropTypes.string,
  text21: PropTypes.string,
}

export default PopUp06
