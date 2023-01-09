import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import userEvent from '@testing-library/user-event';

describe('Home', () => {
  it('renders a header element', () => {
    render(<Home />);

    const header = screen.getByRole('banner');

    expect(header).toBeInTheDocument();
  });

  it('renders a main element', () => {
    render(<Home />);

    const main = screen.getByRole('main');

    expect(main).toBeInTheDocument();
  });

  it('renders a footer element', () => {
    render(<Home />);

    const footer = screen.getByRole('contentinfo');

    expect(footer).toBeInTheDocument();
  });

  it('clicking the header\'s logo opens the modal', async () => {
    render(<Home />);

    const headerLogo = screen.getByRole('button', {
      name: /impulso gov logo/i
    });

    expect(headerLogo).toBeInTheDocument();

    userEvent.click(headerLogo);

    const modalCombobox = await screen.findByRole('combobox', {
      name: /escolha um município/i
    });

    expect(modalCombobox).toBeInTheDocument();
  });
});
