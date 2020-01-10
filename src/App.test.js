import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Welcome from './Welcome';

test('renders learn react link', () => {
  const { getByText } = render(<Welcome />);
  const linkElement = getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});
