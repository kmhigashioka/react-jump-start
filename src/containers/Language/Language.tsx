import React from 'react';
import { IntlProvider } from 'react-intl';
import LanguageContext from './LanguageContext';
import { LanguageProps } from './types';

const Language: React.FC<LanguageProps> = ({ children, messages }) => {
  const localeLanguage = navigator.language.split('-')[0];
  const [locale, setLocale] = React.useState(localeLanguage);
  const languageState = { setLocale };

  return (
    <LanguageContext.Provider value={languageState}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default Language;
