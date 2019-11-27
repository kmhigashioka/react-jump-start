import React from 'react';
import { THomePageContext } from './types';

const HomePageContext = React.createContext<THomePageContext | undefined>(
  undefined,
);

HomePageContext.displayName = 'HomePageContext';

export const useHomePageContext = (): THomePageContext => {
  const context = React.useContext(HomePageContext);
  if (context === undefined) {
    throw new Error(
      'useHomePageContext must be used within a HomePageContextProvider.',
    );
  }
  return context;
};

export default HomePageContext;
