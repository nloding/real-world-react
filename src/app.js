import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './views/home'
import Layout from './views/layout'
import Login from './views/login'

const App = ({ user }) => (
  <Layout user={user}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Redirect to="/" />
    </Switch>
  </Layout>
)

export { App }

export default connect(
  state => ({ user: state.account.user })
)(App)
