import styled from 'styled-components'

import colors from './../../config/colors'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
margin: ${props => props.margin};
`

const Label = styled.label`
font-family: 'OpenSans-SemiBold';
color: #333;
margin-bottom: .2rem;
`

const Input = styled.input`
padding: .7rem .5rem;
color: #777;
border: 2px solid #777;
${props => props.error && `border-color: ${colors.error}`};

&:focus {
  color: #333;
  border-color: #333;
}
`

export default {
  Wrapper,
  Label,
  Input
}
