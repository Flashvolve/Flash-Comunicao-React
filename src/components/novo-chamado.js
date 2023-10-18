import React from 'react'

import PropTypes from 'prop-types'

import './novo-chamado.css'

const NovoChamado = (props) => {
  return (
    <div className="novo-chamado-pop-upintro">
      <div className="novo-chamado-barra">
        <span className="novo-chamado-novo-chamado">{props.text}</span>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="novo-chamado-image"
        />
      </div>
      <div className="novo-chamado-entrada">
        <span className="novo-chamado-text">{props.text5}</span>
        <div className="novo-chamado-tipo-de-chamado">
          <div className="novo-chamado-container">
            <label className="novo-chamado-text1">{props.text42}</label>
            <select className="novo-chamado-select Content">
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
        </div>
        <textarea
          placeholder={props.textarea_placeholder}
          className="novo-chamado-textarea textarea"
        ></textarea>
        <div className="novo-chamado-urgencia">
          <div className="novo-chamado-urgente">
            <input type="radio" name="radio" />
            <span className="novo-chamado-text2">{props.text7}</span>
          </div>
          <div className="novo-chamado-pouco-urgente">
            <input type="radio" name="radio" />
            <span className="novo-chamado-text3">{props.text711}</span>
          </div>
          <div className="novo-chamado-nao-urgente">
            <input type="radio" name="radio" />
            <span className="novo-chamado-text4">{props.text71}</span>
          </div>
        </div>
        <div className="novo-chamado-boto">
          <button type="button" className="novo-chamado-button">
            <span className="novo-chamado-text5">{props.text1}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

NovoChamado.defaultProps = {
  text2: 'Text',
  text: 'Novo chamado',
  image_alt: 'image',
  text4: 'Qual a urgência?',
  text1: 'Abrir chamado',
  heading: 'Olá! seja bem-vindo, {{Nome}}!',
  text42: 'Tipo de chamado',
  text6: 'Text',
  image_src1:
    'https://res.cloudinary.com/dd9puomgu/image/upload/v1695736645/dzhofokf4nj4kbtplv3x.svg',
  text71: 'Não urgente',
  image_alt1: 'image',
  image_src:
    'https://api.iconify.design/icon-park-outline/close-one.svg?color=white',
  text5:
    'Por gentleza, selecione o tipo de chamado que deseja abrir e descreva, em poucas palavras, o que está acontecendo.',
  text7: 'Urgente',
  rootClassName: '',
  text41: 'Qual a urgência?',
  text711: 'Pouco urgente',
  text3: 'Qual o motivo da abertura do chamado?',
  textarea_placeholder: 'Descreva aqui qual o seu problema',
}

NovoChamado.propTypes = {
  text2: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  text4: PropTypes.string,
  text1: PropTypes.string,
  heading: PropTypes.string,
  text42: PropTypes.string,
  text6: PropTypes.string,
  image_src1: PropTypes.string,
  text71: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src: PropTypes.string,
  text5: PropTypes.string,
  text7: PropTypes.string,
  rootClassName: PropTypes.string,
  text41: PropTypes.string,
  text711: PropTypes.string,
  text3: PropTypes.string,
  textarea_placeholder: PropTypes.string,
}

export default NovoChamado
