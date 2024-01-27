import React from 'react'
import { render, screen } from '@testing-library/react'
import MoonCakesEditDialogue from '../MoonCakesEditDialogue';
import userEvent from '@testing-library/user-event'
import { databaseDataMock } from '../../../__mocks__/databaseDataMock';

describe('Mooncakes Edit Dialogue', () => {
  it('renders trigger button', () => {
    render(<MoonCakesEditDialogue word={databaseDataMock[0]}/>)
    const title = screen.getByText('Edit Data');
    expect(title).toBeInTheDocument();
  });


  it('opens dialouge', async () => {
    render(<MoonCakesEditDialogue word={databaseDataMock[0]}/>)
    const dialogueTrigger = screen.getByRole('button', { name: 'Edit Data'})
    
    await userEvent.click(dialogueTrigger);

    const dialogueTitle = screen.getByText('Editing: 사랑');
    expect(dialogueTitle).toBeInTheDocument();

    const title = screen.getByText('Editing: 사랑');
    expect(title).toBeInTheDocument();
  });


}); 
