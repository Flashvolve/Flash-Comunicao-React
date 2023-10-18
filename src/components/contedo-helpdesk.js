import React from 'react'

import PropTypes from 'prop-types'

import './contedo-helpdesk.css'

const ContedoHelpdesk = (props) => {
  return (
    <div className={`contedo-helpdesk-container ${props.rootClassName} `}>
      <div className="contedo-helpdesk-container1">
        <div className="contedo-helpdesk-header">
          <div className="contedo-helpdesk-container2">
            <div className="contedo-helpdesk-display">
              <span className="contedo-helpdesk-text titulo">{props.text}</span>
            </div>
            <div className="contedo-helpdesk-actions">
              <div className="contedo-helpdesk-container3">
                <img
                  alt="image"
                  src="https://api.iconify.design/radix-icons/magnifying-glass.svg?color=%23FF9F0D"
                  className="contedo-helpdesk-image"
                />
                <input
                  type="text"
                  placeholder="Pesquisar"
                  className="contedo-helpdesk-input Content"
                />
              </div>
              <div className="contedo-helpdesk-container4">
                <select className="contedo-helpdesk-select Optionmenu">
                  <option value="Option 1" className="">
                    Option 1
                  </option>
                  <option value="Option 1" className="">
                    Option 1
                  </option>
                  <option value="Option 2" className="">
                    Option 2
                  </option>
                  <option value="Option 2" className="">
                    Option 2
                  </option>
                  <option value="Option 3" className="">
                    Option 3
                  </option>
                  <option value="Option 3" className="">
                    Option 3
                  </option>
                </select>
              </div>
              <div className="contedo-helpdesk-boto">
                <span className="contedo-helpdesk-text01 textbutton">
                  {props.text1}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="contedo-helpdesk-clientmenu">
          <div className="contedo-helpdesk-clientes">
            <span className="menu_itens">{props.text1312}</span>
          </div>
          <div className="contedo-helpdesk-motivo">
            <span className="menu_itens">{props.text13112}</span>
          </div>
          <div className="contedo-helpdesk-status">
            <span className="menu_itens">{props.text131112}</span>
          </div>
          <div className="contedo-helpdesk-ultima-atualizao">
            <span className="menu_itens">{props.text1311112}</span>
          </div>
        </div>
        <div className="contedo-helpdesk-clientlist">
          <div className="contedo-helpdesk-clientvalue">
            <div className="contedo-helpdesk-numero-hamado">
              <span className="Clientname">{props.text144}</span>
            </div>
            <div className="contedo-helpdesk-motivo01">
              <div className="contedo-helpdesk-motivo02">
                <span className="contedo-helpdesk-text07 Clientemail">
                  {props.text14213}
                </span>
              </div>
            </div>
            <div className="contedo-helpdesk-status1">
              <div className="contedo-helpdesk-statusset">
                <span className="textbutton">{props.text152}</span>
              </div>
            </div>
            <div className="contedo-helpdesk-data-abertura">
              <span className="reuniao">27/07/2023 às 15h46</span>
            </div>
          </div>
          <div className="contedo-helpdesk-clientvalue1">
            <div className="contedo-helpdesk-numero-hamado1">
              <span className="Clientname">{props.text1444}</span>
            </div>
            <div className="contedo-helpdesk-motivo03">
              <div className="contedo-helpdesk-motivo04">
                <span className="contedo-helpdesk-text11 Clientemail">
                  {props.text142134}
                </span>
              </div>
            </div>
            <div className="contedo-helpdesk-status2">
              <div className="contedo-helpdesk-statusset1">
                <span className="textbutton">{props.text1524}</span>
              </div>
            </div>
            <div className="contedo-helpdesk-data-abertura1">
              <span className="contedo-helpdesk-text13 reuniao">
                27/07/2023 às 15h46
              </span>
            </div>
          </div>
          <div className="contedo-helpdesk-clientvalue2">
            <div className="contedo-helpdesk-numero-hamado2">
              <span className="Clientname">{props.text14441}</span>
            </div>
            <div className="contedo-helpdesk-motivo05">
              <div className="contedo-helpdesk-motivo06">
                <span className="contedo-helpdesk-text15 Clientemail">
                  {props.text1421341}
                </span>
              </div>
            </div>
            <div className="contedo-helpdesk-status3">
              <div className="contedo-helpdesk-statusset2">
                <span className="textbutton">{props.text15241}</span>
              </div>
            </div>
            <div className="contedo-helpdesk-data-abertura2">
              <span className="contedo-helpdesk-text17 reuniao">
                27/07/2023 às 15h46
              </span>
            </div>
          </div>
          <div className="contedo-helpdesk-clientvalue3">
            <div className="contedo-helpdesk-numero-hamado3">
              <span className="Clientname">{props.text1443}</span>
            </div>
            <div className="contedo-helpdesk-motivo07">
              <div className="contedo-helpdesk-motivo08">
                <span className="contedo-helpdesk-text19 Clientemail">
                  {props.text142133}
                </span>
              </div>
            </div>
            <div className="contedo-helpdesk-status4">
              <div className="contedo-helpdesk-statusset3">
                <span className="textbutton">{props.text1523}</span>
              </div>
            </div>
            <div className="contedo-helpdesk-data-abertura3">
              <span className="contedo-helpdesk-text21 reuniao">
                {props.text1311121123}
              </span>
            </div>
          </div>
          <div className="contedo-helpdesk-clientvalue4">
            <div className="contedo-helpdesk-numero-hamado4">
              <span className="Clientname">{props.text14432}</span>
            </div>
            <div className="contedo-helpdesk-motivo09">
              <div className="contedo-helpdesk-motivo10">
                <span className="contedo-helpdesk-text23 Clientemail">
                  {props.text1421332}
                </span>
              </div>
            </div>
            <div className="contedo-helpdesk-status5">
              <div className="contedo-helpdesk-statusset4">
                <span className="textbutton">{props.text15232}</span>
              </div>
            </div>
            <div className="contedo-helpdesk-data-abertura4">
              <span className="contedo-helpdesk-text25 reuniao">
                {props.text13111211232}
              </span>
            </div>
          </div>
          <div className="contedo-helpdesk-clientvalue5">
            <div className="contedo-helpdesk-numero-hamado5">
              <span className="Clientname">{props.text14431}</span>
            </div>
            <div className="contedo-helpdesk-motivo11">
              <div className="contedo-helpdesk-motivo12">
                <span className="contedo-helpdesk-text27 Clientemail">
                  {props.text1421331}
                </span>
              </div>
            </div>
            <div className="contedo-helpdesk-status6">
              <div className="contedo-helpdesk-statusset5">
                <span className="textbutton">{props.text15231}</span>
              </div>
            </div>
            <div className="contedo-helpdesk-data-abertura5">
              <span className="contedo-helpdesk-text29 reuniao">
                {props.text13111211231}
              </span>
            </div>
          </div>
          <div className="contedo-helpdesk-clientvalue6">
            <div className="contedo-helpdesk-numero-hamado6">
              <span className="Clientname">{props.text144311}</span>
            </div>
            <div className="contedo-helpdesk-motivo13">
              <div className="contedo-helpdesk-motivo14">
                <span className="contedo-helpdesk-text31 Clientemail">
                  {props.text14213311}
                </span>
              </div>
            </div>
            <div className="contedo-helpdesk-status7">
              <div className="contedo-helpdesk-statusset6">
                <span className="textbutton">{props.text152311}</span>
              </div>
            </div>
            <div className="contedo-helpdesk-data-abertura6">
              <span className="contedo-helpdesk-text33 reuniao">
                {props.text131112112311}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ContedoHelpdesk.defaultProps = {
  text1311121122: 'Terça - 22/08 | 12h45',
  image_alt92111: 'image',
  text14213311: 'BUG',
  image_src921: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text131112132: 'Funil de vendas',
  image_alt9212: 'image',
  text1421341: 'BUG',
  image_src922: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text1421331: 'BUG',
  text15241: 'Aberto',
  text1311121312: 'Funil de vendas',
  text1442: 'Nome e Sobrenome',
  text13111211231: '27/07/2023  às 15h46',
  image_alt922: 'image',
  text13112: 'Motivo',
  text131112: 'Status',
  text1443: 'ago_0004-24',
  text15232: 'Aberto',
  image_src9211: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text144111: 'Nome e Sobrenome',
  text14431: 'ago_0006-23',
  text1311121123: '27/07/2023  às 15h46',
  text13111211232: '27/07/2023  às 15h46',
  image_src92111: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text1522: 'Agendado',
  text1421122: '55 11 98765-4321',
  text21: 'de 52 resultados',
  text14213: 'BUG',
  rootClassName1: '',
  text1: '+ Novo chamado',
  text14411: 'Nome e Sobrenome',
  text142112: '55 11 98765-4321',
  text13111213: 'Funil de vendas',
  text13111211211: 'Terça - 22/08 | 12h45',
  text13111211241: '27/07/2023  às 15h46',
  text131112112111: 'Terça - 22/08 | 12h45',
  rootClassName: '',
  text1421121: '55 11 98765-4321',
  text14231: 'Hoje às 12h45',
  text142312: 'Hoje às 12h45',
  image_src9212: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt921: 'image',
  text14211211: '55 11 98765-4321',
  text15211: 'Agendado',
  text1423: 'Hoje às 12h45',
  text152: 'Resolvido',
  text152311: 'Aberto',
  text14432: 'ago_0005-23',
  text1421312: 'exemplo@exemplo.com.br',
  text131112131: 'Funil de vendas',
  text142311: 'Hoje às 12h45',
  text14412: 'Nome e Sobrenome',
  text1521: 'Agendado',
  text1441: 'Nome e Sobrenome',
  text14232: 'Hoje às 12h45',
  text15231: 'Aberto',
  text142134: 'BUG',
  text131112112311: '27/07/2023  às 15h46',
  text144311: 'ago_0007-23',
  text142112111: '55 11 98765-4321',
  text: 'Helpdesk',
  text1312: 'Número do chamado',
  image_alt92: 'image',
  text1311121124: '27/07/2023  às 15h46',
  image_alt9211: 'image',
  text142131: 'exemplo@exemplo.com.br',
  text1444: 'ago_0002-23',
  text1311112: 'Última atualização',
  text1423111: 'Hoje às 12h45',
  text1311121121: 'Terça - 22/08 | 12h45',
  text1311121311: 'Funil de vendas',
  text13111213111: 'Funil de vendas',
  text142133: 'BUG',
  text13111111: 'Reunião',
  text152111: 'Agendado',
  image_src92: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text1421311: 'exemplo@exemplo.com.br',
  text211: 'Monstrando',
  text14441: 'ago_0003-23',
  text1524: 'Aberto',
  text14213111: 'exemplo@exemplo.com.br',
  text131112112: '27/07/2023  às 15h46',
  text13111211212: 'Terça - 22/08 | 12h45',
  text142132: 'exemplo@exemplo.com.br',
  text15212: 'Agendado',
  text1421332: 'BUG',
  text144: 'ago_0001-23',
  text14211212: '55 11 98765-4321',
  text1523: 'Aberto',
}

ContedoHelpdesk.propTypes = {
  text1311121122: PropTypes.string,
  image_alt92111: PropTypes.string,
  text14213311: PropTypes.string,
  image_src921: PropTypes.string,
  text131112132: PropTypes.string,
  image_alt9212: PropTypes.string,
  text1421341: PropTypes.string,
  image_src922: PropTypes.string,
  text1421331: PropTypes.string,
  text15241: PropTypes.string,
  text1311121312: PropTypes.string,
  text1442: PropTypes.string,
  text13111211231: PropTypes.string,
  image_alt922: PropTypes.string,
  text13112: PropTypes.string,
  text131112: PropTypes.string,
  text1443: PropTypes.string,
  text15232: PropTypes.string,
  image_src9211: PropTypes.string,
  text144111: PropTypes.string,
  text14431: PropTypes.string,
  text1311121123: PropTypes.string,
  text13111211232: PropTypes.string,
  image_src92111: PropTypes.string,
  text1522: PropTypes.string,
  text1421122: PropTypes.string,
  text21: PropTypes.string,
  text14213: PropTypes.string,
  rootClassName1: PropTypes.string,
  text1: PropTypes.string,
  text14411: PropTypes.string,
  text142112: PropTypes.string,
  text13111213: PropTypes.string,
  text13111211211: PropTypes.string,
  text13111211241: PropTypes.string,
  text131112112111: PropTypes.string,
  rootClassName: PropTypes.string,
  text1421121: PropTypes.string,
  text14231: PropTypes.string,
  text142312: PropTypes.string,
  image_src9212: PropTypes.string,
  image_alt921: PropTypes.string,
  text14211211: PropTypes.string,
  text15211: PropTypes.string,
  text1423: PropTypes.string,
  text152: PropTypes.string,
  text152311: PropTypes.string,
  text14432: PropTypes.string,
  text1421312: PropTypes.string,
  text131112131: PropTypes.string,
  text142311: PropTypes.string,
  text14412: PropTypes.string,
  text1521: PropTypes.string,
  text1441: PropTypes.string,
  text14232: PropTypes.string,
  text15231: PropTypes.string,
  text142134: PropTypes.string,
  text131112112311: PropTypes.string,
  text144311: PropTypes.string,
  text142112111: PropTypes.string,
  text: PropTypes.string,
  text1312: PropTypes.string,
  image_alt92: PropTypes.string,
  text1311121124: PropTypes.string,
  image_alt9211: PropTypes.string,
  text142131: PropTypes.string,
  text1444: PropTypes.string,
  text1311112: PropTypes.string,
  text1423111: PropTypes.string,
  text1311121121: PropTypes.string,
  text1311121311: PropTypes.string,
  text13111213111: PropTypes.string,
  text142133: PropTypes.string,
  text13111111: PropTypes.string,
  text152111: PropTypes.string,
  image_src92: PropTypes.string,
  text1421311: PropTypes.string,
  text211: PropTypes.string,
  text14441: PropTypes.string,
  text1524: PropTypes.string,
  text14213111: PropTypes.string,
  text131112112: PropTypes.string,
  text13111211212: PropTypes.string,
  text142132: PropTypes.string,
  text15212: PropTypes.string,
  text1421332: PropTypes.string,
  text144: PropTypes.string,
  text14211212: PropTypes.string,
  text1523: PropTypes.string,
}

export default ContedoHelpdesk
