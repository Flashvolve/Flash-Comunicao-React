import React from 'react'

import PropTypes from 'prop-types'

import './recuperar-senha.css'

const RecuperarSenha = (props) => {
  return (
    <div className={`recuperar-senha-container ${props.rootClassName} `}>
      <div className="recuperar-senha-logo">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="recuperar-senha-image"
        />
      </div>
      <div className="recuperar-senha-recuperacao">
        <span className="recuperar-senha-text">{props.text}</span>
        <span className="recuperar-senha-text1">{props.text1}</span>
      </div>
      <div className="recuperar-senha-senha">
        <span className="recuperar-senha-text2">{props.text2}</span>
        <input
          type="text"
          placeholder={props.textinput_placeholder}
          className="recuperar-senha-textinput input"
        />
      </div>
      <div className="recuperar-senha-botao">
        <span className="recuperar-senha-text3">{props.Text}</span>
      </div>
    </div>
  )
}

RecuperarSenha.defaultProps = {
  image_alt: 'image',
  image_src:
    'https://res.cloudinary.com/dd9puomgu/image/upload/v1695736645/dzhofokf4nj4kbtplv3x.svg',
  textinput_placeholder: 'exemplo@flashvolve.com',
  text: 'Recuperação de senha',
  rootClassName: '',
  Text: 'Enviar link',
  text1:
    'Para recuperar seu acesso, por gentileza informe seu endereço de email cadastrado na nossa plataforma para enviarmos o link de alteração da senha.',
  text2: 'E-mail',
}

RecuperarSenha.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  Text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
}

export default RecuperarSenha
