import React from 'react'

import PropTypes from 'prop-types'

import LogoMenuTemplates from './logo-menu-templates'
import ConfiguraesTemplates from './configuraes-templates'
import ProfileTemplates from './profile-templates'
import './menu-lateral-templates.css'

const MenuLateralTemplates = (props) => {
  return (
    <div className={`menu-lateral-templates-container ${props.rootClassName} `}>
      <LogoMenuTemplates
        rootClassName="logo-menu-templates-root-class-name"
        className=""
      ></LogoMenuTemplates>
      <div className="menu-lateral-templates-barra">
        <div className="menu-lateral-templates-templates">
          <div className="menu-lateral-templates-paginas">
            <div className="menu-lateral-templates-title-section">
              <div className="menu-lateral-templates-container1 hover-menu-button">
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu"
                >
                  <span className="menu-lateral-templates-text">
                    {props.Paginas}
                  </span>
                </button>
              </div>
            </div>
            <div className="menu-lateral-templates-content-section">
              <div
                id="teste123"
                className="menu-lateral-templates-login hover-menu-button"
              >
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu01"
                >
                  <span className="menu-lateral-templates-text01">
                    {props.Login}
                  </span>
                </button>
              </div>
              <div
                id="teste123"
                className="menu-lateral-templates-cadastro hover-menu-button"
              >
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu02"
                >
                  <span className="menu-lateral-templates-text02">
                    {props.Cadastro}
                  </span>
                </button>
              </div>
              <div
                id="teste123"
                className="menu-lateral-templates-recuperar-senha hover-menu-button"
              >
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu03"
                >
                  <span className="menu-lateral-templates-text03">
                    {props.RecuperarSenha}
                  </span>
                </button>
              </div>
              <div
                id="teste123"
                className="menu-lateral-templates-funil-de-vendas hover-menu-button"
              >
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu04"
                >
                  <span className="menu-lateral-templates-text04">
                    {props.Funis}
                  </span>
                </button>
              </div>
              <div
                id="teste123"
                className="menu-lateral-templates-recuperar-senha1 hover-menu-button"
              >
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu05"
                >
                  <span className="menu-lateral-templates-text05">
                    {props.Pesquisa}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="menu-lateral-templates-navegao">
            <div className="menu-lateral-templates-title-section1">
              <div className="menu-lateral-templates-container2 hover-menu-button">
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu06"
                >
                  <span className="menu-lateral-templates-text06">
                    {props.Navegacao}
                  </span>
                </button>
              </div>
            </div>
            <div className="menu-lateral-templates-content-section1">
              <div
                id="teste123"
                className="menu-lateral-templates-headers hover-menu-button"
              >
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu07"
                >
                  <span className="menu-lateral-templates-text07">
                    {props.Headers}
                  </span>
                </button>
              </div>
              <div
                id="teste123"
                className="menu-lateral-templates-sidebars hover-menu-button"
              >
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu08"
                >
                  <span className="menu-lateral-templates-text08">
                    {props.Sidebars}
                  </span>
                </button>
              </div>
              <div
                id="teste123"
                className="menu-lateral-templates-footers hover-menu-button"
              >
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu09"
                >
                  <span className="menu-lateral-templates-text09">
                    {props.Footers}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="menu-lateral-templates-sees">
            <div className="menu-lateral-templates-title-section2">
              <div className="menu-lateral-templates-container3 hover-menu-button">
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu10"
                >
                  <span className="menu-lateral-templates-text10">
                    {props.Secoes}
                  </span>
                </button>
              </div>
            </div>
            <div className="menu-lateral-templates-content-section2">
              <div
                id="teste123"
                className="menu-lateral-templates-hero hover-menu-button"
              >
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu11"
                >
                  <span className="menu-lateral-templates-text11">
                    {props.Hero}
                  </span>
                </button>
              </div>
              <div
                id="teste123"
                className="menu-lateral-templates-banners hover-menu-button"
              >
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu12"
                >
                  <span className="menu-lateral-templates-text12">
                    {props.Banners}
                  </span>
                </button>
              </div>
              <div
                id="teste123"
                className="menu-lateral-templates-features hover-menu-button"
              >
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu13"
                >
                  <span className="menu-lateral-templates-text13">
                    {props.Features}
                  </span>
                </button>
              </div>
              <div
                id="teste123"
                className="menu-lateral-templates-preos hover-menu-button"
              >
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu14"
                >
                  <span className="menu-lateral-templates-text14">
                    {props.Price}
                  </span>
                </button>
              </div>
              <div
                id="teste123"
                className="menu-lateral-templates-galerias hover-menu-button"
              >
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu15"
                >
                  <span className="menu-lateral-templates-text15">
                    {props.Galerias}
                  </span>
                </button>
              </div>
              <div
                id="teste123"
                className="menu-lateral-templates-depoimentos hover-menu-button"
              >
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu16"
                >
                  <span className="menu-lateral-templates-text16">
                    {props.Depoimentos}
                  </span>
                </button>
              </div>
              <div
                id="teste123"
                className="menu-lateral-templates-steps hover-menu-button"
              >
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu17"
                >
                  <span className="menu-lateral-templates-text17">
                    {props.Steps}
                  </span>
                </button>
              </div>
              <div
                id="teste123"
                className="menu-lateral-templates-midias hover-menu-button"
              >
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu18"
                >
                  <span className="menu-lateral-templates-text18">
                    {props.MidiasSociais}
                  </span>
                </button>
              </div>
              <div
                id="teste123"
                className="menu-lateral-templates-status hover-menu-button"
              >
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu19"
                >
                  <span className="menu-lateral-templates-text19">
                    {props.Satatus}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="menu-lateral-templates-elementos">
            <div className="menu-lateral-templates-title-section3">
              <div className="menu-lateral-templates-container4 hover-menu-button">
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu20"
                >
                  <span className="menu-lateral-templates-text20">
                    {props.Elementos}
                  </span>
                </button>
              </div>
            </div>
            <div className="menu-lateral-templates-content-section3">
              <div
                id="teste123"
                className="menu-lateral-templates-textos hover-menu-button"
              >
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu21"
                >
                  <span className="menu-lateral-templates-text21">
                    {props.Textos}
                  </span>
                </button>
              </div>
              <div
                id="teste123"
                className="menu-lateral-templates-botoes hover-menu-button"
              >
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu22"
                >
                  <span className="menu-lateral-templates-text22">
                    {props.Botoes}
                  </span>
                </button>
              </div>
              <div
                id="teste123"
                className="menu-lateral-templates-nav-menus hover-menu-button"
              >
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu23"
                >
                  <span className="menu-lateral-templates-text23">
                    {props.MenusNav}
                  </span>
                </button>
              </div>
              <div
                id="teste123"
                className="menu-lateral-templates-icones hover-menu-button"
              >
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu24"
                >
                  <span className="menu-lateral-templates-text24">
                    {props.Icones}
                  </span>
                </button>
              </div>
              <div
                id="teste123"
                className="menu-lateral-templates-dropdowns hover-menu-button"
              >
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu25"
                >
                  <span className="menu-lateral-templates-text25">
                    {props.Dropdowns}
                  </span>
                </button>
              </div>
              <div
                id="teste123"
                className="menu-lateral-templates-cards hover-menu-button"
              >
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu26"
                >
                  <span className="menu-lateral-templates-text26">
                    {props.Cards}
                  </span>
                </button>
              </div>
              <div
                id="teste123"
                className="menu-lateral-templates-timelines hover-menu-button"
              >
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu27"
                >
                  <span className="menu-lateral-templates-text27">
                    {props.Timelines}
                  </span>
                </button>
              </div>
              <div
                id="teste123"
                className="menu-lateral-templates-listas hover-menu-button"
              >
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu28"
                >
                  <span className="menu-lateral-templates-text28">
                    {props.Listas}
                  </span>
                </button>
              </div>
              <div
                id="teste123"
                className="menu-lateral-templates-tabelas hover-menu-button"
              >
                <button
                  type="button"
                  className="menu-lateral-templates-botao-menu29"
                >
                  <span className="menu-lateral-templates-text29">
                    {props.Tabelas}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-lateral-templates-contentbotton">
          <div className="menu-lateral-templates-acount">
            <ConfiguraesTemplates
              rootClassName="configuraes-templates-root-class-name"
              className=""
            ></ConfiguraesTemplates>
          </div>
          <ProfileTemplates
            rootClassName="profile-templates-root-class-name"
            className=""
          ></ProfileTemplates>
        </div>
      </div>
    </div>
  )
}

MenuLateralTemplates.defaultProps = {
  Pesquisa: 'Pesquisas',
  rootClassName4: '',
  Elementos: 'Elementos',
  rootClassName4111111: '',
  rootClassName321: '',
  rootClassName4111: '',
  rootClassName4111131111111: '',
  rootClassName41111: '',
  rootClassName12: '',
  rootClassName412: '',
  rootClassName121: '',
  rootClassName422: '',
  Paginas: 'Páginas',
  Sidebars: 'Sidebars',
  rootClassName11: '',
  Headers: 'Headers',
  rootClassName411113111: '',
  rootClassName3: '',
  Satatus: 'Status',
  Features: 'Features',
  Funis: 'Funil de vendas',
  MenusNav: 'Menus de navegação',
  rootClassName41: '',
  rootClassName41111111: '',
  rootClassName41111311111: '',
  rootClassName42: '',
  rootClassName4111141: '',
  Botoes: 'Botões',
  rootClassName4111132: '',
  rootClassName32: '',
  rootClassName4112: '',
  rootClassName43: '',
  Price: 'Precificação',
  RecuperarSenha: 'Recuperar Senha',
  rootClassName411111: '',
  rootClassName1: '',
  Cadastro: 'Cadastro',
  rootClassName411112: '',
  Banners: 'Banners',
  rootClassName41131: '',
  rootClassName4113: '',
  Dropdowns: 'Dropdowns',
  Icones: 'Ícones',
  Depoimentos: 'Depoimentos',
  rootClassName4111131111: '',
  rootClassName411113: '',
  rootClassName22: '',
  Cards: 'Cards',
  rootClassName41111311: '',
  rootClassName31: '',
  Tabelas: 'Tabelas',
  Steps: 'Steps',
  Timelines: 'Timelines',
  rootClassName411: '',
  Login: 'Login',
  rootClassName: '',
  rootClassName2: '',
  rootClassName411113111111: '',
  rootClassName421: '',
  Listas: 'Listas',
  rootClassName221: '',
  Hero: 'Hero Sections',
  rootClassName411114: '',
  rootClassName21: '',
  Footers: 'Footers',
  rootClassName4111131: '',
  Secoes: 'Seções',
  MidiasSociais: 'Mídias Sociais',
  Navegacao: 'Navegação',
  rootClassName41111311111111: '',
  rootClassName41112: '',
  Galerias: 'Galerias',
  Textos: 'Textos',
}

MenuLateralTemplates.propTypes = {
  Pesquisa: PropTypes.string,
  rootClassName4: PropTypes.string,
  Elementos: PropTypes.string,
  rootClassName4111111: PropTypes.string,
  rootClassName321: PropTypes.string,
  rootClassName4111: PropTypes.string,
  rootClassName4111131111111: PropTypes.string,
  rootClassName41111: PropTypes.string,
  rootClassName12: PropTypes.string,
  rootClassName412: PropTypes.string,
  rootClassName121: PropTypes.string,
  rootClassName422: PropTypes.string,
  Paginas: PropTypes.string,
  Sidebars: PropTypes.string,
  rootClassName11: PropTypes.string,
  Headers: PropTypes.string,
  rootClassName411113111: PropTypes.string,
  rootClassName3: PropTypes.string,
  Satatus: PropTypes.string,
  Features: PropTypes.string,
  Funis: PropTypes.string,
  MenusNav: PropTypes.string,
  rootClassName41: PropTypes.string,
  rootClassName41111111: PropTypes.string,
  rootClassName41111311111: PropTypes.string,
  rootClassName42: PropTypes.string,
  rootClassName4111141: PropTypes.string,
  Botoes: PropTypes.string,
  rootClassName4111132: PropTypes.string,
  rootClassName32: PropTypes.string,
  rootClassName4112: PropTypes.string,
  rootClassName43: PropTypes.string,
  Price: PropTypes.string,
  RecuperarSenha: PropTypes.string,
  rootClassName411111: PropTypes.string,
  rootClassName1: PropTypes.string,
  Cadastro: PropTypes.string,
  rootClassName411112: PropTypes.string,
  Banners: PropTypes.string,
  rootClassName41131: PropTypes.string,
  rootClassName4113: PropTypes.string,
  Dropdowns: PropTypes.string,
  Icones: PropTypes.string,
  Depoimentos: PropTypes.string,
  rootClassName4111131111: PropTypes.string,
  rootClassName411113: PropTypes.string,
  rootClassName22: PropTypes.string,
  Cards: PropTypes.string,
  rootClassName41111311: PropTypes.string,
  rootClassName31: PropTypes.string,
  Tabelas: PropTypes.string,
  Steps: PropTypes.string,
  Timelines: PropTypes.string,
  rootClassName411: PropTypes.string,
  Login: PropTypes.string,
  rootClassName: PropTypes.string,
  rootClassName2: PropTypes.string,
  rootClassName411113111111: PropTypes.string,
  rootClassName421: PropTypes.string,
  Listas: PropTypes.string,
  rootClassName221: PropTypes.string,
  Hero: PropTypes.string,
  rootClassName411114: PropTypes.string,
  rootClassName21: PropTypes.string,
  Footers: PropTypes.string,
  rootClassName4111131: PropTypes.string,
  Secoes: PropTypes.string,
  MidiasSociais: PropTypes.string,
  Navegacao: PropTypes.string,
  rootClassName41111311111111: PropTypes.string,
  rootClassName41112: PropTypes.string,
  Galerias: PropTypes.string,
  Textos: PropTypes.string,
}

export default MenuLateralTemplates
