import React, { Component } from 'react'

import Components from './components'
import Input from './../../components/Input'
import Button from './../../components/Button'
import Imgs from './../../assets/imgs'
import { validateEmail, validatePassword } from './../../utils/validators'

class Login extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      error: {
        email: false,
        password: false
      }
    }
  }

  handleState = (field, value) => this.setState({ [field]: value })

  onSubmit = () => {
    const { history } = this.props
    const { email, password, error } = this.state

    if (validateEmail(email) && validatePassword(password)) {
      history.push('/usuarios')
    } else {
      if (!validateEmail(email)) {
        error.email = true
      } else {
        error.email = false
      }
      if (!validatePassword(password)) {
        error.password = true
      } else {
        error.password = false
      }
      this.setState({ error })
    }
  }

  render() {
    const { history } = this.props
    const { email, password, error } = this.state

    return (
      <Components.Wrapper>
        <Components.LeftSide>
          <Components.Background src={Imgs.background} alt="Background" />
        </Components.LeftSide>
        <Components.RightSide>
          <Components.Header>
            <Components.Logo>
              <Components.Image src={Imgs.logo} alt="Logo" />
            </Components.Logo>
          </Components.Header>
          <Components.Content>
            <Input
              id="email"
              label="Email"
              margin="0 0 1rem"
              error={error.email}
              value={email}
              onChange={value => this.handleState('email', value)}
            />
            <Input
              type="password"
              id="password"
              label="Senha"
              margin="0 0 1rem"
              error={error.password}
              value={password}
              onChange={value => this.handleState('password', value)}
            />
            <Button
              label="LOGIN"
              fullWidth
              onClick={this.onSubmit}
            />
            <Components.SignUp onClick={() => history.push('/cadastro')}>Não possui cadastro? <strong>Cadastre-se</strong></Components.SignUp>
          </Components.Content>
        </Components.RightSide>
      </Components.Wrapper>
    )
  }
}

export default Login