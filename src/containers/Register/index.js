import React, { Component } from 'react'

import Components from './components'
import Input from './../../components/Input'
import ProfilePicture from './../../components/ProfilePicture'

class Register extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      profileImage: []
    }
  }

  handleState = (field, value) => this.setState({ [field]: value })

  render() {
    return (
      <Components.Wrapper>
        <Components.Content>
          <Components.Title>Cadastro</Components.Title>
          <Input
            id="email"
            label="Email"
            margin=" 0 0 1rem"
            onChange={value => this.handleState('email', value)}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            margin=" 0 0 1rem"
            onChange={value => this.handleState('email', value)}
          />
          <ProfilePicture
            changeImage={value => this.handleState('profilePicture', value)}
          />
        </Components.Content>
      </Components.Wrapper>
    )
  }
}

export default Register