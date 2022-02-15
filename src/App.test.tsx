import { MemoryRouter } from 'react-router-dom';
import App from './App';
import React from 'react';
import { render, screen } from '@testing-library/react';

test('should show Home page text', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(
    screen.getByRole('heading', {
      name: /home page/i,
    })
  ).toBeVisible();
});
