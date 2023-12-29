import React from 'react'
import { render, screen } from '@testing-library/react'
import SajeonSearch from '../SajeonSearch';

describe('Sajeon Title', () => {
  it('renders with text', () => {
    const results = render(<SajeonSearch />)

    const element = results.container.querySelector('#search');
    expect(element).toBeInTheDocument();
  });
});
