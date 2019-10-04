import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

jest.mock('../HomePage/Loadable', () => () => 'MockHomePage');

jest.mock('../NotFoundPage/Loadable', () => () => 'MockNotFoundPage');

describe('<App />', () => {
  it('should able to navigate to /', () => {
    const { getByText } = render(<Component initialEntries={['/']} />);

    expect(getByText('MockHomePage')).toBeInTheDocument();
  });

  it('should redirect to Not Found when access an unable route', () => {
    const { getByText } = render(<Component initialEntries={['/not-found']} />);

    expect(getByText('MockNotFoundPage')).toBeInTheDocument();
  });
});

type ComponentProps = {
  initialEntries: string[] | undefined;
};

function Component({ initialEntries }: ComponentProps) {
  return (
    <MemoryRouter initialEntries={initialEntries}>
      <App />
    </MemoryRouter>
  );
}
