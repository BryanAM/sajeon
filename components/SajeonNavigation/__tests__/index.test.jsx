import React from 'react'
import { render, screen } from '@testing-library/react'
import SajeonNavigation from '../SajeonNavigation';

describe('Sajeon Title', () => {
  it('renders with text', () => {
    render(<SajeonNavigation />)

    const element = screen.getByRole('navigation');
    expect(element).toBeInTheDocument();
  });
});
