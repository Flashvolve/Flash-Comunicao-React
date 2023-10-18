import React from 'react'

import PropTypes from 'prop-types'

import BotoIntegraes from './boto-integraes'
import './contedo-integraes.css'

const ContedoIntegraes = (props) => {
  return (
    <div className={`contedo-integraes-container ${props.rootClassName} `}>
      <div className="contedo-integraes-group">
        <div className="contedo-integraes-header">
          <div className="contedo-integraes-display">
            <span className="contedo-integraes-text titulo">{props.text2}</span>
            <span className="subtitulo">{props.text1}</span>
          </div>
          <div className="contedo-integraes-button">
            <div className="contedo-integraes-actions">
              <div className="contedo-integraes-boto">
                <BotoIntegraes
                  rootClassName="boto-integraes-root-class-name"
                  className=""
                ></BotoIntegraes>
              </div>
            </div>
          </div>
        </div>
        <div className="contedo-integraes-integraes">
          <div className="contedo-integraes-hubspot">
            <div className="contedo-integraes-logo">
              <img
                src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695662933/rch2turvipza9xwka2b9.png"
                className="contedo-integraes-image"
              />
            </div>
            <div className="contedo-integraes-button1">
              <div className="contedo-integraes-container1">
                <span className="textbutton">{props.text3}</span>
              </div>
            </div>
          </div>
          <div className="contedo-integraes-piperdrive">
            <div className="contedo-integraes-logo1">
              <img
                src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695661065/jo3m8neiv2t2tizgq8gi.png"
                className="contedo-integraes-image1"
              />
            </div>
            <div className="contedo-integraes-button2">
              <div className="contedo-integraes-container2">
                <span className="textbutton">{props.text33}</span>
              </div>
            </div>
          </div>
          <div className="contedo-integraes-mailchimp">
            <div className="contedo-integraes-logo2">
              <img
                src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695661065/ymrcnfbhfagk1kroiqeb.png"
                className="contedo-integraes-image2"
              />
            </div>
            <div className="contedo-integraes-button3">
              <div className="contedo-integraes-container3">
                <span className="textbutton">{props.text331}</span>
              </div>
            </div>
          </div>
          <div className="contedo-integraes-piperrun">
            <div className="contedo-integraes-logo3">
              <img
                src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695661066/hwimr4lii3rx2zgpva77.png"
                className="contedo-integraes-image3"
              />
            </div>
            <div className="contedo-integraes-logo4">
              <div className="contedo-integraes-container4">
                <span className="textbutton">{props.text3311}</span>
              </div>
            </div>
          </div>
          <div className="contedo-integraes-rd-station">
            <div className="contedo-integraes-logo5">
              <img
                src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695661066/pqtfcoadpjmmcozip79c.png"
                className="contedo-integraes-image4"
              />
            </div>
            <div className="contedo-integraes-button4">
              <div className="contedo-integraes-container5">
                <span className="textbutton">{props.text33111}</span>
              </div>
            </div>
          </div>
          <div className="contedo-integraes-salesforce">
            <div className="contedo-integraes-logo6">
              <img
                src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695661066/xgp8lvpfa1jefla616ws.png"
                className="contedo-integraes-image5"
              />
            </div>
            <div className="contedo-integraes-button5">
              <div className="contedo-integraes-container6">
                <span className="textbutton">{props.text331111}</span>
              </div>
            </div>
          </div>
          <div className="contedo-integraes-agendor">
            <div className="contedo-integraes-logo7">
              <img
                src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695661067/ewbyeby9lgtrco0wssyr.png"
                className="contedo-integraes-image6"
              />
            </div>
            <div className="contedo-integraes-button6">
              <div className="contedo-integraes-container7">
                <span className="textbutton">{props.text3311111}</span>
              </div>
            </div>
          </div>
          <div className="contedo-integraes-agendor1">
            <div className="contedo-integraes-logo8">
              <img
                src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695661065/ztfi5qkh2xbvuebo4ghq.png"
                className="contedo-integraes-image7"
              />
            </div>
            <div className="contedo-integraes-button7">
              <div className="contedo-integraes-container8">
                <span className="textbutton">{props.text33111111}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ContedoIntegraes.defaultProps = {
  image_alt: 'image',
  text1441: 'Nome e Sobrenome',
  text142311: 'Hoje às 12h45',
  text1522: 'Agendado',
  text2111: 'Monstrando',
  text331111: 'Configurar',
  image_src921: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text1421121: '55 11 98765-4321',
  text14213111: 'exemplo@exemplo.com.br',
  text1442: 'Nome e Sobrenome',
  rootClassName: '',
  text31: 'Configurar',
  text144111: 'Nome e Sobrenome',
  text1421122: '55 11 98765-4321',
  text142132: 'exemplo@exemplo.com.br',
  text1311121311: 'Funil de vendas',
  text1423111: 'Hoje às 12h45',
  text3111: 'Configurar',
  text144: 'Nome e Sobrenome',
  text33111: 'Configurar',
  text142131: 'exemplo@exemplo.com.br',
  text1311121122: 'Terça - 22/08 | 12h45',
  text152111: 'Agendado',
  text131112132: 'Funil de vendas',
  image_src9211: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text1521: 'Agendado',
  text211: 'Monstrando',
  text3311111: 'Configurar',
  text1421312: 'exemplo@exemplo.com.br',
  text1421311: 'exemplo@exemplo.com.br',
  text131112131: 'Funil de vendas',
  text14211212: '55 11 98765-4321',
  text1311121312: 'Funil de vendas',
  text1311121121: 'Terça - 22/08 | 12h45',
  text13111213111: 'Funil de vendas',
  text13112: 'Contatos',
  text31111: 'Configurar',
  text: 'Integraçõ',
  text1311112: 'Status',
  text3: 'Configurar',
  text31111111: 'Configurar',
  image_alt9211: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text14213: 'exemplo@exemplo.com.br',
  image_alt92111: 'image',
  text212: 'de 52 resultados',
  text15211: 'Agendado',
  text311: 'Configurar',
  text1312: 'Clientes',
  text13111211211: 'Terça - 22/08 | 12h45',
  text14211211: '55 11 98765-4321',
  text131112112111: 'Terça - 22/08 | 12h45',
  text142112111: '55 11 98765-4321',
  text142312: 'Hoje às 12h45',
  text13111213: 'Funil de vendas',
  text331: 'Configurar',
  image_src922: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text311111111: 'Configurar',
  text32: 'Configurar',
  text13111211212: 'Terça - 22/08 | 12h45',
  text33: 'Configurar',
  text3311: 'Configurar',
  image_src92111: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src9212: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text33111111: 'Configurar',
  text15212: 'Agendado',
  text321: 'Configurar',
  text142112: '55 11 98765-4321',
  text1423: 'Hoje às 12h45',
  text131112112: 'Terça - 22/08 | 12h45',
  text2: 'Integrações',
  text13111111: 'Reunião',
  text21: 'de 52 resultados',
  image_alt922: 'image',
  text131112: 'Origem',
  text152: 'Agendado',
  text1:
    'Aqui você pode integrar seu banco de dados com as principais plataformas  de gerenciamento de CRM.',
  text14411: 'Nome e Sobrenome',
  image_alt921: 'image',
  image_src92: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text14232: 'Hoje às 12h45',
  image_alt9212: 'image',
  text14231: 'Hoje às 12h45',
  text311111: 'Configurar',
  image_alt92: 'image',
  text3111111: 'Configurar',
  text14412: 'Nome e Sobrenome',
}

ContedoIntegraes.propTypes = {
  image_alt: PropTypes.string,
  text1441: PropTypes.string,
  text142311: PropTypes.string,
  text1522: PropTypes.string,
  text2111: PropTypes.string,
  text331111: PropTypes.string,
  image_src921: PropTypes.string,
  text1421121: PropTypes.string,
  text14213111: PropTypes.string,
  text1442: PropTypes.string,
  rootClassName: PropTypes.string,
  text31: PropTypes.string,
  text144111: PropTypes.string,
  text1421122: PropTypes.string,
  text142132: PropTypes.string,
  text1311121311: PropTypes.string,
  text1423111: PropTypes.string,
  text3111: PropTypes.string,
  text144: PropTypes.string,
  text33111: PropTypes.string,
  text142131: PropTypes.string,
  text1311121122: PropTypes.string,
  text152111: PropTypes.string,
  text131112132: PropTypes.string,
  image_src9211: PropTypes.string,
  text1521: PropTypes.string,
  text211: PropTypes.string,
  text3311111: PropTypes.string,
  text1421312: PropTypes.string,
  text1421311: PropTypes.string,
  text131112131: PropTypes.string,
  text14211212: PropTypes.string,
  text1311121312: PropTypes.string,
  text1311121121: PropTypes.string,
  text13111213111: PropTypes.string,
  text13112: PropTypes.string,
  text31111: PropTypes.string,
  text: PropTypes.string,
  text1311112: PropTypes.string,
  text3: PropTypes.string,
  text31111111: PropTypes.string,
  image_alt9211: PropTypes.string,
  image_src: PropTypes.string,
  text14213: PropTypes.string,
  image_alt92111: PropTypes.string,
  text212: PropTypes.string,
  text15211: PropTypes.string,
  text311: PropTypes.string,
  text1312: PropTypes.string,
  text13111211211: PropTypes.string,
  text14211211: PropTypes.string,
  text131112112111: PropTypes.string,
  text142112111: PropTypes.string,
  text142312: PropTypes.string,
  text13111213: PropTypes.string,
  text331: PropTypes.string,
  image_src922: PropTypes.string,
  text311111111: PropTypes.string,
  text32: PropTypes.string,
  text13111211212: PropTypes.string,
  text33: PropTypes.string,
  text3311: PropTypes.string,
  image_src92111: PropTypes.string,
  image_src9212: PropTypes.string,
  text33111111: PropTypes.string,
  text15212: PropTypes.string,
  text321: PropTypes.string,
  text142112: PropTypes.string,
  text1423: PropTypes.string,
  text131112112: PropTypes.string,
  text2: PropTypes.string,
  text13111111: PropTypes.string,
  text21: PropTypes.string,
  image_alt922: PropTypes.string,
  text131112: PropTypes.string,
  text152: PropTypes.string,
  text1: PropTypes.string,
  text14411: PropTypes.string,
  image_alt921: PropTypes.string,
  image_src92: PropTypes.string,
  text14232: PropTypes.string,
  image_alt9212: PropTypes.string,
  text14231: PropTypes.string,
  text311111: PropTypes.string,
  image_alt92: PropTypes.string,
  text3111111: PropTypes.string,
  text14412: PropTypes.string,
}

export default ContedoIntegraes
