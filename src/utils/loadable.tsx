/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import React, { lazy, Suspense } from 'react';
import { RouteComponentProps, StaticContext } from 'react-router';

const loadable = (
  importFunc: () => Promise<{ default: React.ComponentType<any> }>,
  { fallback = null } = { fallback: null },
):
  | React.ComponentClass<any, any>
  | React.FunctionComponent<any>
  | React.ComponentClass<RouteComponentProps<any, StaticContext, any>, any>
  | React.FunctionComponent<RouteComponentProps<any, StaticContext, any>>
  | undefined => {
  const LazyComponent = lazy(importFunc);

  return (props: {}): React.ReactElement => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
