import React from 'react'

import PropTypes from 'prop-types'

import './acompanhar-chamado.css'

const AcompanharChamado = (props) => {
  return (
    <div className={`acompanhar-chamado-pop-upintro ${props.rootClassName} `}>
      <div className="acompanhar-chamado-chamados">
        <div className="acompanhar-chamado-chamado">
          <h3 className="acompanhar-chamado-text titulo">{props.heading}</h3>
          <div className="acompanhar-chamado-statusset">
            <span className="acompanhar-chamado-text01 textbutton">
              {props.text1524}
            </span>
          </div>
        </div>
        <div className="acompanhar-chamado-voltar">
          <div className="acompanhar-chamado-container">
            <button type="button" className="acompanhar-chamado-button">
              <img
                alt="https://api.iconify.design/material-symbols/arrow-back-rounded.svg?color=%23dc0f37"
                src="https://api.iconify.design/material-symbols/arrow-back-rounded.svg?color=white"
                className="acompanhar-chamado-image"
              />
              <span className="acompanhar-chamado-text02">{props.text11}</span>
            </button>
          </div>
        </div>
      </div>
      <div className="acompanhar-chamado-linha"></div>
      <div className="acompanhar-chamado-container1">
        <div className="acompanhar-chamado-chat">
          <div className="acompanhar-chamado-mensagem-enviada">
            <div className="acompanhar-chamado-dev-flash-growth">
              <div className="acompanhar-chamado-container2">
                <img
                  alt="image"
                  src="https://res.cloudinary.com/dd9puomgu/image/upload/v1696944693/fxpt7oz7c4j0extebst1.svg"
                  className="acompanhar-chamado-image1"
                />
                <span className="acompanhar-chamado-text03">{props.text2}</span>
              </div>
              <span className="acompanhar-chamado-text04">{props.text3}</span>
            </div>
            <div className="acompanhar-chamado-mensagem-dev">
              <span className="acompanhar-chamado-text05">{props.text4}</span>
            </div>
            <div className="acompanhar-chamado-linha1"></div>
            <div className="acompanhar-chamado-status-mensagem">
              <span className="acompanhar-chamado-text06">{props.text41}</span>
            </div>
          </div>
        </div>
        <div className="acompanhar-chamado-status">
          <div className="acompanhar-chamado-timeline">
            <div className="acompanhar-chamado-container3">
              <div className="acompanhar-chamado-dot"></div>
              <div className="acompanhar-chamado-container4"></div>
            </div>
            <div className="acompanhar-chamado-container5">
              <div className="acompanhar-chamado-dot1"></div>
              <div className="acompanhar-chamado-container6"></div>
            </div>
            <div className="acompanhar-chamado-container7">
              <div className="acompanhar-chamado-dot2"></div>
            </div>
          </div>
          <div className="acompanhar-chamado-status1 acompanhar-chamado-status1">
            <div>
              <span className="acompanhar-chamado-text07">{props.text6}</span>
              <span className="acompanhar-chamado-text08">{props.text8}</span>
            </div>
            <div className="acompanhar-chamado-status2">
              <span className="acompanhar-chamado-text09">{props.text63}</span>
              <span className="acompanhar-chamado-text10">{props.text83}</span>
            </div>
            <div className="acompanhar-chamado-status3">
              <span className="acompanhar-chamado-text11">{props.text631}</span>
              <span className="acompanhar-chamado-text12">{props.text831}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

AcompanharChamado.defaultProps = {
  text61: '{nome} {sobrenome}',
  text5:
    'Por gentileza, selecione o tipo de chamado que deseja abrir e descreva, em poucas palavras, o que está acontecendo.',
  heading1: 'Chamado 42928',
  image_alt: 'image',
  image_src:
    'https://api.iconify.design/icon-park-outline/close-one.svg?color=white',
  text1: 'Abrir chamado',
  image_src3: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text821: 'Em análise às 10h48',
  text311: '10 de out. 10h48',
  text7: 'Urgente',
  text2: 'Suporte Flash [Growth]',
  text11: 'Voltar',
  text4111:
    'O seu chamado foi recebido pelo time de desenvolvedores às 10h48 e entrou na fila de análise. Em breve retornaremos com a solução.',
  text41:
    'O seu chamado foi recebido pelo time de desenvolvedores às 10h48 e entrou na fila de análise. Em breve retornaremos com a solução.',
  textarea_placeholder: 'Descreva aqui qual o seu problema',
  text63: 'Suporte Flash [Growth]',
  text431:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  text81: 'Abriu ticket de suporte às 10h36',
  text31: '10 de out. 10h48',
  heading: 'Chamado 42928',
  text6: '{nome} {sobrenome}',
  text8: 'Abriu ticket de suporte às 10h36',
  rootClassName1: '',
  text83: 'Mudou o status do chamado para "Em análise" às 10h48',
  text82: 'Em análise às 10h48',
  text411:
    'O seu chamado foi recebido pelo time de desenvolvedores às 10h48 e entrou na fila de análise. Em breve retornaremos com a solução.',
  text43:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  text211: 'Suporte Flash [Growth]',
  text15241: 'Aberto',
  image_alt2: 'image',
  rootClassName: '',
  text4:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  image_src1: '3e8475b4-c786-4069-bdc8-cabac908f3e4',
  text21: 'Suporte Flash [Growth]',
  text42: 'Tipo de chamado',
  text62: 'Suporte Flash [Growth]',
  text631: '{nome} {sobrenome}',
  text621: 'Suporte Flash [Growth]',
  image_src2: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text: 'Acompanhar chamado',
  image_alt1: 'image',
  text711: 'Pouco urgente',
  image_alt3: 'image',
  text831: 'Abriu ticket de suporte às 10h36',
  text1524: 'Em análise',
  text71: 'Não urgente',
  text3: '10 de out. 10h48',
}

AcompanharChamado.propTypes = {
  text61: PropTypes.string,
  text5: PropTypes.string,
  heading1: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text1: PropTypes.string,
  image_src3: PropTypes.string,
  text821: PropTypes.string,
  text311: PropTypes.string,
  text7: PropTypes.string,
  text2: PropTypes.string,
  text11: PropTypes.string,
  text4111: PropTypes.string,
  text41: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  text63: PropTypes.string,
  text431: PropTypes.string,
  text81: PropTypes.string,
  text31: PropTypes.string,
  heading: PropTypes.string,
  text6: PropTypes.string,
  text8: PropTypes.string,
  rootClassName1: PropTypes.string,
  text83: PropTypes.string,
  text82: PropTypes.string,
  text411: PropTypes.string,
  text43: PropTypes.string,
  text211: PropTypes.string,
  text15241: PropTypes.string,
  image_alt2: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  image_src1: PropTypes.string,
  text21: PropTypes.string,
  text42: PropTypes.string,
  text62: PropTypes.string,
  text631: PropTypes.string,
  text621: PropTypes.string,
  image_src2: PropTypes.string,
  text: PropTypes.string,
  image_alt1: PropTypes.string,
  text711: PropTypes.string,
  image_alt3: PropTypes.string,
  text831: PropTypes.string,
  text1524: PropTypes.string,
  text71: PropTypes.string,
  text3: PropTypes.string,
}

export default AcompanharChamado
