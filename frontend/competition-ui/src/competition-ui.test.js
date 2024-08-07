import App from './App';
import { render, screen } from '@testing-library/react';
import Header from './components/Header';

test.skip('Heading should be Vite + React', () => {
  render(<App />);

  const headingElement = screen.getByText('Vite + React');

  expect(headingElement).toBeInTheDocument();
});

test('Header component renders the string Header', () => {
  render(<Header />);

  const headingElement = screen.getByText('Header');

  expect(headingElement).toBeInTheDocument();
});
