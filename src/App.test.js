import App from './App';
import { render, screen } from '@testing-library/react';
import Test from './components/Test';

test('Always true test', () => {
  expect(true).toBe.true;
});

test('Heading should be Vite + React', () => {
  render(<App />);

  const headingElement = screen.getByText('Vite + React');

  expect(headingElement).toBeInTheDocument();
});

test('Heading should be Vite + React', () => {
  render(<Test />);

  const headingElement = screen.getByText('Hello');

  expect(headingElement).toBeInTheDocument();
});
