import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders text on app page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello 123/i);
  expect(linkElement).toBeInTheDocument();
  const paragraph = getByText(/Enable Dark Mode!/i);
  expect(paragraph).toBeInTheDocument();
  const extra = getByText(/Does this fit?/i);
  expect(extra).tBeInTheDocument();
  const andthis = getByText(/And this?/i);
  expect(andthis).toBeInTheDocument();
  const Developer = getByText(/Developer/i);
  expect(Developer).toBeInTheDocument();
});
