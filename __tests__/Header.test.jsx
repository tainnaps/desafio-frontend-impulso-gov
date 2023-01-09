import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
  it('renders a link to home page', () => {
    render(<Header />);

    const homeLink = screen.getByRole('link', {
      name: /home/i
    });

    expect(homeLink).toBeInTheDocument();
  });

  it('renders the Impulso Gov clickable logo', () => {
    render(<Header />);

    const clickableLogo = screen.getByRole('button', {
      name: /impulso gov logo/i
    });

    expect(clickableLogo).toBeInTheDocument();
  });
});
