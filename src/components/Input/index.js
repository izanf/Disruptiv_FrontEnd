import React from 'react'
import { string, bool, func } from 'prop-types'

import Components from './components'

const Input = ({ type, id, label, margin, error, onChange }) => (
  <Components.Wrapper margin={margin}>
    <Components.Label htmlFor={`input-${id}`}>{label}</Components.Label>
    <Components.Input
      type={type}
      id={`input-${id}`}
      error={error}
      onChange={e => onChange(e.target.value)}
    />
  </Components.Wrapper>
)

Input.propTypes = {
  type: string,
  id: string.isRequired,
  label: string,
  margin: string,
  error: bool,
  onChange: func.isRequired
}

Input.defaultProps = {
  type: 'text',
  label: '',
  margin: '0',
  error: false
}

export default Input
