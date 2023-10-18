import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './landing.css'

const Landing = (props) => {
  return (
    <div className="landing-container">
      <Helmet>
        <title>Landing - Flash - Comunicação</title>
        <meta property="og:title" content="Landing - Flash - Comunicação" />
      </Helmet>
      <div teste="teste" className="landing-nav-bar">
        <header data-role="Header" className="landing-header">
          <img src="/logo_bco-1500h.png" className="landing-image" />
          <div className="landing-nav">
            <span className="landing-text">Sobre nós</span>
            <span className="landing-text01">Soluções</span>
            <span className="landing-text02">Fale conosco</span>
          </div>
        </header>
      </div>
      <div className="landing-hero-section">
        <div className="landing-container01">
          <img
            alt="image"
            src="https://res.cloudinary.com/dd9puomgu/image/upload/v1694467062/thqbaxgvkacgtb8kl9cb.webp"
            className="landing-image01"
          />
        </div>
      </div>
      <div className="landing-apresentao">
        <img alt="image" src="/logo-500w.png" className="landing-image02" />
        <div className="landing-title">
          <h1 className="landing-text03">
            Flashvolve - Conectando ao pulso da inovação.
          </h1>
        </div>
        <div v-for="teste" className="landing-text-box">
          <span className="landing-text04">
            <span>PRAZER, SOMOS A FLASHVOLVE.</span>
            <br></br>
            <br></br>
            <span>
              No coração da evolução digital, encontra-se a Flashvolve. Somos
              uma Enterprise Tech especializada, dedicada a utilizar a
              inteligência artificial combinada à criatividade para engajar e
              otimizar os resultados de nossos clientes e colaboradores.
            </span>
            <br className="landing-text09"></br>
            <br></br>
            <span>
              Nossa plataforma permite que empresas estabeleçam conexões
              impactantes por meio de canais de comunicação essenciais, tais
              como WhatsApp, Instagram, Facebook, Telegram e Slack. Cada
              interação é concebida com precisão, garantindo comunicação eficaz
              e engajamento genuíno.
            </span>
            <br className="landing-text12"></br>
            <br></br>
            <span>
              Nossa equipe é composta por profissionais dedicados, sempre na
              vanguarda da inovação. Temos o compromisso constante de refinar e
              aprimorar as jornadas de comunicação, assegurando que cada
              interação seja única e impactante. Com a visão clara e o foco em
              resultados, sabemos que juntos alcançamos patamares mais elevados.
            </span>
            <br className="landing-text15"></br>
            <br></br>
            <span>
              A Flashvolve é construída por pessoas e para pessoas. Somos
              movidos pela paixão de entregar soluções de ponta, garantindo a
              satisfação e o engajamento de todos os envolvidos. Nosso
              reconhecimento é o sucesso e o crescimento constante de nossos
              parceiros e clientes.
            </span>
            <br className="landing-text18"></br>
            <br></br>
            <span>
              Nosso time é caracterizado pelo profissionalismo, pela sede de
              conhecimento e pelo compromisso em fazer a diferença. Estamos
              presentes no cenário global, com soluções que transcendem
              fronteiras, preparados para enfrentar os desafios do mercado
              atual.
            </span>
            <br className="landing-text21"></br>
            <br></br>
            <span>
              Em busca de talentos que partilhem da nossa visão e queiram
              contribuir para a revolução da comunicação, abrimos nossas portas
              para profissionais de todos os backgrounds e diversidades. Está
              pronto para fazer parte da nossa história? Aguardamos você.
            </span>
          </span>
        </div>
        <div className="landing-button-bar">
          <button type="button" className="landing-button button">
            <img
              alt="image"
              src="https://api.iconify.design/entypo-social/linkedin-with-circle.svg"
              className="landing-image03"
            />
            <span className="landing-text24">LinkedIn</span>
          </button>
          <button type="button" className="landing-button1 button">
            <img
              alt="image"
              src="https://api.iconify.design/ic/twotone-facebook.svg"
              className="landing-image04"
            />
            <span>Facebook</span>
          </button>
        </div>
        <div className="landing-images">
          <img
            alt="image"
            src="/sonhando-jovem-empresaria-africana-600w.png"
            className="landing-image05"
          />
          <img
            alt="image"
            src="/jovens-alegres-colegas-dentro-de-coworking-600w.png"
            className="landing-image06"
          />
        </div>
      </div>
      <div className="landing-cards">
        <div className="landing-container02">
          <div className="landing-title1">
            <h1>Benefícios</h1>
          </div>
          <div className="landing-show">
            <div className="landing-card1">
              <div className="landing-icon">
                <img
                  alt="image"
                  src="https://api.iconify.design/mdi/image-edit-outline.svg?color=%23fccf00"
                  className="landing-image07"
                />
              </div>
              <div className="landing-container03">
                <h2 className="landing-heading">
                  <span>Maximize seus resultados</span>
                  <br></br>
                </h2>
                <span className="landing-text29">
                  Somos uma Enterprise Tech que utiliza inteligência artificial
                  e criativa para engajar e maximizar os resultados dos seus
                  clientes e colaboradores.
                </span>
              </div>
            </div>
            <div className="landing-card3">
              <div className="landing-icon1">
                <img
                  alt="image"
                  src="https://api.iconify.design/mdi/image-edit-outline.svg?color=%23fccf00"
                  className="landing-image08"
                />
              </div>
              <div className="landing-container04">
                <h2 className="landing-heading1">
                  <span>Maximize seus resultados</span>
                  <br></br>
                </h2>
                <span className="landing-text32">
                  Somos uma Enterprise Tech que utiliza inteligência artificial
                  e criativa para engajar e maximizar os resultados dos seus
                  clientes e colaboradores.
                </span>
              </div>
            </div>
            <div className="landing-card31">
              <div className="landing-icon2">
                <img
                  alt="image"
                  src="https://api.iconify.design/mdi/image-edit-outline.svg?color=%23fccf00"
                  className="landing-image09"
                />
              </div>
              <div className="landing-container05">
                <h2 className="landing-heading2">
                  <span>Maximize seus resultados</span>
                  <br></br>
                </h2>
                <span className="landing-text35">
                  Somos uma Enterprise Tech que utiliza inteligência artificial
                  e criativa para engajar e maximizar os resultados dos seus
                  clientes e colaboradores.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-video">
        <div className="landing-content">
          <h1>Vídeo de apresentação</h1>
          <video
            src="https://youtu.be/GWV6feHUZE4?si=C_YyXKCyqw6bb8SQ"
            preload="auto"
            autoPlay
            className="landing-video1"
          ></video>
          <div className="landing-container06">
            <div className="landing-container07">
              <Script
                html={`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/GWV6feHUZE4?si=C_YyXKCyqw6bb8SQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`}
              ></Script>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-flashers">
        <div className="landing-container08">
          <div className="landing-title2">
            <h1>Somos Flashers! ⚡</h1>
          </div>
          <div className="landing-show1">
            <div className="landing-card11">
              <div className="landing-icon3">
                <img
                  alt="image"
                  src="/le%C3%AC%C2%81o-1500h.png"
                  className="landing-image10"
                />
              </div>
              <div className="landing-container09">
                <h2 className="landing-heading3">Leandro Alvarenga</h2>
                <span className="landing-text38">CEO</span>
                <span className="landing-text39">
                  Empreendedor experiente por 16 anos, líder na Prime Arte,
                  produtora de filmes para grandes corporações. CEO da
                  Flashvolve, empresa de tecnologia empresarial que usa IA e
                  criatividade para potencializar resultados de clientes e
                  colaboradores. Também é sócio fundador da Flashvolve.
                </span>
              </div>
            </div>
            <div className="landing-card2">
              <div className="landing-icon4">
                <img
                  alt="image"
                  src="/david-200h.png"
                  className="landing-image11"
                />
              </div>
              <div className="landing-container10">
                <h2 className="landing-heading4">David Ledson</h2>
                <span className="landing-text40">CEO</span>
                <span className="landing-text41">
                  Com mais de 20 anos de experiência em liderança,
                  desenvolvimento humano e organizacional, planejamento
                  estratégico, empreendedorismo e inovação, é sócio da Sólides,
                  investidor anjo e mentor em acelerações. Mestrado em
                  Administração pela UFMG e treinamento em liderança e inovação.
                </span>
              </div>
            </div>
            <div className="landing-card32">
              <div className="landing-icon5">
                <img
                  alt="image"
                  src="/whatsapp%20image%202022-08-23%20at%2013.54.29-200h.jpeg"
                  className="landing-image12"
                />
              </div>
              <div className="landing-container11">
                <h2 className="landing-heading5">
                  <span>Yago Fernandes</span>
                  <br></br>
                </h2>
                <span className="landing-text44">CTO</span>
                <span className="landing-text45">
                  Entusiasta e amante da tecnologia, CTO formado na IFTL e CTO
                  na Flashvolve. Focado em produto e gestão de pessoas.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-fale-conosco">
        <div className="landing-content1">
          <img
            alt="image"
            src="/grafismo-logo_amarelo-200h.png"
            className="landing-image13"
          />
          <h1 className="landing-text46">Quer fazer parte do nosso time?</h1>
          <span className="landing-text47">
            Acesse nosso formulário e cadastre-se em nosso banco de talentos.
          </span>
          <button type="button" className="landing-button2">
            <span>
              <span>Acessar Formulário</span>
              <br></br>
            </span>
          </button>
        </div>
      </div>
      <div className="landing-footer">
        <div className="landing-content2">
          <div className="landing-container12">
            <div className="landing-flashvolve">
              <img
                alt="image"
                src="/external/logo_bco-200h-200h.png"
                className="landing-logo"
              />
              <div className="landing-instagram">
                <img
                  alt="image"
                  src="https://api.iconify.design/grommet-icons/instagram.svg?color=%23fccf00"
                  className="landing-image14"
                />
                <span>Instagram</span>
              </div>
              <div className="landing-linked-in">
                <img
                  alt="image"
                  src="https://api.iconify.design/pajamas/linkedin.svg?color=%23fccf00"
                  className="landing-image15"
                />
                <span>LinkedIn</span>
              </div>
            </div>
            <div className="landing-solues">
              <ul className="landing-ul list">
                <li className="landing-li list-item">
                  <span className="landing-text53">Soluções</span>
                </li>
                <li className="landing-li01 list-item">
                  <span href="#growth" className="landing-text54">
                    Growth
                  </span>
                </li>
                <li className="landing-li02 list-item">
                  <span href="https://flashvolve.com/#solucoes">
                    Automação Criativa
                  </span>
                </li>
                <li className="landing-li03 list-item">
                  <span href="#predicao" className="landing-text56">
                    Predição
                  </span>
                </li>
                <li className="landing-li04 list-item">
                  <span href="#comunicacao" className="landing-text57">
                    Comunicação
                  </span>
                </li>
                <li className="landing-li05 list-item">
                  <span href="#saude-seguranca" className="landing-text58">
                    Saúde e Segurança
                  </span>
                </li>
              </ul>
            </div>
            <div className="landing-sobre-ns">
              <ul className="landing-ul1 list">
                <li className="landing-li06 list-item">
                  <span href="https://flashvolve.com/#solucoes">Sobre nós</span>
                </li>
                <li className="landing-li07 list-item">
                  <span
                    href="https://flashvolve.com/#sobre-nos"
                    className="landing-text60"
                  >
                    Clientes
                  </span>
                </li>
                <li className="landing-li08 list-item">
                  <span
                    href="https://flashvolve.com/#clientes"
                    className="landing-text61"
                  >
                    Benefícios
                  </span>
                </li>
                <li className="landing-li09 list-item">
                  <span
                    href="https://flashvolve.com/#faleconosco"
                    className="landing-text62"
                  >
                    Fale conosco
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="landing-rodap">
            <p className="landing-text63">
              <span>
                {' '}
                © 2023 Flashvolve todos os direitos reservados.
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

export default Landing
