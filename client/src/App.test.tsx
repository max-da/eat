import { render, screen } from '@testing-library/react';

import App from './App';

test('if App component renders correctly', () => {
  render(<App />);

  expect(screen.getByText(/Hornstulls strand/)).toBeInTheDocument();
});