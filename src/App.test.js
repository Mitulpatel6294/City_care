import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hospital brand name', () => {
  render(<App />);
  expect(screen.getByLabelText(/City Care Hospital Home/i)).toBeInTheDocument();
});
