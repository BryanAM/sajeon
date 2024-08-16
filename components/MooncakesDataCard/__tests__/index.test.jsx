import React from 'react'
import { render, screen } from '@testing-library/react'
import MooncakesDataCard from '../MooncakesDataCard';
import { databaseDataMock } from '../../../__mocks__/databaseDataMock';

describe('Mooncakes Data Card', () => {
  it('renders', () => {
    render(<MooncakesDataCard word={databaseDataMock[0]}/>)

    const romaja = screen.getByText('sarang');
    expect(romaja).toBeInTheDocument();

    const word = screen.getByText('사랑');
    expect(word).toBeInTheDocument();

    const hanja = screen.getByText('愛');
    expect(hanja).toBeInTheDocument();

    const pos = screen.getByText('noun');
    expect(pos).toBeInTheDocument();

    const korean = screen.getByText('Korean: 그녀는 그에게 사랑을 고백했다.');
    expect(korean).toBeInTheDocument();
    
    const english = screen.getByText('English: She confessed her love to him.');
    expect(english).toBeInTheDocument();
  });
}); 
