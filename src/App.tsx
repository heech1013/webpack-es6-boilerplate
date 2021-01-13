import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Matching from "./pages/Matching";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Matching} />
    </Switch>
  </Router>
);

export default App;
