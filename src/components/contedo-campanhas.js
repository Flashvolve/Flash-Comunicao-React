import React from 'react'

import PropTypes from 'prop-types'

import Boto from './boto'
import './contedo-campanhas.css'

const ContedoCampanhas = (props) => {
  return (
    <div className={`contedo-campanhas-container ${props.rootClassName} `}>
      <div className="contedo-campanhas-conteudo">
        <div className="contedo-campanhas-header">
          <div className="contedo-campanhas-display">
            <span className="contedo-campanhas-text titulo">Campanhas</span>
            <span className="subtitulo">
              Quinta feira, 03 de agosto de 2023
            </span>
          </div>
          <div className="contedo-campanhas-actions">
            <div className="contedo-campanhas-boto">
              <Boto className=""></Boto>
            </div>
          </div>
        </div>
        <div className="contedo-campanhas-banner">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="contedo-campanhas-image"
          />
        </div>
        <div className="contedo-campanhas-dropcampanha">
          <div className="contedo-campanhas-campanha">
            <img
              alt="image"
              src="https://api.iconify.design/icon-park-outline/market-analysis.svg?color=%23ff9f0d"
              className="contedo-campanhas-image01"
            />
            <input
              type="text"
              placeholder="Todas as campanhas"
              className="contedo-campanhas-input"
            />
            <img
              alt="image"
              src="https://api.iconify.design/mingcute/down-fill.svg?color=%23FF9F0D"
              className="contedo-campanhas-image02"
            />
          </div>
          <div className="contedo-campanhas-pesquisa">
            <img
              alt="image"
              src="https://api.iconify.design/radix-icons/magnifying-glass.svg?color=%23FF9F0D"
              className="contedo-campanhas-image03"
            />
            <input
              type="text"
              placeholder="Pesquisar por número"
              className="contedo-campanhas-input1"
            />
          </div>
          <div className="contedo-campanhas-drop">
            <img
              alt="image"
              src="https://api.iconify.design/lucide/calendar-clock.svg?color=%23FF9F0D"
              className="contedo-campanhas-image04"
            />
            <span className="contedo-campanhas-text02 Optionmenu">
              Pesquisar por data de criação da campanha
            </span>
            <img
              alt="image"
              src="https://api.iconify.design/mingcute/down-fill.svg?color=%23FF9F0D"
              className="contedo-campanhas-image05"
            />
          </div>
        </div>
        <div className="contedo-campanhas-container01">
          <div className="contedo-campanhas-box">
            <div className="contedo-campanhas-container02">
              <span className="contedo-campanhas-text03">{props.text4}</span>
              <span className="contedo-campanhas-text04">{props.text311}</span>
            </div>
            <div className="contedo-campanhas-container03">
              <img
                alt={props.image_alt1}
                src="https://api.iconify.design/icon-park-solid/up-one.svg?color=%2300a89c"
                className="contedo-campanhas-image06"
              />
            </div>
          </div>
          <div className="contedo-campanhas-box1">
            <div className="contedo-campanhas-container04">
              <span className="contedo-campanhas-text05">{props.text42}</span>
              <span className="contedo-campanhas-text06">{props.text3112}</span>
            </div>
            <div className="contedo-campanhas-container05">
              <img
                alt={props.image_alt12}
                src="https://api.iconify.design/icon-park-solid/up-one.svg?color=%2300a89c"
                className="contedo-campanhas-image07"
              />
            </div>
          </div>
          <div className="contedo-campanhas-box2">
            <div className="contedo-campanhas-container06">
              <span className="contedo-campanhas-text07">{props.text41}</span>
              <span className="contedo-campanhas-text08">{props.text3111}</span>
            </div>
            <div className="contedo-campanhas-container07">
              <img
                alt={props.image_alt11}
                src="https://api.iconify.design/icon-park-solid/up-one.svg?color=%2300a89c"
                className="contedo-campanhas-image08"
              />
            </div>
          </div>
          <div className="contedo-campanhas-box3">
            <div className="contedo-campanhas-container08">
              <span className="contedo-campanhas-text09">{props.text411}</span>
              <span className="contedo-campanhas-text10">
                {props.text31111}
              </span>
            </div>
            <div className="contedo-campanhas-container09">
              <img
                alt={props.image_alt111}
                src="https://api.iconify.design/icon-park-solid/up-one.svg?color=%2300a89c"
                className="contedo-campanhas-image09"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ContedoCampanhas.defaultProps = {
  text311: '1478',
  rootClassName1: '',
  image_alt111: 'image',
  text31111: '32%',
  rootClassName11: '',
  text31: 'R$ 41.654,78',
  text4: 'Usuários',
  text41: 'Média por usuário',
  image_src: '/cielo-header-1500w.jpg',
  text611: '40',
  text411: 'Engajamento',
  text42: 'Personalizações',
  text61: 'de',
  image_alt1: 'image',
  image_alt12: 'image',
  text6: '10',
  text3111: '2.56',
  text3112: '3786',
  text312: '36,12%',
  image_alt: 'image',
  rootClassName: '',
  rootClassName111: '',
  image_alt11: 'image',
  text7: 'Próximas reuniões',
}

ContedoCampanhas.propTypes = {
  text311: PropTypes.string,
  rootClassName1: PropTypes.string,
  image_alt111: PropTypes.string,
  text31111: PropTypes.string,
  rootClassName11: PropTypes.string,
  text31: PropTypes.string,
  text4: PropTypes.string,
  text41: PropTypes.string,
  image_src: PropTypes.string,
  text611: PropTypes.string,
  text411: PropTypes.string,
  text42: PropTypes.string,
  text61: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt12: PropTypes.string,
  text6: PropTypes.string,
  text3111: PropTypes.string,
  text3112: PropTypes.string,
  text312: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  rootClassName111: PropTypes.string,
  image_alt11: PropTypes.string,
  text7: PropTypes.string,
}

export default ContedoCampanhas
