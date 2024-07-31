import { render, screen } from '@testing-library/react';
import Test from './Test';

test('Heading should be Vite + React', () => {
  render(<Test />);

  const headingElement = screen.getByText('Hello');

  expect(headingElement).toBeInTheDocument();
});
