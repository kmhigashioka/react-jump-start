import React from 'react';
import { Helmet } from 'react-helmet-async';
import HomePageContext from './HomePageContext';

const HomePage = (): React.ReactElement => (
  <HomePageContext.Provider value={{}}>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="Description of Home" />
    </Helmet>
    <div>HomePage</div>
  </HomePageContext.Provider>
);

export default HomePage;
