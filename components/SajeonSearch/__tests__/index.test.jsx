import React from 'react'
import { fireEvent, getByText, queryByRole, render, screen, waitFor } from '@testing-library/react'
import SajeonSearch from '../SajeonSearch';

describe('Sajeon Title', () => {
  it('renders with text', () => {
    const results = render(<SajeonSearch />)

    const element = results.container.querySelector('#search');
    expect(element).toBeInTheDocument();
  });

  it('sets input value is props', () => {
    const results = render(<SajeonSearch inputValue="search item"/>)

    const input = results.container.querySelector('input');
    expect(input.value).toBe('search item');
  });

  it('changes input when a user types into the field', async () => {
    const mockFormAction = jest.fn();
    const results = render(<SajeonSearch formAction={mockFormAction}/>)
    const submitButton = getByText(results.container, 'Search');
    const input = results.container.querySelector('input');

    fireEvent.change(input, { target: { value: 'Study' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(input.value).toBe('Study');
      expect(mockFormAction).toHaveBeenCalled();
    });
  });
});
