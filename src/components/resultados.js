import React from 'react'

import PropTypes from 'prop-types'

import './resultados.css'

const Resultados = (props) => {
  return (
    <div className="resultados-resultados">
      <div className="resultados-economia">
        <div className="resultados-numeros">
          <span className="dashlead">Você economizou até o momento</span>
          <span className="resultados-text1">{props.text31}</span>
          <div className="resultados-container">
            <img
              alt="image"
              src="https://api.iconify.design/icon-park-solid/up-one.svg?color=%2300a89c"
              className="resultados-image"
            />
            <span className="resultados-text2">{props.text312}</span>
          </div>
          <div className="resultados-container1">
            <span className="resultados-text3 subtitulo">
              Atualizado hoje, às 10h56
            </span>
          </div>
        </div>
        <div className="resultados-grafico">
          <img
            alt="image"
            src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695067451/kfnw8qw8iuorqruwhwnv.svg"
            className="resultados-image1"
          />
        </div>
      </div>
      <div className="resultados-linha"></div>
      <div className="resultados-status">
        <img
          alt="image"
          src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695141867/d1caokjvqllbn3uweqim.svg"
          className="resultados-image2"
        />
        <div className="resultados-texto-status">
          <span className="resultados-text4 dashlead">
            O seu resultado até o momento comparado a empresas do mesmo segmento
            está: Acima da meta
          </span>
        </div>
      </div>
    </div>
  )
}

Resultados.defaultProps = {
  text312: '36,12%',
  rootClassName1: '',
  text31: 'R$ 41.654,78',
}

Resultados.propTypes = {
  text312: PropTypes.string,
  rootClassName1: PropTypes.string,
  text31: PropTypes.string,
}

export default Resultados
