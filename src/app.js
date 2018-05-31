import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Article from './views/article'
import Home from './views/home'
import Layout from './views/layout'
import Login from './views/login'

const App = ({ user }) => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/article/:slug" component={Article} />
      <Route path="/login" component={Login} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </Layout>
)

export default App
