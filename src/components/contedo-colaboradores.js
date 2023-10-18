import React from 'react'

import PropTypes from 'prop-types'

import Boto from './boto'
import NavPages from './nav-pages'
import NavPages2 from './nav-pages2'
import './contedo-colaboradores.css'

const ContedoColaboradores = (props) => {
  return (
    <div className={`contedo-colaboradores-container ${props.rootClassName} `}>
      <div className="contedo-colaboradores-group">
        <div className="contedo-colaboradores-header">
          <div className="contedo-colaboradores-title">
            <div className="contedo-colaboradores-display">
              <span className="contedo-colaboradores-text titulo">
                {props.text}
              </span>
            </div>
            <div className="contedo-colaboradores-actions">
              <span className="contedo-colaboradores-text01">
                {props.text211}
              </span>
              <div className="contedo-colaboradores-drop">
                <div className="contedo-colaboradores-drop-menu">
                  <span className="contedo-colaboradores-text02">
                    {props.text2111}
                  </span>
                </div>
              </div>
              <span className="contedo-colaboradores-text03">
                {props.text21}
              </span>
              <div className="contedo-colaboradores-boto">
                <Boto className=""></Boto>
              </div>
            </div>
          </div>
          <div className="contedo-colaboradores-pesquisa">
            <div className="contedo-colaboradores-input">
              <img
                alt="image"
                src="https://api.iconify.design/radix-icons/magnifying-glass.svg?color=%23FF9F0D"
                className="contedo-colaboradores-image"
              />
              <input
                type="text"
                placeholder="Pesquisar clientes"
                className="contedo-colaboradores-textinput input"
              />
            </div>
          </div>
        </div>
        <div className="contedo-colaboradores-clientmenu">
          <div className="contedo-colaboradores-checkbox">
            <input
              type="checkbox"
              className="contedo-colaboradores-checkbox01"
            />
          </div>
          <div className="contedo-colaboradores-clientes">
            <span className="menu_itens">{props.text1312}</span>
          </div>
          <div className="contedo-colaboradores-contatos">
            <span className="menu_itens">{props.text13112}</span>
          </div>
          <div className="contedo-colaboradores-origem">
            <span className="menu_itens">{props.text131112}</span>
          </div>
          <div className="contedo-colaboradores-status">
            <span className="menu_itens">{props.text1311112}</span>
          </div>
          <div className="contedo-colaboradores-reunio">
            <span className="menu_itens">{props.text13111111}</span>
          </div>
        </div>
        <div className="contedo-colaboradores-clientlist">
          <div className="contedo-colaboradores-clientvalue">
            <div className="contedo-colaboradores-checkbox02">
              <input
                type="checkbox"
                className="contedo-colaboradores-checkbox03"
              />
            </div>
            <div className="contedo-colaboradores-cliente">
              <div className="contedo-colaboradores-foto">
                <img
                  alt={props.image_alt92}
                  src={props.image_src92}
                  className="contedo-colaboradores-image01"
                />
              </div>
              <div className="contedo-colaboradores-user">
                <div className="contedo-colaboradores-name">
                  <span className="Clientname">{props.text144}</span>
                </div>
                <div className="contedo-colaboradores-acesso">
                  <span className="contedo-colaboradores-text10 Clientacess">
                    {props.text1423}
                  </span>
                </div>
              </div>
            </div>
            <div className="contedo-colaboradores-contato">
              <div className="contedo-colaboradores-email">
                <img
                  alt="image"
                  src="https://api.iconify.design/ci/mail.svg?color=%23737373"
                  className="contedo-colaboradores-image02"
                />
                <span className="Clientemail">{props.text14213}</span>
              </div>
              <div className="contedo-colaboradores-telefone">
                <img
                  alt="image"
                  src="https://api.iconify.design/mingcute/phone-call-line.svg?color=%23737373"
                  className="contedo-colaboradores-image03"
                />
                <span className="Clientnumber">{props.text142112}</span>
              </div>
            </div>
            <div className="contedo-colaboradores-situao">
              <span className="contedo-colaboradores-text13">
                {props.text13111213}
              </span>
            </div>
            <div className="contedo-colaboradores-tipo">
              <div className="contedo-colaboradores-statusset">
                <span className="textbutton">{props.text152}</span>
              </div>
            </div>
            <div className="contedo-colaboradores-ultimo-acesso">
              <img
                alt="image"
                src="https://api.iconify.design/material-symbols/nest-clock-farsight-analog-outline.svg?color=%23737373"
                className="contedo-colaboradores-image04"
              />
              <span className="contedo-colaboradores-text15">
                {props.text131112112}
              </span>
            </div>
          </div>
          <div className="contedo-colaboradores-clientvalue1">
            <div className="contedo-colaboradores-checkbox04">
              <input
                type="checkbox"
                className="contedo-colaboradores-checkbox05"
              />
            </div>
            <div className="contedo-colaboradores-cliente1">
              <div className="contedo-colaboradores-foto1">
                <img
                  alt={props.image_alt927}
                  src={props.image_src927}
                  className="contedo-colaboradores-image05"
                />
              </div>
              <div className="contedo-colaboradores-user1">
                <div className="contedo-colaboradores-name1">
                  <span className="Clientname">{props.text1447}</span>
                </div>
                <div className="contedo-colaboradores-acesso1">
                  <span className="contedo-colaboradores-text17 Clientacess">
                    {props.text14239}
                  </span>
                </div>
              </div>
            </div>
            <div className="contedo-colaboradores-contato1">
              <div className="contedo-colaboradores-email1">
                <img
                  alt="image"
                  src="https://api.iconify.design/ci/mail.svg?color=%23737373"
                  className="contedo-colaboradores-image06"
                />
                <span className="Clientemail">{props.text142137}</span>
              </div>
              <div className="contedo-colaboradores-telefone1">
                <img
                  alt="image"
                  src="https://api.iconify.design/mingcute/phone-call-line.svg?color=%23737373"
                  className="contedo-colaboradores-image07"
                />
                <span className="Clientnumber">{props.text1421127}</span>
              </div>
            </div>
            <div className="contedo-colaboradores-situao1">
              <span className="contedo-colaboradores-text20">
                {props.text131112137}
              </span>
            </div>
            <div className="contedo-colaboradores-tipo1">
              <div className="contedo-colaboradores-statusset1">
                <span className="textbutton">{props.text1527}</span>
              </div>
            </div>
            <div className="contedo-colaboradores-ultimo-acesso1">
              <img
                alt="image"
                src="https://api.iconify.design/material-symbols/nest-clock-farsight-analog-outline.svg?color=%23737373"
                className="contedo-colaboradores-image08"
              />
              <span className="contedo-colaboradores-text22">
                {props.text1311121129}
              </span>
            </div>
          </div>
          <div className="contedo-colaboradores-clientvalue2">
            <div className="contedo-colaboradores-checkbox06">
              <input
                type="checkbox"
                className="contedo-colaboradores-checkbox07"
              />
            </div>
            <div className="contedo-colaboradores-cliente2">
              <div className="contedo-colaboradores-foto2">
                <img
                  alt={props.image_alt926}
                  src={props.image_src926}
                  className="contedo-colaboradores-image09"
                />
              </div>
              <div className="contedo-colaboradores-user2">
                <div className="contedo-colaboradores-name2">
                  <span className="Clientname">{props.text1446}</span>
                </div>
                <div className="contedo-colaboradores-acesso2">
                  <span className="contedo-colaboradores-text24 Clientacess">
                    {props.text14238}
                  </span>
                </div>
              </div>
            </div>
            <div className="contedo-colaboradores-contato2">
              <div className="contedo-colaboradores-email2">
                <img
                  alt="image"
                  src="https://api.iconify.design/ci/mail.svg?color=%23737373"
                  className="contedo-colaboradores-image10"
                />
                <span className="Clientemail">{props.text142136}</span>
              </div>
              <div className="contedo-colaboradores-telefone2">
                <img
                  alt="image"
                  src="https://api.iconify.design/mingcute/phone-call-line.svg?color=%23737373"
                  className="contedo-colaboradores-image11"
                />
                <span className="Clientnumber">{props.text1421126}</span>
              </div>
            </div>
            <div className="contedo-colaboradores-situao2">
              <span className="contedo-colaboradores-text27">
                {props.text131112136}
              </span>
            </div>
            <div className="contedo-colaboradores-tipo2">
              <div className="contedo-colaboradores-statusset2">
                <span className="textbutton">{props.text1526}</span>
              </div>
            </div>
            <div className="contedo-colaboradores-ultimo-acesso2">
              <img
                alt="image"
                src="https://api.iconify.design/material-symbols/nest-clock-farsight-analog-outline.svg?color=%23737373"
                className="contedo-colaboradores-image12"
              />
              <span className="contedo-colaboradores-text29">
                {props.text1311121128}
              </span>
            </div>
          </div>
          <div className="contedo-colaboradores-clientvalue3">
            <div className="contedo-colaboradores-checkbox08">
              <input
                type="checkbox"
                className="contedo-colaboradores-checkbox09"
              />
            </div>
            <div className="contedo-colaboradores-cliente3">
              <div className="contedo-colaboradores-foto3">
                <img
                  alt={props.image_alt925}
                  src={props.image_src925}
                  className="contedo-colaboradores-image13"
                />
              </div>
              <div className="contedo-colaboradores-user3">
                <div className="contedo-colaboradores-name3">
                  <span className="Clientname">{props.text1445}</span>
                </div>
                <div className="contedo-colaboradores-acesso3">
                  <span className="contedo-colaboradores-text31 Clientacess">
                    {props.text14236}
                  </span>
                </div>
              </div>
            </div>
            <div className="contedo-colaboradores-contato3">
              <div className="contedo-colaboradores-email3">
                <img
                  alt="image"
                  src="https://api.iconify.design/ci/mail.svg?color=%23737373"
                  className="contedo-colaboradores-image14"
                />
                <span className="Clientemail">{props.text142135}</span>
              </div>
              <div className="contedo-colaboradores-telefone3">
                <img
                  alt="image"
                  src="https://api.iconify.design/mingcute/phone-call-line.svg?color=%23737373"
                  className="contedo-colaboradores-image15"
                />
                <span className="Clientnumber">{props.text1421125}</span>
              </div>
            </div>
            <div className="contedo-colaboradores-situao3">
              <span className="contedo-colaboradores-text34">
                {props.text131112135}
              </span>
            </div>
            <div className="contedo-colaboradores-tipo3">
              <div className="contedo-colaboradores-statusset3">
                <span className="textbutton">{props.text1525}</span>
              </div>
            </div>
            <div className="contedo-colaboradores-ultimo-acesso3">
              <img
                alt="image"
                src="https://api.iconify.design/material-symbols/nest-clock-farsight-analog-outline.svg?color=%23737373"
                className="contedo-colaboradores-image16"
              />
              <span className="contedo-colaboradores-text36">
                {props.text1311121126}
              </span>
            </div>
          </div>
          <div className="contedo-colaboradores-clientvalue4">
            <div className="contedo-colaboradores-checkbox10">
              <input
                type="checkbox"
                className="contedo-colaboradores-checkbox11"
              />
            </div>
            <div className="contedo-colaboradores-cliente4">
              <div className="contedo-colaboradores-foto4">
                <img
                  alt={props.image_alt9251}
                  src={props.image_src9251}
                  className="contedo-colaboradores-image17"
                />
              </div>
              <div className="contedo-colaboradores-user4">
                <div className="contedo-colaboradores-name4">
                  <span className="Clientname">{props.text14451}</span>
                </div>
                <div className="contedo-colaboradores-acesso4">
                  <span className="contedo-colaboradores-text38 Clientacess">
                    {props.text142361}
                  </span>
                </div>
              </div>
            </div>
            <div className="contedo-colaboradores-contato4">
              <div className="contedo-colaboradores-email4">
                <img
                  alt="image"
                  src="https://api.iconify.design/ci/mail.svg?color=%23737373"
                  className="contedo-colaboradores-image18"
                />
                <span className="Clientemail">{props.text1421351}</span>
              </div>
              <div className="contedo-colaboradores-telefone4">
                <img
                  alt="image"
                  src="https://api.iconify.design/mingcute/phone-call-line.svg?color=%23737373"
                  className="contedo-colaboradores-image19"
                />
                <span className="Clientnumber">{props.text14211251}</span>
              </div>
            </div>
            <div className="contedo-colaboradores-situao4">
              <span className="contedo-colaboradores-text41">
                {props.text1311121351}
              </span>
            </div>
            <div className="contedo-colaboradores-tipo4">
              <div className="contedo-colaboradores-statusset4">
                <span className="textbutton">{props.text15251}</span>
              </div>
            </div>
            <div className="contedo-colaboradores-ultimo-acesso4">
              <img
                alt="image"
                src="https://api.iconify.design/material-symbols/nest-clock-farsight-analog-outline.svg?color=%23737373"
                className="contedo-colaboradores-image20"
              />
              <span className="contedo-colaboradores-text43">
                {props.text13111211261}
              </span>
            </div>
          </div>
          <div className="contedo-colaboradores-clientvalue5">
            <div className="contedo-colaboradores-checkbox12">
              <input
                type="checkbox"
                className="contedo-colaboradores-checkbox13"
              />
            </div>
            <div className="contedo-colaboradores-cliente5">
              <div className="contedo-colaboradores-foto5">
                <img
                  alt={props.image_alt92511}
                  src={props.image_src92511}
                  className="contedo-colaboradores-image21"
                />
              </div>
              <div className="contedo-colaboradores-user5">
                <div className="contedo-colaboradores-name5">
                  <span className="Clientname">{props.text144511}</span>
                </div>
                <div className="contedo-colaboradores-acesso5">
                  <span className="contedo-colaboradores-text45 Clientacess">
                    {props.text1423611}
                  </span>
                </div>
              </div>
            </div>
            <div className="contedo-colaboradores-contato5">
              <div className="contedo-colaboradores-email5">
                <img
                  alt="image"
                  src="https://api.iconify.design/ci/mail.svg?color=%23737373"
                  className="contedo-colaboradores-image22"
                />
                <span className="Clientemail">{props.text14213511}</span>
              </div>
              <div className="contedo-colaboradores-telefone5">
                <img
                  alt="image"
                  src="https://api.iconify.design/mingcute/phone-call-line.svg?color=%23737373"
                  className="contedo-colaboradores-image23"
                />
                <span className="Clientnumber">{props.text142112511}</span>
              </div>
            </div>
            <div className="contedo-colaboradores-situao5">
              <span className="contedo-colaboradores-text48">
                {props.text13111213511}
              </span>
            </div>
            <div className="contedo-colaboradores-tipo5">
              <div className="contedo-colaboradores-statusset5">
                <span className="textbutton">{props.text152511}</span>
              </div>
            </div>
            <div className="contedo-colaboradores-ultimo-acesso5">
              <img
                alt="image"
                src="https://api.iconify.design/material-symbols/nest-clock-farsight-analog-outline.svg?color=%23737373"
                className="contedo-colaboradores-image24"
              />
              <span className="contedo-colaboradores-text50">
                {props.text131112112611}
              </span>
            </div>
          </div>
          <div className="contedo-colaboradores-clientvalue6">
            <div className="contedo-colaboradores-checkbox14">
              <input
                type="checkbox"
                className="contedo-colaboradores-checkbox15"
              />
            </div>
            <div className="contedo-colaboradores-cliente6">
              <div className="contedo-colaboradores-foto6">
                <img
                  alt={props.image_alt924}
                  src={props.image_src924}
                  className="contedo-colaboradores-image25"
                />
              </div>
              <div className="contedo-colaboradores-user6">
                <div className="contedo-colaboradores-name6">
                  <span className="Clientname">{props.text1444}</span>
                </div>
                <div className="contedo-colaboradores-acesso6">
                  <span className="contedo-colaboradores-text52 Clientacess">
                    {props.text14237}
                  </span>
                </div>
              </div>
            </div>
            <div className="contedo-colaboradores-contato6">
              <div className="contedo-colaboradores-email6">
                <img
                  alt="image"
                  src="https://api.iconify.design/ci/mail.svg?color=%23737373"
                  className="contedo-colaboradores-image26"
                />
                <span className="Clientemail">{props.text142134}</span>
              </div>
              <div className="contedo-colaboradores-telefone6">
                <img
                  alt="image"
                  src="https://api.iconify.design/mingcute/phone-call-line.svg?color=%23737373"
                  className="contedo-colaboradores-image27"
                />
                <span className="Clientnumber">{props.text1421124}</span>
              </div>
            </div>
            <div className="contedo-colaboradores-situao6">
              <span className="contedo-colaboradores-text55">
                {props.text131112134}
              </span>
            </div>
            <div className="contedo-colaboradores-tipo6">
              <div className="contedo-colaboradores-statusset6">
                <span className="textbutton">{props.text1524}</span>
              </div>
            </div>
            <div className="contedo-colaboradores-ultimo-acesso6">
              <img
                alt="image"
                src="https://api.iconify.design/material-symbols/nest-clock-farsight-analog-outline.svg?color=%23737373"
                className="contedo-colaboradores-image28"
              />
              <span className="contedo-colaboradores-text57">
                {props.text1311121127}
              </span>
            </div>
          </div>
          <div className="contedo-colaboradores-clientvalue7">
            <div className="contedo-colaboradores-checkbox16">
              <input
                type="checkbox"
                className="contedo-colaboradores-checkbox17"
              />
            </div>
            <div className="contedo-colaboradores-cliente7">
              <div className="contedo-colaboradores-foto7">
                <img
                  alt={props.image_alt9242}
                  src={props.image_src9242}
                  className="contedo-colaboradores-image29"
                />
              </div>
              <div className="contedo-colaboradores-user7">
                <div className="contedo-colaboradores-name7">
                  <span className="Clientname">{props.text14442}</span>
                </div>
                <div className="contedo-colaboradores-acesso7">
                  <span className="contedo-colaboradores-text59 Clientacess">
                    {props.text142371}
                  </span>
                </div>
              </div>
            </div>
            <div className="contedo-colaboradores-contato7">
              <div className="contedo-colaboradores-email7">
                <img
                  alt="image"
                  src="https://api.iconify.design/ci/mail.svg?color=%23737373"
                  className="contedo-colaboradores-image30"
                />
                <span className="Clientemail">{props.text1421342}</span>
              </div>
              <div className="contedo-colaboradores-telefone7">
                <img
                  alt="image"
                  src="https://api.iconify.design/mingcute/phone-call-line.svg?color=%23737373"
                  className="contedo-colaboradores-image31"
                />
                <span className="Clientnumber">{props.text14211242}</span>
              </div>
            </div>
            <div className="contedo-colaboradores-situao7">
              <span className="contedo-colaboradores-text62">
                {props.text1311121342}
              </span>
            </div>
            <div className="contedo-colaboradores-tipo7">
              <div className="contedo-colaboradores-statusset7">
                <span className="textbutton">{props.text15242}</span>
              </div>
            </div>
            <div className="contedo-colaboradores-ultimo-acesso7">
              <img
                alt="image"
                src="https://api.iconify.design/material-symbols/nest-clock-farsight-analog-outline.svg?color=%23737373"
                className="contedo-colaboradores-image32"
              />
              <span className="contedo-colaboradores-text64">
                {props.text13111211271}
              </span>
            </div>
          </div>
        </div>
        <div className="contedo-colaboradores-container1">
          <NavPages
            rootClassName="nav-pages-root-class-name"
            className=""
          ></NavPages>
          <NavPages2
            rootClassName="nav-pages2-root-class-name"
            className=""
          ></NavPages2>
        </div>
      </div>
    </div>
  )
}

ContedoColaboradores.defaultProps = {
  text14213311: 'exemplo@exemplo.com.br',
  text1421332: 'exemplo@exemplo.com.br',
  text131112121: 'Funil de vendas',
  text14213111: 'exemplo@exemplo.com.br',
  text13111211271: 'Terça - 22/08 | 12h45',
  image_alt923: 'image',
  text131111: 'Status',
  text95: '9,2%',
  image_src96: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text146: 'Nome e Sobrenome',
  text1421342: 'exemplo@exemplo.com.br',
  text1: 'Quinta feira, 03 de agosto de 2023',
  text15242: 'Diretoria',
  image_src10: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text131112135: 'Período de férias',
  text1311112: 'Tipo',
  text1311121312: 'Funil de vendas',
  image_src11: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text14441: 'Nome e Sobrenome',
  image_src2: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text1431: 'Nome e Sobrenome',
  text14237: '{cargo_funcao}',
  image_alt9242: 'image',
  text1426: 'Hoje às 12h45',
  text131112: 'Situação',
  text93: '2,1%',
  text1421122: '55 11 98765-4321',
  text142332: 'Hoje às 12h45',
  text1421124: '55 11 98765-4321',
  text1441: 'Nome e Sobrenome',
  text14211241: '55 11 98765-4321',
  text82: 'Reunião Ultrafarma',
  text21: 'de {total de col}',
  text1446: 'Nome e Sobrenome',
  text113: 'Agendamentos',
  text7: 'Próximas reuniões',
  image_alt92311: 'image',
  text152111: 'Agendado',
  text142122: 'exemplo@exemplo.com.br',
  text3121: '36,12%',
  text1311121113: 'Ter - 22/08 | 12h45',
  image_src91: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text15232: 'Agendado',
  text1525: 'Colaborador',
  text1442: 'Nome e Sobrenome',
  text13111217: 'Funil de vendas',
  image_alt4: 'image',
  text13111212: 'Funil de vendas',
  text142312: 'Hoje às 12h45',
  text13111211232: 'Terça - 22/08 | 12h45',
  text15241: 'Agendado',
  text142124: 'exemplo@exemplo.com.br',
  image_alt10: 'image',
  image_alt96: 'image',
  text1427: 'Hoje às 12h45',
  text1511: 'Agendado',
  image_src923: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text152: 'Líder',
  image_alt92111: 'image',
  image_src922: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src9231: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text1421125: '55 11 98765-4321',
  image_alt92511: 'image',
  image_src92: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src927: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt6: 'image',
  image_src912: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text14224: 'Hoje às 12h45',
  text1421123: '55 11 98765-4321',
  text144: 'Nome e Sobrenome',
  text131111111: 'Reunião',
  text131112134: 'Contrato rescindido',
  text13111: 'Origem',
  text13111213: 'Contrato ativo',
  text1512: 'Agendado',
  text13111211212: 'Terça - 22/08 | 12h45',
  text1513: 'Agendado',
  text13111216: 'Funil de vendas',
  text1524: 'Diretoria',
  text1311121126: 'Terça - 22/08 | 12h45',
  text912: 'Bounce',
  text147: 'Nome e Sobrenome',
  text311: 'R$ 41.654,78',
  text14233: 'Hoje às 12h45',
  text13111213511: 'Período de férias',
  text61: 'de',
  text144111: 'Nome e Sobrenome',
  text13111214: 'Funil de vendas',
  text1311111: 'Reunião',
  text13112: 'Contatos',
  text1432: 'Nome e Sobrenome',
  text14232: 'Hoje às 12h45',
  image_src9242: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text1311121125: 'Terça - 22/08 | 12h45',
  text131112111: 'Ter - 22/08 | 12h45',
  image_alt924: 'image',
  text1311121127: 'Terça - 22/08 | 12h45',
  text1311121122: 'Terça - 22/08 | 12h45',
  image_src92311: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text13111121: 'Status',
  image_alt2: 'image',
  text142112: '55 11 98765-4321',
  image_src4: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src92111: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt911: 'image',
  text142: 'Hoje às 12h45',
  text131112114: 'Ter - 22/08 | 12h45',
  image_alt: 'image',
  text1311121128: 'Terça - 22/08 | 12h45',
  text1421111: '55 11 98765-4321',
  text142341: 'Hoje às 12h45',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text112: 'Atualizado hoje, às 10h56',
  image_alt8: 'image',
  text1312: 'Clientes',
  image_alt9212: 'image',
  text1411: 'Nome e Sobrenome',
  text14214: 'exemplo@exemplo.com.br',
  textinput_placeholder: 'placeholder',
  text151: 'Agendado',
  image_alt927: 'image',
  text1423111: 'Hoje às 12h45',
  text14211242: '55 11 98765-4321',
  text96: '1,7%',
  text31: 'R$ 41.654,78',
  text142115: '55 11 98765-4321',
  text1311121332: 'Funil de vendas',
  text15231: 'Agendado',
  text153: 'Agendado',
  text1434: 'Nome e Sobrenome',
  image_src914: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text152511: 'Colaborador',
  image_alt921: 'image',
  text8: 'Reunião Libbs',
  text13111211261: 'Terça - 22/08 | 12h45',
  image_src7: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt922: 'image',
  image_alt914: 'image',
  image_src3: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text9: '2836',
  image_alt1: 'image',
  text152311: 'Agendado',
  text913: 'Abertos',
  text14238: '{cargo_funcao}',
  text: 'Colaboradores',
  text131112124: 'Funil de vendas',
  text1311121121: 'Terça - 22/08 | 12h45',
  text131112115: 'Ter - 22/08 | 12h45',
  text611: '40',
  text14442: 'Nome e Sobrenome',
  text142134: 'exemplo@exemplo.com.br',
  text1311121129: 'Terça - 22/08 | 12h45',
  text1527: 'Líder',
  text1423611: '{cargo_funcao}',
  image_alt9231: 'image',
  image_alt93: 'image',
  button: 'Button',
  text13111215: 'Funil de vendas',
  text1423: '{cargo_funcao}',
  text14211231: '55 11 98765-4321',
  text915: 'Réplicas',
  text1311121124: 'Terça - 22/08 | 12h45',
  text114: 'Atualizado hoje, às 10h56',
  text144311: 'Nome e Sobrenome',
  text1447: 'Nome e Sobrenome',
  text6: '10',
  image_src9232: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text1421112: '55 11 98765-4321',
  text1425: 'Hoje às 12h45',
  text1311121311: 'Funil de vendas',
  image_alt92: 'image',
  text1311: 'Contatos',
  text142121: 'exemplo@exemplo.com.br',
  text1311121123: 'Terça - 22/08 | 12h45',
  text1421341: 'exemplo@exemplo.com.br',
  image_alt5: 'image',
  text3: 'Você economizou até o momento',
  text1522: 'Agendado',
  text131112136: 'Contrato ativo',
  text1521: 'Agendado',
  text142113: '55 11 98765-4321',
  text14412: 'Nome e Sobrenome',
  text14217: 'exemplo@exemplo.com.br',
  text14211: '55 11 98765-4321',
  text142116: '55 11 98765-4321',
  text142123: 'exemplo@exemplo.com.br',
  text1422: 'Hoje às 12h45',
  image_alt9232: 'image',
  text1421331: 'exemplo@exemplo.com.br',
  text1311121111: 'Ter - 22/08 | 12h45',
  text1311121: 'Funil de vendas',
  text131112122: 'Funil de vendas',
  text1421351: 'exemplo@exemplo.com.br',
  image_src9: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text15211: 'Agendado',
  image_alt9241: 'image',
  image_alt94: 'image',
  text14211251: '55 11 98765-4321',
  text131112132: 'Funil de vendas',
  text1421: 'exemplo@exemplo.com.br',
  text14239: '{cargo_funcao}',
  image_src913: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src5: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text1421311: 'exemplo@exemplo.com.br',
  text142361: '{cargo_funcao}',
  text13111211231: 'Terça - 22/08 | 12h45',
  text14236: '{cargo_funcao}',
  text312: '36,12%',
  image_alt925: 'image',
  text1443: 'Nome e Sobrenome',
  text911: 'Entregues',
  text142111: '55 11 98765-4321',
  text14231: 'Hoje às 12h45',
  text14222: 'Hoje às 12h45',
  text131: 'Clientes',
  text2: '6',
  text14: 'Nome e Sobrenome',
  text142112311: '55 11 98765-4321',
  text145: 'Nome e Sobrenome',
  text13: 'Text',
  image_alt9211: 'image',
  text5:
    'O seu resultado até o momento  comparado a empresas do mesmo segmento está: Acima da meta',
  text1311121342: 'Contrato rescindido',
  image_src6: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text1421113: '55 11 98765-4321',
  image_alt95: 'image',
  text81: '09/08/2023 | Das 9h às 10h | online',
  text91: 'Enviados',
  text13111111: 'Último acesso',
  text142331: 'Hoje às 12h45',
  text2111: '8',
  text131112131: 'Funil de vendas',
  text13111211211: 'Terça - 22/08 | 12h45',
  text143: 'Nome e Sobrenome',
  text131112112: 'Terça - 22/08 | 12h45',
  text1311121341: 'Funil de vendas',
  text1433: 'Nome e Sobrenome',
  text142112111: '55 11 98765-4321',
  image_src95: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src924: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text11: 'Atualizado hoje, às 10h56',
  text1421126: '55 11 98765-4321',
  text1444: 'Nome e Sobrenome',
  text13121: 'Clientes',
  text14211211: '55 11 98765-4321',
  text154: 'Agendado',
  text1421127: '55 11 98765-4321',
  text313: 'R$ 41.654,78',
  image_alt9251: 'image',
  text144511: 'Nome e Sobrenome',
  image_alt3: 'image',
  image_src926: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text141: 'Nome e Sobrenome',
  text142136: 'exemplo@exemplo.com.br',
  text94: '39,3%',
  text13111211241: 'Terça - 22/08 | 12h45',
  text131112123: 'Funil de vendas',
  text14451: 'Nome e Sobrenome',
  text1423311: 'Hoje às 12h45',
  text14212: 'exemplo@exemplo.com.br',
  text15: 'Agendado',
  text14431: 'Nome e Sobrenome',
  text1311121331: 'Funil de vendas',
  text14235: 'Hoje às 12h45',
  text14432: 'Nome e Sobrenome',
  text15251: 'Colaborador',
  text14234: 'Hoje às 12h45',
  text15212: 'Agendado',
  text156: 'Agendado',
  text14411: 'Nome e Sobrenome',
  text1445: 'Nome e Sobrenome',
  text142311: 'Hoje às 12h45',
  text14215: 'exemplo@exemplo.com.br',
  text155: 'Agendado',
  text142132: 'exemplo@exemplo.com.br',
  image_src911: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text1526: 'Líder',
  image_alt926: 'image',
  text16: 'Text',
  image_alt913: 'image',
  image_src9211: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src94: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src9251: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text14211232: '55 11 98765-4321',
  image_src9212: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text10: 'Pesquisar cliente',
  text14211212: '55 11 98765-4321',
  text32: 'Métricas',
  text13111211: 'Ter - 22/08 | 12h45',
  text1421121: '55 11 98765-4321',
  image_alt7: 'image',
  text131121: 'Contatos',
  text14213511: 'exemplo@exemplo.com.br',
  text1514: 'Agendado',
  image_src925: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text1523: 'Agendado',
  text1421114: '55 11 98765-4321',
  text811: '10/08/2023 | Das 9h às 12h | online',
  text131112112311: 'Terça - 22/08 | 12h45',
  text142131: 'exemplo@exemplo.com.br',
  text914: 'Clicados',
  text142135: 'exemplo@exemplo.com.br',
  text148: 'Nome e Sobrenome',
  text131112133: 'Funil de vendas',
  text131112137: 'Contrato ativo',
  rootClassName: '',
  text14213: 'exemplo@exemplo.com.br',
  text142371: '{cargo_funcao}',
  text131112113: 'Ter - 22/08 | 12h45',
  image_src93: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text211: 'Monstrando',
  text142137: 'exemplo@exemplo.com.br',
  text131112112611: 'Terça - 22/08 | 12h45',
  text13111213111: 'Funil de vendas',
  text13111213311: 'Funil de vendas',
  text14216: 'exemplo@exemplo.com.br',
  text142114: '55 11 98765-4321',
  image_alt11: 'image',
  text14223: 'Hoje às 12h45',
  text142133: 'exemplo@exemplo.com.br',
  image_alt91: 'image',
  text1421312: 'exemplo@exemplo.com.br',
  image_src8: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text1311121351: 'Período de férias',
  text131112116: 'Ter - 22/08 | 12h45',
  image_src921: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text1424: 'Hoje às 12h45',
  image_alt912: 'image',
  text4: 'Text',
  text92: '97,8%',
  text111:
    'O seu resultado até o momento  comparado a empresas do mesmo segmento está:',
  text131112112111: 'Terça - 22/08 | 12h45',
  text142112511: '55 11 98765-4321',
  text12: 'Ver assinatura',
  text1311121114: 'Ter - 22/08 | 12h45',
  image_src92511: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text1311121112: 'Ter - 22/08 | 12h45',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src9241: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt9: 'image',
  text14221: 'Hoje às 12h45',
}

ContedoColaboradores.propTypes = {
  text14213311: PropTypes.string,
  text1421332: PropTypes.string,
  text131112121: PropTypes.string,
  text14213111: PropTypes.string,
  text13111211271: PropTypes.string,
  image_alt923: PropTypes.string,
  text131111: PropTypes.string,
  text95: PropTypes.string,
  image_src96: PropTypes.string,
  text146: PropTypes.string,
  text1421342: PropTypes.string,
  text1: PropTypes.string,
  text15242: PropTypes.string,
  image_src10: PropTypes.string,
  text131112135: PropTypes.string,
  text1311112: PropTypes.string,
  text1311121312: PropTypes.string,
  image_src11: PropTypes.string,
  text14441: PropTypes.string,
  image_src2: PropTypes.string,
  text1431: PropTypes.string,
  text14237: PropTypes.string,
  image_alt9242: PropTypes.string,
  text1426: PropTypes.string,
  text131112: PropTypes.string,
  text93: PropTypes.string,
  text1421122: PropTypes.string,
  text142332: PropTypes.string,
  text1421124: PropTypes.string,
  text1441: PropTypes.string,
  text14211241: PropTypes.string,
  text82: PropTypes.string,
  text21: PropTypes.string,
  text1446: PropTypes.string,
  text113: PropTypes.string,
  text7: PropTypes.string,
  image_alt92311: PropTypes.string,
  text152111: PropTypes.string,
  text142122: PropTypes.string,
  text3121: PropTypes.string,
  text1311121113: PropTypes.string,
  image_src91: PropTypes.string,
  text15232: PropTypes.string,
  text1525: PropTypes.string,
  text1442: PropTypes.string,
  text13111217: PropTypes.string,
  image_alt4: PropTypes.string,
  text13111212: PropTypes.string,
  text142312: PropTypes.string,
  text13111211232: PropTypes.string,
  text15241: PropTypes.string,
  text142124: PropTypes.string,
  image_alt10: PropTypes.string,
  image_alt96: PropTypes.string,
  text1427: PropTypes.string,
  text1511: PropTypes.string,
  image_src923: PropTypes.string,
  text152: PropTypes.string,
  image_alt92111: PropTypes.string,
  image_src922: PropTypes.string,
  image_src9231: PropTypes.string,
  text1421125: PropTypes.string,
  image_alt92511: PropTypes.string,
  image_src92: PropTypes.string,
  image_src927: PropTypes.string,
  image_alt6: PropTypes.string,
  image_src912: PropTypes.string,
  text14224: PropTypes.string,
  text1421123: PropTypes.string,
  text144: PropTypes.string,
  text131111111: PropTypes.string,
  text131112134: PropTypes.string,
  text13111: PropTypes.string,
  text13111213: PropTypes.string,
  text1512: PropTypes.string,
  text13111211212: PropTypes.string,
  text1513: PropTypes.string,
  text13111216: PropTypes.string,
  text1524: PropTypes.string,
  text1311121126: PropTypes.string,
  text912: PropTypes.string,
  text147: PropTypes.string,
  text311: PropTypes.string,
  text14233: PropTypes.string,
  text13111213511: PropTypes.string,
  text61: PropTypes.string,
  text144111: PropTypes.string,
  text13111214: PropTypes.string,
  text1311111: PropTypes.string,
  text13112: PropTypes.string,
  text1432: PropTypes.string,
  text14232: PropTypes.string,
  image_src9242: PropTypes.string,
  text1311121125: PropTypes.string,
  text131112111: PropTypes.string,
  image_alt924: PropTypes.string,
  text1311121127: PropTypes.string,
  text1311121122: PropTypes.string,
  image_src92311: PropTypes.string,
  text13111121: PropTypes.string,
  image_alt2: PropTypes.string,
  text142112: PropTypes.string,
  image_src4: PropTypes.string,
  image_src92111: PropTypes.string,
  image_alt911: PropTypes.string,
  text142: PropTypes.string,
  text131112114: PropTypes.string,
  image_alt: PropTypes.string,
  text1311121128: PropTypes.string,
  text1421111: PropTypes.string,
  text142341: PropTypes.string,
  image_src: PropTypes.string,
  text112: PropTypes.string,
  image_alt8: PropTypes.string,
  text1312: PropTypes.string,
  image_alt9212: PropTypes.string,
  text1411: PropTypes.string,
  text14214: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text151: PropTypes.string,
  image_alt927: PropTypes.string,
  text1423111: PropTypes.string,
  text14211242: PropTypes.string,
  text96: PropTypes.string,
  text31: PropTypes.string,
  text142115: PropTypes.string,
  text1311121332: PropTypes.string,
  text15231: PropTypes.string,
  text153: PropTypes.string,
  text1434: PropTypes.string,
  image_src914: PropTypes.string,
  text152511: PropTypes.string,
  image_alt921: PropTypes.string,
  text8: PropTypes.string,
  text13111211261: PropTypes.string,
  image_src7: PropTypes.string,
  image_alt922: PropTypes.string,
  image_alt914: PropTypes.string,
  image_src3: PropTypes.string,
  text9: PropTypes.string,
  image_alt1: PropTypes.string,
  text152311: PropTypes.string,
  text913: PropTypes.string,
  text14238: PropTypes.string,
  text: PropTypes.string,
  text131112124: PropTypes.string,
  text1311121121: PropTypes.string,
  text131112115: PropTypes.string,
  text611: PropTypes.string,
  text14442: PropTypes.string,
  text142134: PropTypes.string,
  text1311121129: PropTypes.string,
  text1527: PropTypes.string,
  text1423611: PropTypes.string,
  image_alt9231: PropTypes.string,
  image_alt93: PropTypes.string,
  button: PropTypes.string,
  text13111215: PropTypes.string,
  text1423: PropTypes.string,
  text14211231: PropTypes.string,
  text915: PropTypes.string,
  text1311121124: PropTypes.string,
  text114: PropTypes.string,
  text144311: PropTypes.string,
  text1447: PropTypes.string,
  text6: PropTypes.string,
  image_src9232: PropTypes.string,
  text1421112: PropTypes.string,
  text1425: PropTypes.string,
  text1311121311: PropTypes.string,
  image_alt92: PropTypes.string,
  text1311: PropTypes.string,
  text142121: PropTypes.string,
  text1311121123: PropTypes.string,
  text1421341: PropTypes.string,
  image_alt5: PropTypes.string,
  text3: PropTypes.string,
  text1522: PropTypes.string,
  text131112136: PropTypes.string,
  text1521: PropTypes.string,
  text142113: PropTypes.string,
  text14412: PropTypes.string,
  text14217: PropTypes.string,
  text14211: PropTypes.string,
  text142116: PropTypes.string,
  text142123: PropTypes.string,
  text1422: PropTypes.string,
  image_alt9232: PropTypes.string,
  text1421331: PropTypes.string,
  text1311121111: PropTypes.string,
  text1311121: PropTypes.string,
  text131112122: PropTypes.string,
  text1421351: PropTypes.string,
  image_src9: PropTypes.string,
  text15211: PropTypes.string,
  image_alt9241: PropTypes.string,
  image_alt94: PropTypes.string,
  text14211251: PropTypes.string,
  text131112132: PropTypes.string,
  text1421: PropTypes.string,
  text14239: PropTypes.string,
  image_src913: PropTypes.string,
  image_src5: PropTypes.string,
  text1421311: PropTypes.string,
  text142361: PropTypes.string,
  text13111211231: PropTypes.string,
  text14236: PropTypes.string,
  text312: PropTypes.string,
  image_alt925: PropTypes.string,
  text1443: PropTypes.string,
  text911: PropTypes.string,
  text142111: PropTypes.string,
  text14231: PropTypes.string,
  text14222: PropTypes.string,
  text131: PropTypes.string,
  text2: PropTypes.string,
  text14: PropTypes.string,
  text142112311: PropTypes.string,
  text145: PropTypes.string,
  text13: PropTypes.string,
  image_alt9211: PropTypes.string,
  text5: PropTypes.string,
  text1311121342: PropTypes.string,
  image_src6: PropTypes.string,
  text1421113: PropTypes.string,
  image_alt95: PropTypes.string,
  text81: PropTypes.string,
  text91: PropTypes.string,
  text13111111: PropTypes.string,
  text142331: PropTypes.string,
  text2111: PropTypes.string,
  text131112131: PropTypes.string,
  text13111211211: PropTypes.string,
  text143: PropTypes.string,
  text131112112: PropTypes.string,
  text1311121341: PropTypes.string,
  text1433: PropTypes.string,
  text142112111: PropTypes.string,
  image_src95: PropTypes.string,
  image_src924: PropTypes.string,
  text11: PropTypes.string,
  text1421126: PropTypes.string,
  text1444: PropTypes.string,
  text13121: PropTypes.string,
  text14211211: PropTypes.string,
  text154: PropTypes.string,
  text1421127: PropTypes.string,
  text313: PropTypes.string,
  image_alt9251: PropTypes.string,
  text144511: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src926: PropTypes.string,
  text141: PropTypes.string,
  text142136: PropTypes.string,
  text94: PropTypes.string,
  text13111211241: PropTypes.string,
  text131112123: PropTypes.string,
  text14451: PropTypes.string,
  text1423311: PropTypes.string,
  text14212: PropTypes.string,
  text15: PropTypes.string,
  text14431: PropTypes.string,
  text1311121331: PropTypes.string,
  text14235: PropTypes.string,
  text14432: PropTypes.string,
  text15251: PropTypes.string,
  text14234: PropTypes.string,
  text15212: PropTypes.string,
  text156: PropTypes.string,
  text14411: PropTypes.string,
  text1445: PropTypes.string,
  text142311: PropTypes.string,
  text14215: PropTypes.string,
  text155: PropTypes.string,
  text142132: PropTypes.string,
  image_src911: PropTypes.string,
  text1526: PropTypes.string,
  image_alt926: PropTypes.string,
  text16: PropTypes.string,
  image_alt913: PropTypes.string,
  image_src9211: PropTypes.string,
  image_src94: PropTypes.string,
  image_src9251: PropTypes.string,
  text14211232: PropTypes.string,
  image_src9212: PropTypes.string,
  text10: PropTypes.string,
  text14211212: PropTypes.string,
  text32: PropTypes.string,
  text13111211: PropTypes.string,
  text1421121: PropTypes.string,
  image_alt7: PropTypes.string,
  text131121: PropTypes.string,
  text14213511: PropTypes.string,
  text1514: PropTypes.string,
  image_src925: PropTypes.string,
  text1523: PropTypes.string,
  text1421114: PropTypes.string,
  text811: PropTypes.string,
  text131112112311: PropTypes.string,
  text142131: PropTypes.string,
  text914: PropTypes.string,
  text142135: PropTypes.string,
  text148: PropTypes.string,
  text131112133: PropTypes.string,
  text131112137: PropTypes.string,
  rootClassName: PropTypes.string,
  text14213: PropTypes.string,
  text142371: PropTypes.string,
  text131112113: PropTypes.string,
  image_src93: PropTypes.string,
  text211: PropTypes.string,
  text142137: PropTypes.string,
  text131112112611: PropTypes.string,
  text13111213111: PropTypes.string,
  text13111213311: PropTypes.string,
  text14216: PropTypes.string,
  text142114: PropTypes.string,
  image_alt11: PropTypes.string,
  text14223: PropTypes.string,
  text142133: PropTypes.string,
  image_alt91: PropTypes.string,
  text1421312: PropTypes.string,
  image_src8: PropTypes.string,
  text1311121351: PropTypes.string,
  text131112116: PropTypes.string,
  image_src921: PropTypes.string,
  text1424: PropTypes.string,
  image_alt912: PropTypes.string,
  text4: PropTypes.string,
  text92: PropTypes.string,
  text111: PropTypes.string,
  text131112112111: PropTypes.string,
  text142112511: PropTypes.string,
  text12: PropTypes.string,
  text1311121114: PropTypes.string,
  image_src92511: PropTypes.string,
  text1311121112: PropTypes.string,
  image_src1: PropTypes.string,
  image_src9241: PropTypes.string,
  image_alt9: PropTypes.string,
  text14221: PropTypes.string,
}

export default ContedoColaboradores
