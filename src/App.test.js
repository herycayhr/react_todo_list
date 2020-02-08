import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('open app and renders todo input', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Todo Input/i);
  expect(linkElement).toBeInTheDocument();
});


test('open app and renders todo list project', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Heryca's Todo List Projecto/i);
  expect(linkElement).toBeInTheDocument();
});
