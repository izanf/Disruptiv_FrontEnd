import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
`

const Content = styled.div`
width: 500px;
padding: 1rem;
border: 2px solid #CCC;
border-radius: 3px;
`

const Title = styled.h1`
font-family: 'OpenSans-SemiBold';
text-align: center;
`

export default {
  Wrapper,
  Content,
  Title
}