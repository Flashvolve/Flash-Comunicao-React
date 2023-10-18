import React from 'react'

import PropTypes from 'prop-types'

import './login.css'

const Login = (props) => {
  return (
    <div className={`login-container ${props.rootClassName} `}>
      <div className="login-logo">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="login-image"
        />
      </div>
      <div className="login-sectionname">
        <span className="login-text">{props.text}</span>
      </div>
      <div className="login-email">
        <span className="login-text1">{props.text1}</span>
        <input
          type="text"
          placeholder={props.textinput_placeholder}
          className="login-textinput input"
        />
      </div>
      <div className="login-senha">
        <span className="login-text2">{props.text2}</span>
        <input
          type="text"
          placeholder={props.textinput_placeholder1}
          className="login-textinput1 input"
        />
      </div>
      <div className="login-logininfo">
        <div className="login-senhainfo">
          <div className="login-manterconectado">
            <input type="checkbox" className="login-checkbox" />
            <span className="login-text3">{props.text3}</span>
          </div>
          <div className="login-alterarsenha">
            <span className="login-text4">{props.text4}</span>
          </div>
        </div>
      </div>
      <div className="login-botao">
        <div className="login-botaoaction">
          <span className="login-text5">{props.Text}</span>
        </div>
      </div>
    </div>
  )
}

Login.defaultProps = {
  textinput_placeholder1: 'Senha',
  text1: 'E-mail',
  text: 'Login',
  textinput_placeholder: 'E-email',
  text2: 'Senha',
  text3: 'Manter conectado',
  text4: 'Alterar senha',
  image_src:
    'https://res.cloudinary.com/dd9puomgu/image/upload/v1695736645/dzhofokf4nj4kbtplv3x.svg',
  rootClassName: '',
  image_alt: 'image',
  Text: 'Entrar',
}

Login.propTypes = {
  textinput_placeholder1: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  Text: PropTypes.string,
}

export default Login
