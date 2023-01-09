import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import DataListItem from '../components/DataListItem';

describe('DataListItem', () => {
  it('renders the item\'s value passed through props', () => {
    const item = { value: 'One datalist item' };

    render(<DataListItem item={item} />);

    const itemValue = screen.getByText(item.value);

    expect(itemValue).toBeInTheDocument();
  });
});
