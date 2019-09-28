import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppProps } from './types';

import HomePage from '../HomePage';
import NotFoundPage from '../NotFoundPage';

const App: React.FC<AppProps> = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default App;