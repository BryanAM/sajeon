import React from 'react'
import { render, screen } from '@testing-library/react'
import MooncakesAddWords from '../MooncakesAddWords';
import { databaseDataMock } from '../../../__mocks__/databaseDataMock';

describe('Mooncakes Add Words', () => {
  it('renders', () => {
    render(<MooncakesAddWords />)
  });
}); 
