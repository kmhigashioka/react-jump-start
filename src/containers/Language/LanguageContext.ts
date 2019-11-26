import React from 'react';
import { TLanguageContext } from './types';

const LanguageContext = React.createContext<TLanguageContext | undefined>(
  undefined,
);

LanguageContext.displayName = 'LanguageContext';

export const useLanguageContext = (): TLanguageContext => {
  const context = React.useContext(LanguageContext);
  if (context === undefined) {
    throw new Error(
      'useLanguageContext must be used within a LanguageContextProvider.',
    );
  }
  return context;
};

export default LanguageContext;
