import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchUsers } from './../../store/users'

import Components from './components'

class Users extends Component {
  componentDidMount() {
    const { fetchUsers } = this.props

    fetchUsers()
  }

  renderUsers = () => {
    const { users } = this.props

    return users.map(user => (
      <Components.TR key={user.id}>
        <Components.TD>{user.id}</Components.TD>
        <Components.TD>{user.name}</Components.TD>
        <Components.TD>{user.company.name}</Components.TD>
        <Components.TD>{user.company.bs}</Components.TD>
        <Components.TD>{user.address.city}</Components.TD>
        <Components.TD>{user.website}</Components.TD>
      </Components.TR>
    ))
  }

  render() {

    return (
      <Components.Wrapper>
        <Components.Title>Users</Components.Title>
        <Components.Table>
          <Components.TableHeader>
            <Components.TR>
              <Components.TH>#ID</Components.TH>
              <Components.TH>Name</Components.TH>
              <Components.TH>Empresa</Components.TH>
              <Components.TH>Skills</Components.TH>
              <Components.TH>Cidade</Components.TH>
              <Components.TH>Website</Components.TH>
            </Components.TR>
          </Components.TableHeader>
          <Components.TableBody>
            {this.renderUsers()}
          </Components.TableBody>
        </Components.Table>
      </Components.Wrapper>
    )
  }
}

export default connect(
  store => ({
    users: store.users.data
  }),
  dispatch => bindActionCreators({
    fetchUsers
  }, dispatch)
)(Users)