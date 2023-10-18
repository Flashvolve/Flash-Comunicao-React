import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './landing-growth.css'

const LandingGrowth = (props) => {
  return (
    <div className="landing-growth-container">
      <Helmet>
        <title>Landing-Growth - Flash - Comunicação</title>
        <meta
          property="og:title"
          content="Landing-Growth - Flash - Comunicação"
        />
      </Helmet>
      <div className="landing-growth-nav-bar">
        <header data-role="Header" className="landing-growth-header">
          <img
            src="https://res.cloudinary.com/dd9puomgu/image/upload/v1694633353/fugbhxzuh0jv04sext38.svg"
            className="landing-growth-image"
          />
          <div className="landing-growth-nav">
            <span className="landing-growth-text">Produto</span>
            <span className="landing-growth-text01">Como funciona</span>
            <span className="landing-growth-text02">É para você</span>
            <span className="landing-growth-text03">Preço</span>
            <span className="landing-growth-text04">Para Grandes Empresas</span>
          </div>
        </header>
      </div>
      <div className="landing-growth-hero-section">
        <div className="landing-growth-container01">
          <div className="landing-growth-container02">
            <span className="landing-growth-text05">
              Contrate o seu primeiro
            </span>
            <span className="landing-growth-text06">
              <span className="landing-growth-text07">
                SDR
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="landing-growth-text08">iA</span>
            </span>
            <span className="landing-growth-text09">
              <span>Aumente suas reuniões. Economize.</span>
              <br></br>
              <span>Assista o seu negócio prosperar.</span>
            </span>
            <button type="button" className="landing-growth-button button">
              <span className="landing-growth-text13">
                <span>AGENDE UMA REUNIÃO</span>
                <br></br>
              </span>
            </button>
          </div>
          <div className="landing-growth-container03">
            <img
              alt="image"
              src="https://res.cloudinary.com/dd9puomgu/image/upload/v1694793656/l9mubmkcl3gb4g66m9cb.svg"
              className="landing-growth-image01"
            />
            <button type="button" className="landing-growth-button1 button">
              <span className="landing-growth-text16">
                <span>AGENDE UMA REUNIÃO</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="landing-growth-clientes">
        <div className="landing-growth-title">
          <h1 className="landing-growth-text19">Confira quem confia em nós</h1>
        </div>
        <div className="landing-growth-logos">
          <img
            alt="image"
            src="/external/b31-200h-200h-200h.png"
            className="landing-growth-image02"
          />
          <img
            alt="image"
            src="/external/hypera-2-200h-200h.png"
            className="landing-growth-image03"
          />
          <img
            alt="image"
            src="/external/cbmm-200h-200h.png"
            className="landing-growth-image04"
          />
          <img
            alt="image"
            src="/external/santander-200h-200h.png"
            className="landing-growth-image05"
          />
          <img
            alt="image"
            src="/external/porto-200h-200h.png"
            className="landing-growth-image06"
          />
          <img
            alt="image"
            src="/external/sicredi-200h-200h.png"
            className="landing-growth-image07"
          />
          <img
            alt="image"
            src="/external/brq-200h-200h.png"
            className="landing-growth-image08"
          />
        </div>
      </div>
      <div className="landing-growth-produto">
        <div className="landing-growth-contedo">
          <div className="landing-growth-container04">
            <h1 className="landing-growth-text20">Produto</h1>
            <span className="landing-growth-text21">
              Veja os benefícios do Flash Growth
            </span>
          </div>
          <div className="landing-growth-container05">
            <div className="landing-growth-leads">
              <div className="landing-growth-container06">
                <div className="landing-growth-container07">
                  <img
                    alt="image"
                    src="https://api.iconify.design/material-symbols/social-leaderboard-outline-rounded.svg?color=%23dd1037"
                    className="landing-growth-image09"
                  />
                  <h2 className="landing-growth-heading">
                    <span>Leads Qualificados</span>
                    <br></br>
                  </h2>
                </div>
                <span className="landing-growth-text24">
                  <span className="landing-growth-text25">A Flash</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="landing-growth-text27">Growth</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="landing-growth-text29">
                    ajudará você a encontrar os melhores leads com um simples
                    clique.
                  </span>
                </span>
                <span className="landing-growth-text30">
                  A nossa inteligência artificial conectada com o nosso robusto
                  big data, fará a prospecção e identificará os leads ideais
                  para seu produto, ticket e setor. Tendo em vista melhores
                  horários, dias e sazonalidades.
                </span>
              </div>
            </div>
            <div className="landing-growth-reunies">
              <div className="landing-growth-container08">
                <div className="landing-growth-container09">
                  <img
                    alt="image"
                    src="https://api.iconify.design/mdi/virtual-meeting.svg?color=%23dd1037"
                    className="landing-growth-image10"
                  />
                  <h2 className="landing-growth-heading1">
                    <span>Agendar Reuniões</span>
                    <br></br>
                  </h2>
                </div>
                <span className="landing-growth-text33">
                  Agende reuniões com leads engajados para você no piloto
                  automático. A nossa IA aprenderá as objeções mesmo com leads
                  que aparentemente não estejam interessados enquanto a nutrição
                  constante abrirá novas possibilidades.
                </span>
              </div>
            </div>
          </div>
          <div className="landing-growth-content">
            <div className="landing-growth-container10">
              <div className="landing-growth-custos">
                <div className="landing-growth-container11">
                  <div className="landing-growth-container12">
                    <img
                      alt="image"
                      src="https://api.iconify.design/carbon/piggy-bank.svg?color=%23dd1037"
                      className="landing-growth-image11"
                    />
                    <h2 className="landing-growth-heading2">
                      <span>Redução de custos</span>
                      <br></br>
                    </h2>
                  </div>
                  <span className="landing-growth-text36">
                    <span className="landing-growth-text37">A Flash</span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="landing-growth-text39">Growth</span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="landing-growth-text41">
                      acelerará os agendamentos por uma fração do custo de um
                      SDR.
                    </span>
                  </span>
                  <span className="landing-growth-text42">
                    Otimize seus custos de SDR com a ajuda de integrações
                    robustas e com o uso de IA gerativa avançada superando seus
                    SDRs a 10% do custo. Nenhum prospecto jamais ficará
                    esquecido.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="landing-growth-cta">
            <button type="button" className="landing-growth-button2 button">
              <span>
                <span>AGENDE UMA REUNIÃO</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="landing-growth-como-funciona">
        <div className="landing-growth-container13">
          <div className="landing-growth-container14">
            <h1 className="landing-growth-text46">Como funciona</h1>
          </div>
          <div className="landing-growth-container15">
            <div className="landing-growth-container16">
              <div className="landing-growth-container17">
                <Script
                  html={`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/IWVJq-4zW24?si=EyAsji2amEshgHsD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`}
                ></Script>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-growth-a-quem-se-destina">
        <div className="landing-growth-cards">
          <div className="landing-growth-title1">
            <h1 className="landing-growth-text47">A quem se destina</h1>
            <span className="landing-growth-text48">
              Como a Flashvolve pode ajudar seus negócios crescerem
            </span>
          </div>
          <div className="landing-growth-show">
            <div className="landing-growth-startups">
              <div className="landing-growth-container18">
                <img
                  alt="image"
                  src="https://api.iconify.design/solar/rocket-2-outline.svg?color=%23dd1037"
                  className="landing-growth-image12"
                />
              </div>
              <h2 className="landing-growth-heading3">
                <span>Startups</span>
                <br></br>
              </h2>
              <span className="landing-growth-text51">
                A Flash Growth é perfeita para startups que ainda não possuem um
                SDR dedicado. Mantenha os custos fixos baixos para que você
                possa reinvestir a receita no crescimento de seu negócio e no
                lançamento de seu produto.
              </span>
            </div>
            <div className="landing-growth-marketing">
              <div className="landing-growth-container19">
                <img
                  alt="image"
                  src="https://api.iconify.design/fluent/arrow-growth-24-filled.svg?color=%23dd1037"
                  className="landing-growth-image13"
                />
              </div>
              <h2 className="landing-growth-heading4">
                <span>Marketing</span>
                <br></br>
              </h2>
              <span className="landing-growth-text54">
                <span>
                  A Flash Growth ajudará as equipes de marketing que estão tendo
                  dificuldades para conduzir leads internos ao longo de seu
                  funil sem a ajuda de SDRs.
                </span>
                <br></br>
              </span>
            </div>
            <div className="landing-growth-vendas">
              <div className="landing-growth-container20">
                <img
                  alt="image"
                  src="https://api.iconify.design/majesticons/dollar-circle-line.svg?color=%23dd1037"
                  className="landing-growth-image14"
                />
              </div>
              <h2 className="landing-growth-heading5">
                <span>Vendas</span>
                <br></br>
              </h2>
              <span className="landing-growth-text59">
                A Flash Growth apoiará empresas que não possuem equipes de
                prospecção ou desejam aumentar ou bater as metas de vendas.
                Amplie seu pipeline automatizando o processo de agendar novas
                chamadas de vendas em seu calendário.
              </span>
            </div>
          </div>
          <div className="landing-growth-cta1">
            <button type="button" className="landing-growth-button3 button">
              <span>
                <span>AGENDE UMA REUNIÃO</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="landing-growth-preo">
        <div className="landing-growth-container21">
          <div className="landing-growth-pricing">
            <div className="landing-growth-container22">
              <h1 className="landing-growth-text63">Investimento</h1>
            </div>
            <div className="landing-growth-container23">
              <div className="landing-growth-pricing-card">
                <div className="landing-growth-container24">
                  <span className="landing-growth-text64">5 REUNIões</span>
                </div>
                <div className="landing-growth-container25">
                  <div className="landing-growth-container26">
                    <span className="landing-growth-text65">R$</span>
                    <span className="landing-growth-text66">990</span>
                    <span className="landing-growth-text67">,00</span>
                  </div>
                  <div className="landing-growth-container27">
                    <span className="landing-growth-text68">
                      por mês no plano anual
                    </span>
                  </div>
                  <div className="landing-growth-container28"></div>
                </div>
                <div className="landing-growth-container29">
                  <span className="landing-growth-text69">✔ Onboarding</span>
                </div>
                <button className="landing-growth-button4 button">
                  Learn More
                </button>
              </div>
              <div className="landing-growth-pricing-card1">
                <div className="landing-growth-container30">
                  <span className="landing-growth-text70">10 REUNIões</span>
                </div>
                <div className="landing-growth-container31">
                  <div className="landing-growth-container32">
                    <span className="landing-growth-text71">R$</span>
                    <span className="landing-growth-text72">1.550</span>
                    <span className="landing-growth-text73">,00</span>
                  </div>
                  <div className="landing-growth-container33">
                    <span className="landing-growth-text74">
                      por mês no plano anual
                    </span>
                  </div>
                  <div className="landing-growth-container34"></div>
                </div>
                <div className="landing-growth-container35">
                  <span className="landing-growth-text75">✔ Onboarding</span>
                </div>
                <button className="landing-growth-button5 button">
                  Learn More
                </button>
              </div>
              <div className="landing-growth-pricing-card2">
                <div className="landing-growth-container36">
                  <span className="landing-growth-text76">15 REUNIões</span>
                </div>
                <div className="landing-growth-container37">
                  <div className="landing-growth-container38">
                    <span className="landing-growth-text77">R$</span>
                    <span className="landing-growth-text78">1.950</span>
                    <span className="landing-growth-text79">,00</span>
                  </div>
                  <div className="landing-growth-container39">
                    <span className="landing-growth-text80">
                      por mês no plano anual
                    </span>
                  </div>
                  <div className="landing-growth-container40"></div>
                </div>
                <div className="landing-growth-container41">
                  <span className="landing-growth-text81">✔ Onboarding</span>
                </div>
                <button className="landing-growth-button6 button">
                  Learn More
                </button>
              </div>
            </div>
            <button type="button" className="landing-growth-button7 button">
              <span className="landing-growth-text82">
                <span>AGENDE UMA REUNIÃO</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="landing-growth-footer">
        <div className="landing-growth-content1">
          <div className="landing-growth-container42">
            <div className="landing-growth-flashvolve">
              <img
                alt="image"
                src="/external/logo_bco-200h-200h.png"
                className="landing-growth-logo"
              />
            </div>
            <div className="landing-growth-solues">
              <div className="landing-growth-nav1">
                <span className="landing-growth-text85">Clientes</span>
                <span className="landing-growth-text86">Produto</span>
                <span className="landing-growth-text87">Como funciona</span>
                <span className="landing-growth-text88">É para você</span>
                <span className="landing-growth-text89">Preço</span>
              </div>
            </div>
            <div className="landing-growth-redes">
              <img
                alt="image"
                src="https://api.iconify.design/grommet-icons/instagram.svg?color=%23fccf00"
                className="landing-growth-image15"
              />
              <span className="landing-growth-text90">Instagram</span>
              <img
                alt="image"
                src="https://api.iconify.design/pajamas/linkedin.svg?color=%23fccf00"
                className="landing-growth-image16"
              />
              <span className="landing-growth-text91">LinkedIn</span>
            </div>
          </div>
          <div className="landing-growth-rodap">
            <p className="landing-growth-text92">
              <span>
                Flashvolve SAAS | Rua dos Pinheiros, nº 42 - São Paulo - SP | ©
                2023 Flashvolve todos os direitos reservados.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingGrowth
