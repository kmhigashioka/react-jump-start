import React from 'react';
import { TAppContext } from './types';

const AppContext = React.createContext<TAppContext | undefined>(undefined);

AppContext.displayName = 'AppContext';

export const useAppContext = (): TAppContext => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppContextProvider.');
  }
  return context;
};

export default AppContext;
