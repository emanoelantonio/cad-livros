import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'react-app/jest';
import App from './App.js';

describe('App Component', () => {
  it('should be Render App Component', () => {
    render(<App />);
    const linkElement = screen.getByText(/App Component/i);
    expect(linkElement).toBeInTheDocument();
  });
});
