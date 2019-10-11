import React from 'react';
import { IntlProvider } from 'react-intl';
import LanguageContext from './LanguageContext';
import { LanguageProps } from './types';
import { translationMessages } from './i18n';

const Language: React.FC<LanguageProps> = ({ children }) => {
  const localeLanguage = navigator.language.split('-').find(() => true) || 'en';
  const [locale, setLocale] = React.useState(localeLanguage);
  const languageState = { setLocale };

  return (
    <LanguageContext.Provider value={languageState}>
      <IntlProvider locale={locale} messages={translationMessages[locale]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default Language;
