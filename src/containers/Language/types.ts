import React from 'react';

export interface LanguageProps {
  children: React.ReactNode;
  messages: TTranslationMessages;
}

export type TLanguageContext = {
  setLocale: (locale: string) => void;
};

export type TTranslationMessages = { [language: string]: {} };
