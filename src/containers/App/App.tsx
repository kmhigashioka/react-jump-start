import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AppProps } from './types';

import HomePage from '../HomePage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';

const App: React.FC<AppProps> = () => (
  <>
    <Helmet
      titleTemplate="%s - react-boilerplate"
      defaultTitle="react-boilerplate"
    >
      <meta name="description" content="" />
    </Helmet>
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </>
);

export default App;
