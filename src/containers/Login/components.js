import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
`

const LeftSide = styled.aside`
width: 60%;
height: 100%;
`

const RightSide = styled.aside`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 40%;
height: 100%;
`

const Header = styled.div`
display: flex;
justify-content: center;
`

const Content = styled.div`
width: 350px;
`

const Logo = styled.figure``

const Image = styled.img``

const Background = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`

const SignUp = styled.button`
font-family: 'OpenSans-Light';
text-align: center;
width: 100%;
color: #555;
background: transparent;
border: none;
margin-top: .5rem;

strong {
  font-family: 'OpenSans-SemiBold';
}

&:hover {
  color: #333;
}

&:active {
  color: #555;
}
`

export default {
  Wrapper,
  LeftSide,
  RightSide,
  Content,
  Header,
  Logo,
  Image,
  Background,
  SignUp
}
