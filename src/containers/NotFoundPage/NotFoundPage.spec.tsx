import React from 'react';
import { render } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

describe('<NotFoundPage />', () => {
  it('should have Not Found text', () => {
    const { getByText } = render(<NotFoundPage />);

    expect(getByText('Not Found.')).toBeInTheDocument();
  });
});
