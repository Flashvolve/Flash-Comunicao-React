import React from 'react'

import PropTypes from 'prop-types'

import Boto from './boto'
import './contedo-dashboard2.css'

const ContedoDashboard2 = (props) => {
  return (
    <div className={`contedo-dashboard2-container ${props.rootClassName} `}>
      <div className="contedo-dashboard2-conteudo">
        <div className="contedo-dashboard2-header">
          <div className="contedo-dashboard2-display">
            <span className="titulo">Dashboard</span>
            <span className="subtitulo">
              Quinta feira, 03 de agosto de 2023
            </span>
          </div>
          <div className="contedo-dashboard2-actions">
            <div className="contedo-dashboard2-boto">
              <Boto className=""></Boto>
            </div>
            <div className="contedo-dashboard2-drop">
              <div className="contedo-dashboard2-menu">
                <img
                  alt="image"
                  src="https://api.iconify.design/lucide/calendar-clock.svg?color=%23dc0f37"
                  className="contedo-dashboard2-image"
                />
                <span className="contedo-dashboard2-text02 Optionmenu">
                  Últimos 2 meses: 01 de maio, 2023 - 01 de agosto, 2023
                </span>
                <img
                  alt="image"
                  src="https://api.iconify.design/mingcute/down-fill.svg?color=%23dc0f37"
                  className="contedo-dashboard2-image01"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="contedo-dashboard2-dashboard">
          <div className="contedo-dashboard2-container01">
            <div className="contedo-dashboard2-metrica">
              <div className="contedo-dashboard2-lead">
                <span className="contedo-dashboard2-text03 dashlead">
                  <span className="contedo-dashboard2-text04">
                    Agendamentos
                  </span>
                  <br className=""></br>
                </span>
              </div>
              <div className="contedo-dashboard2-numeros">
                <div className="contedo-dashboard2-esta-semana">
                  <div className="contedo-dashboard2-periodo">
                    <span className="contedo-dashboard2-text06">
                      {props.text}
                    </span>
                  </div>
                  <div className="contedo-dashboard2-numeros1">
                    <div className="contedo-dashboard2-agendamentos">
                      <span className="contedo-dashboard2-text07 metrica">
                        28
                      </span>
                      <span className="contedo-dashboard2-text08 metrica">
                        AGENDAMENTOS
                      </span>
                    </div>
                    <div className="contedo-dashboard2-container02">
                      <img
                        alt="image"
                        src="https://api.iconify.design/bxs/bar-chart-alt-2.svg?color=%2300a89c"
                        className="contedo-dashboard2-image02"
                      />
                    </div>
                  </div>
                  <div className="contedo-dashboard2-container03"></div>
                  <span className="contedo-dashboard2-text09">
                    <span className="contedo-dashboard2-text10">+ 23%</span>
                    <br className=""></br>
                  </span>
                </div>
                <div className="contedo-dashboard2-ultima-semana">
                  <div className="contedo-dashboard2-periodo1">
                    <span className="contedo-dashboard2-text12">
                      {props.text3}
                    </span>
                  </div>
                  <div className="contedo-dashboard2-numeros2">
                    <div className="contedo-dashboard2-agendamentos1">
                      <span className="contedo-dashboard2-text13 metrica">
                        23
                      </span>
                      <span className="contedo-dashboard2-text14 metrica">
                        AGENDAMENTOS
                      </span>
                    </div>
                    <div className="contedo-dashboard2-container04">
                      <img
                        alt="image"
                        src="https://api.iconify.design/bxs/bar-chart-alt-2.svg?color=%23dc0f37"
                        className="contedo-dashboard2-image03"
                      />
                    </div>
                  </div>
                  <div className="contedo-dashboard2-container05"></div>
                  <span className="contedo-dashboard2-text15">
                    <span className="contedo-dashboard2-text16">- 3%</span>
                    <br className=""></br>
                  </span>
                </div>
                <div className="contedo-dashboard2-ultimo-mes">
                  <div className="contedo-dashboard2-periodo2">
                    <span className="contedo-dashboard2-text18">
                      {props.text32}
                    </span>
                  </div>
                  <div className="contedo-dashboard2-numeros3">
                    <div className="contedo-dashboard2-agendamentos2">
                      <span className="contedo-dashboard2-text19 metrica">
                        68
                      </span>
                      <span className="contedo-dashboard2-text20 metrica">
                        AGENDAMENTOS
                      </span>
                    </div>
                    <div className="contedo-dashboard2-container06">
                      <img
                        alt="image"
                        src="https://api.iconify.design/bxs/bar-chart-alt-2.svg?color=%2300a89c"
                        className="contedo-dashboard2-image04"
                      />
                    </div>
                  </div>
                  <div className="contedo-dashboard2-container07"></div>
                  <span className="contedo-dashboard2-text21">
                    <span className="contedo-dashboard2-text22">+ 17%</span>
                    <br className=""></br>
                  </span>
                </div>
                <div className="contedo-dashboard2-mes-passado">
                  <div className="contedo-dashboard2-periodo3">
                    <span className="contedo-dashboard2-text24">
                      {props.text321}
                    </span>
                  </div>
                  <div className="contedo-dashboard2-numeros4">
                    <div className="contedo-dashboard2-agendamentos3">
                      <span className="contedo-dashboard2-text25 metrica">
                        85
                      </span>
                      <span className="contedo-dashboard2-text26 metrica">
                        AGENDAMENTOS
                      </span>
                    </div>
                    <div className="contedo-dashboard2-container08">
                      <img
                        alt="image"
                        src="https://api.iconify.design/bxs/bar-chart-alt-2.svg?color=%2300a89c"
                        className="contedo-dashboard2-image05"
                      />
                    </div>
                  </div>
                  <div className="contedo-dashboard2-container09"></div>
                  <span className="contedo-dashboard2-text27">
                    <span className="contedo-dashboard2-text28">+ 23%</span>
                    <br className=""></br>
                  </span>
                </div>
              </div>
            </div>
            <div className="contedo-dashboard2-agendamentos4">
              <span className="contedo-dashboard2-text30 dashlead">
                <span className="contedo-dashboard2-text31">Reuniões</span>
                <br className=""></br>
              </span>
              <div className="contedo-dashboard2-agendados">
                <span className="contedo-dashboard2-text33">{props.text6}</span>
                <span className="contedo-dashboard2-text34">
                  {props.text61}
                </span>
                <span className="contedo-dashboard2-text35">
                  {props.text611}
                </span>
              </div>
              <div className="contedo-dashboard2-barrafundo">
                <div className="contedo-dashboard2-progresso"></div>
              </div>
              <div className="contedo-dashboard2-status">
                <img
                  alt="image"
                  src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695141867/d1caokjvqllbn3uweqim.svg"
                  className="contedo-dashboard2-image06"
                />
                <div className="contedo-dashboard2-texto-status">
                  <span className="contedo-dashboard2-text36 dashlead">
                    O seu resultado até o momento comparado a empresas do mesmo
                    segmento está: Acima da meta
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="contedo-dashboard2-container10">
            <div className="contedo-dashboard2-resultados">
              <div className="contedo-dashboard2-economia">
                <div className="contedo-dashboard2-numeros5">
                  <span className="dashlead">
                    Você economizou até o momento
                  </span>
                  <span className="contedo-dashboard2-text38">
                    {props.text31}
                  </span>
                  <div className="contedo-dashboard2-container11">
                    <img
                      alt="image"
                      src="https://api.iconify.design/icon-park-solid/up-one.svg?color=%2300a89c"
                      className="contedo-dashboard2-image07"
                    />
                    <span className="contedo-dashboard2-text39">
                      {props.text312}
                    </span>
                  </div>
                  <div className="contedo-dashboard2-container12">
                    <span className="contedo-dashboard2-text40 subtitulo">
                      Atualizado hoje, às 10h56
                    </span>
                  </div>
                </div>
                <div className="contedo-dashboard2-grafico">
                  <img
                    alt="image"
                    src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695067451/kfnw8qw8iuorqruwhwnv.svg"
                    className="contedo-dashboard2-image08"
                  />
                </div>
              </div>
            </div>
            <div className="contedo-dashboard2-prospectos">
              <div className="contedo-dashboard2-reunioes">
                <div className="contedo-dashboard2-lead1">
                  <span className="contedo-dashboard2-text41 dashlead">
                    {props.text7}
                  </span>
                </div>
                <div className="contedo-dashboard2-reuniao1">
                  <div className="contedo-dashboard2-image09">
                    <img
                      alt="image"
                      src="https://api.iconify.design/mdi/bell.svg?color=%23dc0f37"
                      className="contedo-dashboard2-image10"
                    />
                  </div>
                  <div className="contedo-dashboard2-cliente1">
                    <span className="contedo-dashboard2-text42 dashlead">
                      Reunião Libbs
                    </span>
                    <span className="contedo-dashboard2-text43 subtitulo">
                      09/08/2023 | Das 9h às 10h | online
                    </span>
                  </div>
                </div>
                <div className="contedo-dashboard2-reuniao2">
                  <div className="contedo-dashboard2-image11">
                    <img
                      alt="image"
                      src="https://api.iconify.design/mdi/bell.svg?color=%23dc0f37"
                      className="contedo-dashboard2-image12"
                    />
                  </div>
                  <div className="contedo-dashboard2-client2">
                    <span className="contedo-dashboard2-text44 dashlead">
                      Reunião Ultrafarma
                    </span>
                    <span className="contedo-dashboard2-text45 subtitulo">
                      10/08/2023 | Das 9h às 12h | online
                    </span>
                  </div>
                </div>
                <div className="contedo-dashboard2-reuniao21">
                  <div className="contedo-dashboard2-image13">
                    <img
                      alt="image"
                      src="https://api.iconify.design/mdi/bell.svg?color=%23dc0f37"
                      className="contedo-dashboard2-image14"
                    />
                  </div>
                  <div className="contedo-dashboard2-client21">
                    <span className="contedo-dashboard2-text46 dashlead">
                      Reunião Neo Química
                    </span>
                    <span className="contedo-dashboard2-text47 subtitulo">
                      10/08/2023 | Das 9h às 12h | online
                    </span>
                  </div>
                </div>
                <div className="contedo-dashboard2-reuniao22">
                  <div className="contedo-dashboard2-image15">
                    <img
                      alt="image"
                      src="https://api.iconify.design/mdi/bell.svg?color=%23dc0f37"
                      className="contedo-dashboard2-image16"
                    />
                  </div>
                  <div className="contedo-dashboard2-client22">
                    <span className="contedo-dashboard2-text48 dashlead">
                      Reunião Hypera Pharma
                    </span>
                    <span className="contedo-dashboard2-text49 subtitulo">
                      10/08/2023 | Das 9h às 12h | online
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

ContedoDashboard2.defaultProps = {
  text321: 'Último mês',
  rootClassName: '',
  text61: 'de',
  text31: 'R$ 41.654,78',
  image_alt1: 'image',
  text32: 'Esse mês',
  text7: 'Próximas reuniões',
  text312: '36,12%',
  image_alt: 'image',
  text1: 'de 20/07/2023 a 27/07/2023',
  text2: 'Última semana',
  rootClassName11: '',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text3: 'Última semana',
  text: 'Esta semana',
  rootClassName1: '',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text611: '240',
  text6: '168',
}

ContedoDashboard2.propTypes = {
  text321: PropTypes.string,
  rootClassName: PropTypes.string,
  text61: PropTypes.string,
  text31: PropTypes.string,
  image_alt1: PropTypes.string,
  text32: PropTypes.string,
  text7: PropTypes.string,
  text312: PropTypes.string,
  image_alt: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  rootClassName11: PropTypes.string,
  image_src1: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  rootClassName1: PropTypes.string,
  image_src: PropTypes.string,
  text611: PropTypes.string,
  text6: PropTypes.string,
}

export default ContedoDashboard2
