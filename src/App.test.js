import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders text on app page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello and welcome/i);
  expect(linkElement).toBeInTheDocument();
  const paragraph = getByText(/such portfolio/i);
  expect(paragraph).toBeInTheDocument();
});
