import '@testing-library/jest-dom/extend-expect';
jest.mock('react-helmet-async', () => ({
  Helmet: (): null => null,
}));
