import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Brian Gebel', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Brian Gebel/i);
  expect(linkElement).toBeInTheDocument();
});
