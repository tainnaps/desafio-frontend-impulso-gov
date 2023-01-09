import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Modal from '../components/Modal';
import { data } from '../data/cities';
import userEvent from '@testing-library/user-event';

describe('Modal', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it('renders the close button', () => {
    render(<Modal />);

    const CLOSE_BTN_TEST_ID = 'modal-close-btn';
    const closeBtn = screen.getByTestId(CLOSE_BTN_TEST_ID);

    expect(closeBtn).toBeInTheDocument();
  });

  it('renders the combobox', () => {
    render(<Modal />);

    const combobox = screen.getByRole('combobox', {
      name: /escolha um município/i
    });

    expect(combobox).toBeInTheDocument();
  });

  it('typing in the combobox filters the it\'s options', async () => {
    render(<Modal />);
    const [maraaCity] = data;

    const combobox = screen.getByRole('combobox', {
      name: /escolha um município/i
    });

    expect(combobox).toBeInTheDocument();

    userEvent.type(combobox, maraaCity.nome);

    const maraaOption = await screen.findByText(/maraã, am/i);

    expect(maraaOption).toBeInTheDocument();
  });

  it('calls local storage getItem when mounted', async () => {
    render(<Modal />);

    const STORAGE_KEY = 'city';

    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem).toHaveBeenCalledWith(STORAGE_KEY);
  });
});
