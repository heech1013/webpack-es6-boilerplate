import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Sample from '@/pages/Sample'

const App = () => (
  <Router>
    <Switch>
        <Route path="/" component={Sample} />
    </Switch>
  </Router>
)

export default App