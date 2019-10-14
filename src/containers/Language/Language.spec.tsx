import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Language, { LanguageContext, useIntl } from './index';
import { translationMessages } from './i18n';

describe('<Language />', () => {
  it('should able to change locale', () => {
    const { getByText } = render(
      <Language messages={translationMessages}>
        <Component />
      </Language>,
    );

    const filRadio = getByText('fil');
    fireEvent.click(filRadio);

    const homePageTranslatedText = getByText('PahinangTahanan');
    expect(homePageTranslatedText).toBeInTheDocument();
  });
});

function Component(): React.ReactElement {
  const languageState = React.useContext(LanguageContext);
  const { formatMessage: f } = useIntl();

  return (
    <>
      <span>{f({ id: 'containers.HomePage.title' })}</span>
      <input
        id="en"
        type="radio"
        name="locale"
        onClick={(): void => languageState.setLocale('en')}
      />
      <label htmlFor="en">en</label>
      <input
        id="fil"
        type="radio"
        name="locale"
        onClick={(): void => languageState.setLocale('fil')}
      />
      <label htmlFor="fil">fil</label>
    </>
  );
}
