import React from 'react';
import { Helmet } from 'react-helmet-async';

const NotFoundPage = () => (
  <>
    <Helmet>
      <title>Not Found</title>
      <meta name="description" content="Description of Not Found" />
    </Helmet>
    <div>Not Found.</div>
  </>
);

export default NotFoundPage;
