import React from 'react'
import { render, screen } from '@testing-library/react'
import SajeonTitle from '../SajeonTitle';

describe('Sajeon Title', () => {
  it('renders with text', () => {
    render(<SajeonTitle text="Hello World!"></SajeonTitle>)

    const element = screen.getByText('Hello World!')
    expect(element).toBeInTheDocument();
  });
});
