import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders text on app page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Dylan Meivis/i);
  expect(linkElement).toBeInTheDocument();
});
