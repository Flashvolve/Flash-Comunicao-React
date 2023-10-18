import React from 'react'

import PropTypes from 'prop-types'

import './contedo-menu.css'

const ContedoMenu = (props) => {
  return (
    <div className={`contedo-menu-contedo ${props.rootClassName} `}>
      <div id="teste123" className="contedo-menu-container hover-menu-button">
        <button type="button" className="contedo-menu-botao-menu">
          <img
            alt={props.image_alt2}
            src={props.image_src2}
            className="contedo-menu-image"
          />
          <span className="contedo-menu-text MenuBarra">{props.text2}</span>
        </button>
      </div>
      <div id="teste123" className="contedo-menu-container1 hover-menu-button">
        <button type="button" className="contedo-menu-botao-menu1">
          <img
            alt={props.image_alt3}
            src={props.image_src3}
            className="contedo-menu-image1"
          />
          <span className="MenuBarra">{props.text3}</span>
        </button>
      </div>
      <div id="teste123" className="contedo-menu-container2 hover-menu-button">
        <button type="button" className="contedo-menu-botao-menu2">
          <img
            alt={props.image_alt31}
            src="https://api.iconify.design/icon-park-outline/market-analysis.svg?color=white"
            className="contedo-menu-image2"
          />
          <span className="MenuBarra">{props.text31}</span>
        </button>
      </div>
      <div id="teste123" className="contedo-menu-container3 hover-menu-button">
        <button type="button" className="contedo-menu-botao-menu3">
          <img
            alt={props.image_alt4}
            src={props.image_src4}
            className="contedo-menu-image3"
          />
          <span className="MenuBarra">{props.text4}</span>
        </button>
      </div>
      <div id="teste123" className="contedo-menu-container4 hover-menu-button">
        <button type="button" className="contedo-menu-botao-menu4">
          <img
            alt={props.image_alt5}
            src={props.image_src5}
            className="contedo-menu-image4"
          />
          <span className="MenuBarra">{props.text5}</span>
        </button>
      </div>
      <div id="teste123" className="contedo-menu-container5 hover-menu-button">
        <button type="button" className="contedo-menu-botao-menu5">
          <img
            alt={props.image_alt6}
            src={props.image_src6}
            className="contedo-menu-image5"
          />
          <span className="MenuBarra">{props.text6}</span>
        </button>
      </div>
      <div id="teste123" className="contedo-menu-container6 hover-menu-button">
        <button type="button" className="contedo-menu-botao-menu6">
          <img
            alt={props.image_alt7}
            src={props.image_src7}
            className="contedo-menu-image6"
          />
          <span className="MenuBarra">{props.text7}</span>
        </button>
      </div>
      <div id="teste123" className="contedo-menu-container7 hover-menu-button">
        <button type="button" className="contedo-menu-botao-menu7">
          <img
            alt={props.image_alt8}
            src={props.image_src8}
            className="contedo-menu-image7"
          />
          <span className="MenuBarra">{props.text8}</span>
        </button>
      </div>
    </div>
  )
}

ContedoMenu.defaultProps = {
  rootClassName4: '',
  image_alt6: 'image',
  rootClassName3: '',
  text6: 'Conversas',
  text4: 'Segmentação',
  text: 'Segmentação',
  image_alt3: 'image',
  text3: 'Colaboradores',
  image_src3: '/Novos ícones/colaboradores-200h.png',
  rootClassName8: '',
  image_src8: '/Novos ícones/helpdesk-200h.png',
  rootClassName41: '',
  image_src6: '/Novos ícones/chat-200h.png',
  image_alt31: 'image',
  text31: 'Campanhas',
  rootClassName9: '',
  rootClassName: '',
  image_src1: '732bffa7-4955-40e8-a8e2-b60f99dd387d',
  image_alt8: 'image',
  text5: 'Disparos',
  image_src2: '/Novos ícones/dashboard-200h.png',
  image_src: 'dd97e8e5-a3d2-41f9-be75-66d6bdc5ab4c',
  text2: 'Dashboard',
  rootClassName1: '',
  text7: 'Integrações',
  text1: 'Disparos',
  image_src4: '/Novos ícones/segmentacao-200h.png',
  rootClassName6: '',
  rootClassName7: '',
  rootClassName5: '',
  image_alt1: 'image',
  image_alt5: 'image',
  image_alt: 'image',
  text8: 'Helpdesk',
  image_alt2: 'image',
  rootClassName2: '',
  image_src31: 'edf8a28c-c6c7-47f9-8796-c7fe24826088',
  image_src5: '/Novos ícones/disparos-200h.png',
  image_alt7: 'image',
  image_src7: '/Novos ícones/integracoes-200h.png',
  image_alt4: 'image',
}

ContedoMenu.propTypes = {
  rootClassName4: PropTypes.string,
  image_alt6: PropTypes.string,
  rootClassName3: PropTypes.string,
  text6: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  image_alt3: PropTypes.string,
  text3: PropTypes.string,
  image_src3: PropTypes.string,
  rootClassName8: PropTypes.string,
  image_src8: PropTypes.string,
  rootClassName41: PropTypes.string,
  image_src6: PropTypes.string,
  image_alt31: PropTypes.string,
  text31: PropTypes.string,
  rootClassName9: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt8: PropTypes.string,
  text5: PropTypes.string,
  image_src2: PropTypes.string,
  image_src: PropTypes.string,
  text2: PropTypes.string,
  rootClassName1: PropTypes.string,
  text7: PropTypes.string,
  text1: PropTypes.string,
  image_src4: PropTypes.string,
  rootClassName6: PropTypes.string,
  rootClassName7: PropTypes.string,
  rootClassName5: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt5: PropTypes.string,
  image_alt: PropTypes.string,
  text8: PropTypes.string,
  image_alt2: PropTypes.string,
  rootClassName2: PropTypes.string,
  image_src31: PropTypes.string,
  image_src5: PropTypes.string,
  image_alt7: PropTypes.string,
  image_src7: PropTypes.string,
  image_alt4: PropTypes.string,
}

export default ContedoMenu
