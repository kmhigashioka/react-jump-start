import React from 'react';
import { render } from '@testing-library/react';
import Language from './Language';

describe('<Language />', () => {
  it('should have Language text', () => {
    const { getByText } = render(<Language />);

    expect(getByText('Language')).toBeInTheDocument();
  });
});
