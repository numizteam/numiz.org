import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('dummy test', () => {
  render(<App />);
  expect(true).toBe(true);
});
