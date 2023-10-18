import React from 'react'

import PropTypes from 'prop-types'

import './contedo-settings.css'

const ContedoSettings = (props) => {
  return (
    <div className={`contedo-settings-container ${props.rootClassName} `}>
      <div className="contedo-settings-group">
        <div className="contedo-settings-header">
          <div className="contedo-settings-display">
            <span className="contedo-settings-text titulo">{props.text2}</span>
          </div>
        </div>
        <div className="contedo-settings-configuraes">
          <div className="contedo-settings-box">
            <div className="contedo-settings-foto">
              <img
                alt="image"
                src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695044084/jsnns64kvxwhtb4hhzq3.png"
                className="contedo-settings-image"
              />
              <div className="contedo-settings-mudar-foto">
                <img
                  alt="image"
                  src="https://api.iconify.design/zondicons/camera.svg?color=white"
                  className="contedo-settings-image01"
                />
              </div>
            </div>
            <div className="contedo-settings-user-info">
              <div className="contedo-settings-container01">
                <span className="contedo-settings-text01">{props.text}</span>
                <span className="contedo-settings-text02">{props.text4}</span>
              </div>
            </div>
            <div className="contedo-settings-container02">
              <div className="contedo-settings-nome">
                <div className="contedo-settings-label">
                  <span className="contedo-settings-text03">{props.text5}</span>
                </div>
                <div className="contedo-settings-input">
                  <span className="contedo-settings-text04">{props.text6}</span>
                </div>
              </div>
              <div className="contedo-settings-sobrenome">
                <div className="contedo-settings-label1">
                  <span className="contedo-settings-text05">
                    {props.text52}
                  </span>
                </div>
                <div className="contedo-settings-input1">
                  <span className="contedo-settings-text06">
                    {props.text61}
                  </span>
                </div>
              </div>
              <div className="contedo-settings-email">
                <div className="contedo-settings-label2">
                  <span className="contedo-settings-text07">
                    {props.text521}
                  </span>
                </div>
                <div className="contedo-settings-input2">
                  <span className="contedo-settings-text08">
                    {props.text62}
                  </span>
                </div>
              </div>
              <div className="contedo-settings-telefone">
                <div className="contedo-settings-label3">
                  <span className="contedo-settings-text09">
                    {props.text5211}
                  </span>
                </div>
                <div className="contedo-settings-input3">
                  <span className="contedo-settings-text10">
                    {props.text63}
                  </span>
                </div>
              </div>
              <div className="contedo-settings-alterar-senha">
                <div className="contedo-settings-conteudo">
                  <img
                    alt={props.image_alt}
                    src="https://api.iconify.design/solar/password-outline.svg?color=%23737373"
                    className="contedo-settings-image02"
                  />
                  <span className="contedo-settings-text11">
                    {props.text52111}
                  </span>
                </div>
              </div>
              <div className="contedo-settings-button">
                <div className="contedo-settings-buttonset">
                  <div className="contedo-settings-buttonaction">
                    <span className="contedo-settings-text12">
                      {props.text7}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contedo-settings-container03">
            <div className="contedo-settings-reunioes">
              <div className="contedo-settings-lead">
                <span className="contedo-settings-text13 dashlead">
                  {props.text71}
                </span>
              </div>
              <div className="contedo-settings-container04">
                <div className="contedo-settings-reuniao1">
                  <div className="contedo-settings-image03">
                    <img
                      alt="image"
                      src="https://api.iconify.design/mdi/bell.svg?color=%23dc0f37"
                      className="contedo-settings-image04"
                    />
                  </div>
                  <div className="contedo-settings-cliente1">
                    <span className="contedo-settings-text14 dashlead">
                      Reunião Libbs
                    </span>
                    <span className="contedo-settings-text15 subtitulo">
                      09/08/2023 | Das 9h às 10h | online
                    </span>
                    <span className="contedo-settings-text16">
                      {props.text8}
                    </span>
                  </div>
                </div>
                <div className="contedo-settings-reuniao11">
                  <div className="contedo-settings-image05">
                    <img
                      alt="image"
                      src="https://api.iconify.design/mdi/bell.svg?color=%23dc0f37"
                      className="contedo-settings-image06"
                    />
                  </div>
                  <div className="contedo-settings-cliente11">
                    <span className="contedo-settings-text17 dashlead">
                      Reunião Libbs
                    </span>
                    <span className="contedo-settings-text18 subtitulo">
                      09/08/2023 | Das 9h às 10h | online
                    </span>
                    <span className="contedo-settings-text19">
                      {props.text86}
                    </span>
                  </div>
                </div>
                <div className="contedo-settings-reuniao12">
                  <div className="contedo-settings-image07">
                    <img
                      alt="image"
                      src="https://api.iconify.design/mdi/bell.svg?color=%23dc0f37"
                      className="contedo-settings-image08"
                    />
                  </div>
                  <div className="contedo-settings-cliente12">
                    <span className="contedo-settings-text20 dashlead">
                      Reunião Libbs
                    </span>
                    <span className="contedo-settings-text21 subtitulo">
                      09/08/2023 | Das 9h às 10h | online
                    </span>
                    <span className="contedo-settings-text22">
                      {props.text85}
                    </span>
                  </div>
                </div>
                <div className="contedo-settings-reuniao13">
                  <div className="contedo-settings-image09">
                    <img
                      alt="image"
                      src="https://api.iconify.design/mdi/bell.svg?color=%23dc0f37"
                      className="contedo-settings-image10"
                    />
                  </div>
                  <div className="contedo-settings-cliente13">
                    <span className="contedo-settings-text23 dashlead">
                      Reunião Libbs
                    </span>
                    <span className="contedo-settings-text24 subtitulo">
                      09/08/2023 | Das 9h às 10h | online
                    </span>
                    <span className="contedo-settings-text25">
                      {props.text851}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contedo-settings-container05">
              <div className="contedo-settings-content-left">
                <div className="contedo-settings-container06">
                  <span className="contedo-settings-text26">
                    {props.text92}
                  </span>
                  <span className="contedo-settings-text27">
                    {props.text91}
                  </span>
                  <span className="contedo-settings-text28">{props.text9}</span>
                </div>
                <div className="contedo-settings-container07"></div>
                <div className="contedo-settings-container08">
                  <span className="contedo-settings-text29">
                    {props.text922}
                  </span>
                  <span className="contedo-settings-text30">
                    {props.text912}
                  </span>
                  <span className="contedo-settings-text31">
                    {props.text94}
                  </span>
                </div>
              </div>
              <div className="contedo-settings-timeline">
                <div className="contedo-settings-step1">
                  <div className="contedo-settings-container09"></div>
                  <div className="contedo-settings-container10"></div>
                </div>
                <div className="contedo-settings-step2">
                  <div className="contedo-settings-container11"></div>
                  <div className="contedo-settings-container12"></div>
                </div>
                <div className="contedo-settings-step3">
                  <div className="contedo-settings-container13"></div>
                  <div className="contedo-settings-container14"></div>
                </div>
                <div className="contedo-settings-step4">
                  <div className="contedo-settings-container15"></div>
                </div>
              </div>
              <div className="contedo-settings-content-right">
                <div className="contedo-settings-container16"></div>
                <div className="contedo-settings-container17">
                  <span className="contedo-settings-text32">
                    {props.text9211}
                  </span>
                  <span className="contedo-settings-text33">
                    {props.text9111}
                  </span>
                  <span className="contedo-settings-text34">
                    {props.text931}
                  </span>
                </div>
                <div className="contedo-settings-container18"></div>
                <div className="contedo-settings-container19">
                  <span className="contedo-settings-text35">
                    {props.text921}
                  </span>
                  <span className="contedo-settings-text36">
                    {props.text911}
                  </span>
                  <span className="contedo-settings-text37">
                    {props.text93}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ContedoSettings.defaultProps = {
  text52: 'Sobrenome',
  text62: 'exemplo@flashvolve.com',
  text631: '55 11 98765-4321',
  text81: 'Desmarcar',
  text911: 'Título do evento',
  image_alt1: 'image',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text9:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  text3: 'Configurar',
  text4: 'exemploa@flashvolve.com',
  rootClassName11: '',
  text831: 'Desmarcar',
  image_alt3: 'image',
  text64: '168',
  text5211: 'Telefone',
  text83: 'Desmarcar',
  text6: 'Nome',
  text851: 'Desmarcar',
  text71: 'Próximas reuniões',
  text84: 'Desmarcar',
  text931:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  text: 'Nome e Sobrenome',
  text33: 'Configurar',
  text63: '55 11 98765-4321',
  text86: 'Desmarcar',
  text91: 'Título do evento',
  text33111: 'Configurar',
  text2: 'Configurações da conta',
  text521111: 'Alterar senha',
  text92: '12 de agosto',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text94:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  text9111: 'Título do evento',
  text1:
    'Aqui você pode integrar seu banco de dados com as principais plataformas  de gerenciamento de CRM.',
  text7: 'Salvar alterações',
  image_alt: 'image',
  text82: 'Desmarcar',
  text51: 'Nome e Sobrenome',
  image_src2: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text912: 'Título do evento',
  text331111: 'Configurar',
  text811: 'Desmarcar',
  text8: 'Desmarcar',
  text9211: '12 de agosto',
  text521: 'E-mail',
  rootClassName: '',
  text93:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  text922: '12 de agosto',
  text85: 'Desmarcar',
  text41: 'exemploa@flashvolve.com',
  text52111: 'Alterar senha',
  text3311111: 'Configurar',
  text921: '12 de agosto',
  text3311: 'Configurar',
  text61: 'Sobrenome',
  text6111: '240',
  text611: 'de',
  text5: 'Nome',
  image_alt2: 'image',
  text331: 'Configurar',
  text33111111: 'Configurar',
}

ContedoSettings.propTypes = {
  text52: PropTypes.string,
  text62: PropTypes.string,
  text631: PropTypes.string,
  text81: PropTypes.string,
  text911: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  text9: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  rootClassName11: PropTypes.string,
  text831: PropTypes.string,
  image_alt3: PropTypes.string,
  text64: PropTypes.string,
  text5211: PropTypes.string,
  text83: PropTypes.string,
  text6: PropTypes.string,
  text851: PropTypes.string,
  text71: PropTypes.string,
  text84: PropTypes.string,
  text931: PropTypes.string,
  text: PropTypes.string,
  text33: PropTypes.string,
  text63: PropTypes.string,
  text86: PropTypes.string,
  text91: PropTypes.string,
  text33111: PropTypes.string,
  text2: PropTypes.string,
  text521111: PropTypes.string,
  text92: PropTypes.string,
  image_src: PropTypes.string,
  text94: PropTypes.string,
  text9111: PropTypes.string,
  text1: PropTypes.string,
  text7: PropTypes.string,
  image_alt: PropTypes.string,
  text82: PropTypes.string,
  text51: PropTypes.string,
  image_src2: PropTypes.string,
  text912: PropTypes.string,
  text331111: PropTypes.string,
  text811: PropTypes.string,
  text8: PropTypes.string,
  text9211: PropTypes.string,
  text521: PropTypes.string,
  rootClassName: PropTypes.string,
  text93: PropTypes.string,
  text922: PropTypes.string,
  text85: PropTypes.string,
  text41: PropTypes.string,
  text52111: PropTypes.string,
  text3311111: PropTypes.string,
  text921: PropTypes.string,
  text3311: PropTypes.string,
  text61: PropTypes.string,
  text6111: PropTypes.string,
  text611: PropTypes.string,
  text5: PropTypes.string,
  image_alt2: PropTypes.string,
  text331: PropTypes.string,
  text33111111: PropTypes.string,
}

export default ContedoSettings
