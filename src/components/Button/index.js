import React from 'react'
import { string } from 'prop-types'

import Components from './components'

const Button = ({ label, color, fullWidth, onClick }) => (
  <Components.Button
    color={color}
    fullWidth={fullWidth}
    onClick={onClick}
  >
    {label}
  </Components.Button>
)

Button.propTypes = {
  color: string
}

Button.defaultProps = {
  color: 'primary'
}

export default Button
