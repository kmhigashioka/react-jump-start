import React from 'react';
import { TLanguageContext } from './types';

const LanguageContext = React.createContext<TLanguageContext>({
  setLocale: () => {},
});

LanguageContext.displayName = 'LanguageContext';

export default LanguageContext;
