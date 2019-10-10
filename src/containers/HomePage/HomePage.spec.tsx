import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './HomePage';

describe('<HomePage />', () => {
  it('should have HomePage text', () => {
    const { getByText } = render(<HomePage />);

    expect(getByText('HomePage')).toBeInTheDocument();
  });
});
