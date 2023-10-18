import React from 'react'

import PropTypes from 'prop-types'

import Boto from './boto'
import './contedo-dashboard.css'

const ContedoDashboard = (props) => {
  return (
    <div className={`contedo-dashboard-container ${props.rootClassName} `}>
      <div className="contedo-dashboard-conteudo">
        <div className="contedo-dashboard-header">
          <div className="contedo-dashboard-display">
            <span className="contedo-dashboard-text titulo">Dashboard</span>
            <span className="subtitulo">
              Quinta feira, 03 de agosto de 2023
            </span>
          </div>
          <div className="contedo-dashboard-actions">
            <div className="contedo-dashboard-boto">
              <Boto className=""></Boto>
            </div>
          </div>
        </div>
        <div className="contedo-dashboard-conteudo1">
          <div className="contedo-dashboard-boas-vindas">
            <h2 className="contedo-dashboard-text02">{props.heading}</h2>
            <span className="contedo-dashboard-text03">{props.text5}</span>
          </div>
          <div className="contedo-dashboard-kp-is">
            <div className="contedo-dashboard-container01">
              <div className="contedo-dashboard-box">
                <div className="contedo-dashboard-container02">
                  <div className="contedo-dashboard-info">
                    <span className="contedo-dashboard-text04">
                      {props.text4}
                    </span>
                    <span className="contedo-dashboard-text05">
                      {props.text311}
                    </span>
                  </div>
                  <div className="contedo-dashboard-desempenho">
                    <img
                      alt={props.image_alt1}
                      src="https://api.iconify.design/icon-park-solid/up-one.svg?color=%2300a89c"
                      className="contedo-dashboard-image"
                    />
                  </div>
                </div>
                <div className="contedo-dashboard-container03"></div>
              </div>
              <div className="contedo-dashboard-box1">
                <div className="contedo-dashboard-container04">
                  <div className="contedo-dashboard-info1">
                    <span className="contedo-dashboard-text06">
                      {props.text43}
                    </span>
                    <span className="contedo-dashboard-text07">
                      {props.text3113}
                    </span>
                  </div>
                  <div className="contedo-dashboard-desempenho1">
                    <img
                      alt={props.image_alt13}
                      src="https://api.iconify.design/icon-park-solid/up-one.svg?color=%2300a89c"
                      className="contedo-dashboard-image1"
                    />
                  </div>
                </div>
                <div className="contedo-dashboard-container05"></div>
              </div>
            </div>
            <div className="contedo-dashboard-container06">
              <div className="contedo-dashboard-box2">
                <div className="contedo-dashboard-container07">
                  <div className="contedo-dashboard-info2">
                    <span className="contedo-dashboard-text08">
                      {props.text431}
                    </span>
                    <span className="contedo-dashboard-text09">
                      {props.text31131}
                    </span>
                  </div>
                  <div className="contedo-dashboard-desempenho2">
                    <img
                      alt={props.image_alt131}
                      src="https://api.iconify.design/icon-park-solid/up-one.svg?color=%2300a89c"
                      className="contedo-dashboard-image2"
                    />
                  </div>
                </div>
                <div className="contedo-dashboard-container08"></div>
              </div>
              <div className="contedo-dashboard-box3">
                <div className="contedo-dashboard-container09">
                  <div className="contedo-dashboard-info3">
                    <span className="contedo-dashboard-text10">
                      {props.text4311}
                    </span>
                    <span className="contedo-dashboard-text11">
                      {props.text311311}
                    </span>
                  </div>
                  <div className="contedo-dashboard-desempenho3">
                    <img
                      alt={props.image_alt1311}
                      src="https://api.iconify.design/icon-park-solid/up-one.svg?color=%2300a89c"
                      className="contedo-dashboard-image3"
                    />
                  </div>
                </div>
                <div className="contedo-dashboard-container10"></div>
              </div>
            </div>
          </div>
          <div className="contedo-dashboard-disparos">
            <div className="contedo-dashboard-disparos1">
              <div className="contedo-dashboard-info4">
                <span className="contedo-dashboard-text12">
                  {props.text432}
                </span>
                <span className="contedo-dashboard-text13">
                  {props.text31132}
                </span>
              </div>
              <div className="contedo-dashboard-leads">
                <div className="contedo-dashboard-novos">
                  <span className="contedo-dashboard-text14">
                    {props.text311322}
                  </span>
                  <span className="contedo-dashboard-text15">
                    {props.text4322}
                  </span>
                </div>
                <div className="contedo-dashboard-retornos">
                  <span className="contedo-dashboard-text16">
                    {props.text3113221}
                  </span>
                  <span className="contedo-dashboard-text17">
                    {props.text43221}
                  </span>
                </div>
                <div className="contedo-dashboard-personalizacoes">
                  <span className="contedo-dashboard-text18">
                    {props.text31132211}
                  </span>
                  <span className="contedo-dashboard-text19">
                    {props.text432211}
                  </span>
                </div>
              </div>
              <div className="contedo-dashboard-grafico">
                <img
                  alt={props.image_alt2}
                  src={props.image_src2}
                  className="contedo-dashboard-image4"
                />
              </div>
            </div>
            <div className="contedo-dashboard-noticias">
              <div className="contedo-dashboard-info5">
                <span className="contedo-dashboard-text20">
                  {props.text4321}
                </span>
              </div>
              <div className="contedo-dashboard-container11">
                <div className="contedo-dashboard-news">
                  <div className="contedo-dashboard-timeline">
                    <div className="contedo-dashboard-point">
                      <img
                        alt={props.image_alt3}
                        src="https://api.iconify.design/tabler/point-filled.svg?color=white"
                        className="contedo-dashboard-image5"
                      />
                    </div>
                    <div className="contedo-dashboard-line"></div>
                  </div>
                  <div className="contedo-dashboard-container12">
                    <span className="textboxlead">{props.text10}</span>
                    <span className="Textbox">{props.text101}</span>
                    <span className="contedo-dashboard-text23 Textboxinfo">
                      {props.text1011}
                    </span>
                  </div>
                </div>
                <div className="contedo-dashboard-news1">
                  <div className="contedo-dashboard-timeline1">
                    <div className="contedo-dashboard-point1">
                      <img
                        alt={props.image_alt33}
                        src="https://api.iconify.design/tabler/point-filled.svg?color=white"
                        className="contedo-dashboard-image6"
                      />
                    </div>
                    <div className="contedo-dashboard-line1"></div>
                  </div>
                  <div className="contedo-dashboard-container13">
                    <span className="textboxlead">{props.text104}</span>
                    <span className="Textbox">{props.text1014}</span>
                    <span className="contedo-dashboard-text26 Textboxinfo">
                      {props.text10113}
                    </span>
                  </div>
                </div>
                <div className="contedo-dashboard-news2">
                  <div className="contedo-dashboard-timeline2">
                    <div className="contedo-dashboard-point2">
                      <img
                        alt={props.image_alt331}
                        src="https://api.iconify.design/tabler/point-filled.svg?color=white"
                        className="contedo-dashboard-image7"
                      />
                    </div>
                    <div className="contedo-dashboard-line2"></div>
                  </div>
                  <div className="contedo-dashboard-container14">
                    <span className="textboxlead">{props.text1041}</span>
                    <span className="Textbox">{props.text10141}</span>
                    <span className="contedo-dashboard-text29 Textboxinfo">
                      {props.text101131}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ContedoDashboard.defaultProps = {
  text9: '2836',
  text2: 'Últimos 3 meses: 01 de maio, 2023 - 01 de agosto, 2023',
  text915: 'Réplicas',
  text43221: '17.152',
  image_alt2: 'image',
  image_alt3: 'image',
  text31132: 'Alcance das mensagens de campanhas no ar',
  text4: 'Usuários',
  text811: '10/08/2023 | Das 9h às 12h | online',
  text10111: '{{data_publicacao}}',
  heading: 'Olá, 👋',
  text4322: '17.952',
  text4311: 'Engajamento',
  text94: '39,3%',
  text411: 'Engajamento',
  text3113221: 'Retornos',
  text10: 'Empresa ABC realiza treinamentos para prevenção de acidentes',
  text431: 'Média por usuário',
  image_alt1: 'image',
  text113: 'Agendamentos',
  text81: '09/08/2023 | Das 9h às 10h | online',
  text311: '1478',
  image_alt: 'image',
  text611: '40',
  rootClassName: '',
  text114: 'Atualizado hoje, às 10h56',
  text1012:
    'A empresa ABC está promovendo treinamentos para seus funcionários com o objetivo de prevenir acidentes de trabalho. Os treinamentos abordam temas como segurança em altura, uso de equipamentos de proteção e primeiros socorros.',
  text432: 'Disparos',
  text31111: '32%',
  text3112: '3786',
  text61: 'de',
  text432211: '9.365',
  rootClassName11: '',
  rootClassName111: '',
  image_alt331: 'image',
  text96: '1,7%',
  image_alt32: 'image',
  text1014: 'test',
  text31131: '2.56',
  text3111: '2.56',
  text101131: '{{data_publicacao}}',
  text32: 'Métricas',
  image_alt13: 'image',
  text7: 'Próximas reuniões',
  image_alt131: 'image',
  text911: 'Entregues',
  text311322: 'Novos',
  image_src: '9e344562-f664-4f8c-ae7a-ecea58cc2b9f',
  text311321: 'Alcance das mensagens de campanhas no ar',
  text10112: '{{data_publicacao}}',
  text6: '10',
  image_alt111: 'image',
  text103: 'Empresa ABC realiza treinamentos para prevenção de acidentes',
  text10141:
    'A empresa 123 está promovendo treinamentos para seus funcionários com o objetivo de prevenir acidentes de trabalho. Os treinamentos abordam temas como segurança em altura, uso de equipamentos de proteção e primeiros socorros.',
  text95: '9,2%',
  text8: 'Reunião Libbs',
  text5: 'Pronto para começar o dia?',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text11: 'Atualizado hoje, às 10h56',
  text91: 'Enviados',
  text101:
    'A empresa ABC está promovendo treinamentos para seus funcionários com o objetivo de prevenir acidentes de trabalho. Os treinamentos abordam temas como segurança em altura, uso de equipamentos de proteção e primeiros socorros.',
  text102: 'Empresa ABC realiza treinamentos para prevenção de acidentes',
  image_alt12: 'image',
  rootClassName1: '',
  text914: 'Clicados',
  text1013:
    'A empresa ABC está promovendo treinamentos para seus funcionários com o objetivo de prevenir acidentes de trabalho. Os treinamentos abordam temas como segurança em altura, uso de equipamentos de proteção e primeiros socorros.',
  text82: 'Reunião Ultrafarma',
  text4321: 'Últimas notícias',
  text93: '2,1%',
  text10113: '{{data_publicacao}}',
  image_alt11: 'image',
  text3: 'Você economizou até o momento',
  image_src3: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text43: 'Personalizações',
  text104: 'Empresa XYZ realiza treinamentos para prevenção de acidentes',
  text1: 'Quinta feira, 03 de agosto de 2023',
  text31132211: 'Personalizações',
  text: 'Dashboard',
  text312: '36,12%',
  text311311: '32%',
  image_alt33: 'image',
  text41: 'Média por usuário',
  text92: '97,8%',
  text1011: '{{data_publicacao}}',
  text913: 'Abertos',
  image_src2: '/group%202.svg',
  image_alt31: 'image',
  image_alt1311: 'image',
  text31: 'R$ 41.654,78',
  text42: 'Personalizações',
  text3113: '3786',
  text912: 'Bounce',
  text1041: 'Empresa 123 realiza treinamentos para prevenção de acidentes',
}

ContedoDashboard.propTypes = {
  text9: PropTypes.string,
  text2: PropTypes.string,
  text915: PropTypes.string,
  text43221: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt3: PropTypes.string,
  text31132: PropTypes.string,
  text4: PropTypes.string,
  text811: PropTypes.string,
  text10111: PropTypes.string,
  heading: PropTypes.string,
  text4322: PropTypes.string,
  text4311: PropTypes.string,
  text94: PropTypes.string,
  text411: PropTypes.string,
  text3113221: PropTypes.string,
  text10: PropTypes.string,
  text431: PropTypes.string,
  image_alt1: PropTypes.string,
  text113: PropTypes.string,
  text81: PropTypes.string,
  text311: PropTypes.string,
  image_alt: PropTypes.string,
  text611: PropTypes.string,
  rootClassName: PropTypes.string,
  text114: PropTypes.string,
  text1012: PropTypes.string,
  text432: PropTypes.string,
  text31111: PropTypes.string,
  text3112: PropTypes.string,
  text61: PropTypes.string,
  text432211: PropTypes.string,
  rootClassName11: PropTypes.string,
  rootClassName111: PropTypes.string,
  image_alt331: PropTypes.string,
  text96: PropTypes.string,
  image_alt32: PropTypes.string,
  text1014: PropTypes.string,
  text31131: PropTypes.string,
  text3111: PropTypes.string,
  text101131: PropTypes.string,
  text32: PropTypes.string,
  image_alt13: PropTypes.string,
  text7: PropTypes.string,
  image_alt131: PropTypes.string,
  text911: PropTypes.string,
  text311322: PropTypes.string,
  image_src: PropTypes.string,
  text311321: PropTypes.string,
  text10112: PropTypes.string,
  text6: PropTypes.string,
  image_alt111: PropTypes.string,
  text103: PropTypes.string,
  text10141: PropTypes.string,
  text95: PropTypes.string,
  text8: PropTypes.string,
  text5: PropTypes.string,
  image_src1: PropTypes.string,
  text11: PropTypes.string,
  text91: PropTypes.string,
  text101: PropTypes.string,
  text102: PropTypes.string,
  image_alt12: PropTypes.string,
  rootClassName1: PropTypes.string,
  text914: PropTypes.string,
  text1013: PropTypes.string,
  text82: PropTypes.string,
  text4321: PropTypes.string,
  text93: PropTypes.string,
  text10113: PropTypes.string,
  image_alt11: PropTypes.string,
  text3: PropTypes.string,
  image_src3: PropTypes.string,
  text43: PropTypes.string,
  text104: PropTypes.string,
  text1: PropTypes.string,
  text31132211: PropTypes.string,
  text: PropTypes.string,
  text312: PropTypes.string,
  text311311: PropTypes.string,
  image_alt33: PropTypes.string,
  text41: PropTypes.string,
  text92: PropTypes.string,
  text1011: PropTypes.string,
  text913: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt31: PropTypes.string,
  image_alt1311: PropTypes.string,
  text31: PropTypes.string,
  text42: PropTypes.string,
  text3113: PropTypes.string,
  text912: PropTypes.string,
  text1041: PropTypes.string,
}

export default ContedoDashboard
