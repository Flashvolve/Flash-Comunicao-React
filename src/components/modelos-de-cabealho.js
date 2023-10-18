import React from 'react'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'
import './modelos-de-cabealho.css'

const ModelosDeCabealho = (props) => {
  return (
    <div
      className={`modelos-de-cabealho-modelos-de-cabealho ${props.rootClassName} `}
    >
      <header data-role="Header" className="modelos-de-cabealho-header1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="modelos-de-cabealho-image"
        />
        <div className="modelos-de-cabealho-nav">
          <nav className="modelos-de-cabealho-nav1">
            <span className="modelos-de-cabealho-text">{props.text}</span>
            <span className="modelos-de-cabealho-text1">{props.text1}</span>
            <span className="modelos-de-cabealho-text2">{props.text2}</span>
          </nav>
        </div>
        <div className="modelos-de-cabealho-btn-group">
          <button className="modelos-de-cabealho-login button">
            {props.Login}
          </button>
        </div>
        <div data-role="BurgerMenu" className="modelos-de-cabealho-burger-menu">
          <img
            alt={props.image_alt3}
            src={props.image_src3}
            className="modelos-de-cabealho-image1"
          />
        </div>
        <div data-role="MobileMenu" className="modelos-de-cabealho-mobile-menu">
          <div className="modelos-de-cabealho-nav2">
            <div className="modelos-de-cabealho-container">
              <img
                alt={props.image_alt6}
                src={props.image_src6}
                className="modelos-de-cabealho-image2"
              />
              <div
                data-role="CloseMobileMenu"
                className="modelos-de-cabealho-menu-close"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="modelos-de-cabealho-icon"
                >
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <NavigationLinks
              rootClassName="rootClassName11"
              className=""
            ></NavigationLinks>
          </div>
          <div className="">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="modelos-de-cabealho-icon02"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                className=""
              ></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="modelos-de-cabealho-icon04"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                className=""
              ></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="modelos-de-cabealho-icon06"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      </header>
      <header data-role="Header" className="modelos-de-cabealho-header2">
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="modelos-de-cabealho-image3"
        />
        <div className="modelos-de-cabealho-nav3">
          <nav className="modelos-de-cabealho-nav4">
            <span className="modelos-de-cabealho-text3">{props.text3}</span>
            <span className="modelos-de-cabealho-text4">{props.text4}</span>
            <span className="modelos-de-cabealho-text5">{props.text5}</span>
          </nav>
        </div>
        <div className="modelos-de-cabealho-btn-group1">
          <button className="modelos-de-cabealho-login1 button">
            {props.Login1}
          </button>
        </div>
        <div
          data-role="BurgerMenu"
          className="modelos-de-cabealho-burger-menu1"
        >
          <img
            alt={props.image_alt4}
            src={props.image_src4}
            className="modelos-de-cabealho-image4"
          />
        </div>
        <div
          data-role="MobileMenu"
          className="modelos-de-cabealho-mobile-menu1"
        >
          <div className="modelos-de-cabealho-nav5">
            <div className="modelos-de-cabealho-container1">
              <img
                alt={props.image_alt7}
                src={props.image_src7}
                className="modelos-de-cabealho-image5"
              />
              <div
                data-role="CloseMobileMenu"
                className="modelos-de-cabealho-menu-close1"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="modelos-de-cabealho-icon08"
                >
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <NavigationLinks
              rootClassName="rootClassName8"
              className=""
            ></NavigationLinks>
          </div>
          <div className="">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="modelos-de-cabealho-icon10"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                className=""
              ></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="modelos-de-cabealho-icon12"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                className=""
              ></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="modelos-de-cabealho-icon14"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      </header>
      <header data-role="Header" className="modelos-de-cabealho-header3">
        <img
          alt={props.image_alt2}
          src={props.image_src2}
          className="modelos-de-cabealho-image6"
        />
        <div className="modelos-de-cabealho-nav6">
          <nav className="modelos-de-cabealho-nav7">
            <span className="modelos-de-cabealho-text6">{props.text6}</span>
            <span className="modelos-de-cabealho-text7">{props.text7}</span>
            <span className="modelos-de-cabealho-text8">{props.text8}</span>
          </nav>
        </div>
        <div className="modelos-de-cabealho-btn-group2">
          <button className="modelos-de-cabealho-login2 button">
            {props.Login2}
          </button>
        </div>
        <div
          data-role="BurgerMenu"
          className="modelos-de-cabealho-burger-menu2"
        >
          <img
            alt={props.image_alt5}
            src={props.image_src5}
            className="modelos-de-cabealho-image7"
          />
        </div>
        <div
          data-role="MobileMenu"
          className="modelos-de-cabealho-mobile-menu2"
        >
          <div className="modelos-de-cabealho-nav8">
            <div className="modelos-de-cabealho-container2">
              <img
                alt={props.image_alt8}
                src={props.image_src8}
                className="modelos-de-cabealho-image8"
              />
              <div
                data-role="CloseMobileMenu"
                className="modelos-de-cabealho-menu-close2"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="modelos-de-cabealho-icon16"
                >
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <NavigationLinks
              rootClassName="rootClassName9"
              className=""
            ></NavigationLinks>
          </div>
          <div className="">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="modelos-de-cabealho-icon18"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                className=""
              ></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="modelos-de-cabealho-icon20"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                className=""
              ></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="modelos-de-cabealho-icon22"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
  )
}

ModelosDeCabealho.defaultProps = {
  rootClassName: '',
  image_src7:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  image_src3: 'https://api.iconify.design/ic/round-menu.svg?color=%23fccf00',
  image_alt4: 'image',
  image_src5: 'https://api.iconify.design/ic/round-menu.svg?color=black',
  image_alt6: 'image',
  Login2: 'Login',
  text5: 'Fale conosco',
  Login1: 'Login',
  image_alt3: 'image',
  text4: 'Sobre nós',
  image_alt2: 'logo',
  text: 'Soluções',
  image_alt8: 'image',
  image_alt1: 'logo',
  image_src8:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  text2: 'Fale conosco',
  Login: 'Login',
  image_src2:
    'https://res.cloudinary.com/dd9puomgu/image/upload/v1696512993/rqgf2ndrdifaity9hes2.png',
  image_src6:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  image_alt5: 'image',
  image_src1:
    'https://res.cloudinary.com/dd9puomgu/image/upload/v1696512252/lvpkjmbx0a9xapjxt3hr.png',
  text8: 'Fale conosco',
  image_src:
    'https://res.cloudinary.com/dd9puomgu/image/upload/v1696513070/psdmqyxsdq5rnoedznco.png',
  text1: 'Sobre nós',
  text7: 'Sobre nós',
  image_src4: 'https://api.iconify.design/ic/round-menu.svg?color=black',
  text3: 'Soluções',
  image_alt: 'logo',
  image_alt7: 'image',
  text6: 'Soluções',
}

ModelosDeCabealho.propTypes = {
  rootClassName: PropTypes.string,
  image_src7: PropTypes.string,
  image_src3: PropTypes.string,
  image_alt4: PropTypes.string,
  image_src5: PropTypes.string,
  image_alt6: PropTypes.string,
  Login2: PropTypes.string,
  text5: PropTypes.string,
  Login1: PropTypes.string,
  image_alt3: PropTypes.string,
  text4: PropTypes.string,
  image_alt2: PropTypes.string,
  text: PropTypes.string,
  image_alt8: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src8: PropTypes.string,
  text2: PropTypes.string,
  Login: PropTypes.string,
  image_src2: PropTypes.string,
  image_src6: PropTypes.string,
  image_alt5: PropTypes.string,
  image_src1: PropTypes.string,
  text8: PropTypes.string,
  image_src: PropTypes.string,
  text1: PropTypes.string,
  text7: PropTypes.string,
  image_src4: PropTypes.string,
  text3: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt7: PropTypes.string,
  text6: PropTypes.string,
}

export default ModelosDeCabealho
