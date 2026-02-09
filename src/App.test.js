import { render, screen } from '@testing-library/react';
import App from './App';

test('initial counter value must be zero', () => {
  render(<App />);
  // We look for the element with the data-testid we added in App.js
  const counterElement = screen.getByTestId('counter-display');
  // We verify the logic: it should start at "0"
  expect(counterElement.textContent).toBe("0");
});