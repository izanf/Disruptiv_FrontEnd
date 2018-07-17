import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import store, { history } from './store'

import Login from './containers/Login'
import Register from './containers/Register'
import Users from './containers/Users'

const Routes = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/cadastro" component={Register} />
        <Route exact path="/usuarios" component={Users} />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

export default Routes
