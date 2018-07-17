import styled from 'styled-components'
import * as polished from 'polished'

import colors from './../../config/colors'

const Button = styled.button`
font-family: 'OpenSans-SemiBold';
${props => props.fullWidth && 'width: 100%;'};
color: #FFF;
background: ${props => colors[props.color]};
padding: .7rem 2rem;
border: 2px solid ${colors.primary};

&:active {
  background: ${props => polished.darken(0.05, colors[props.color])};
}
`

export default {
  Button
}
