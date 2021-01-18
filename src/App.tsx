import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import MatchingPage from "./pages/MatchingPage";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={MatchingPage} />
    </Switch>
  </Router>
);

export default App;
