import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer', () => {
  it('renders the Impulso Gov logo', () => {
    render(<Footer />);

    const impulsoGovLogo = screen.getByAltText(/impulso gov logo/i);

    expect(impulsoGovLogo).toBeInTheDocument();
  });
});
