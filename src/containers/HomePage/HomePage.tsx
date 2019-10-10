import React from 'react';
import { Helmet } from 'react-helmet';
import HomePageContext from './HomePageContext';

const HomePage = () => (
  <HomePageContext.Provider value={{}}>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="Description of Home" />
    </Helmet>
    <div>HomePage</div>
  </HomePageContext.Provider>
);

export default HomePage;
