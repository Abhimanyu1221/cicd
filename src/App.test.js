import { render, screen } from '@testing-library/react';
import App from './App';

test('initial counter value must be zero', () => {
  render(<App />);

  const counterElement = screen.getByTestId('counter-display');
  expect(counterElement.textContent).toBe("10");
});
