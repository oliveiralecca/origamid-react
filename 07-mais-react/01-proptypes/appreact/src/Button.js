import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <button style={{ margin: props.margin, width: `${props.width}px`, height: `${props.width / 3}px` }}>
      {props.children}
    </button>
  )
}

// função do próprio React puro, não vem do PropTypes (valor padrão caso não seja definido na chamada do componente em App.js)
Button.defaultProps = {
  margin: "10px"
}

Button.propTypes = {
  width: PropTypes.number.isRequired,
  margin: PropTypes.string
}

export default Button

