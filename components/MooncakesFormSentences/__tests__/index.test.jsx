import React from 'react'
import { render, screen } from '@testing-library/react'
import MooncakesFormSentences from '../MooncakesFormSentences';
import userEvent from '@testing-library/user-event'
import { databaseDataMock } from '../../../__mocks__/databaseDataMock';

describe('Mooncakes Form Sentences', () => {
  it('renders form sentence', () => {
    render(<MooncakesFormSentences word={databaseDataMock[0]}/>)
    const defaultSentence = screen.getByText('Sentence 1');
    expect(defaultSentence).toBeInTheDocument();
  });


  it('renders first sentence', () => {
    render(<MooncakesFormSentences word={databaseDataMock[0]}/>)
    const firstSentenceKr = screen.getByDisplayValue('그녀는 그에게 사랑을 고백했다.')
    const firstSentenceEn = screen.getByDisplayValue('She confessed her love to him.')
    expect(firstSentenceKr.value).toBe('그녀는 그에게 사랑을 고백했다.');
    expect(firstSentenceEn.value).toBe('She confessed her love to him.');
  });

  it('renders three sentences (6 textboxes)', () => {
    render(<MooncakesFormSentences word={databaseDataMock[0]}/>)
    const sentences = screen.getAllByRole('textbox');
    expect(sentences.length).toBe(6);
  });


  it('renders new sentence', async () => {
    render(<MooncakesFormSentences word={databaseDataMock[0]}/>)
    const addButtonTrigger = screen.getByRole('button', { name: 'Add Sentence'})
    await userEvent.click(addButtonTrigger);

    const sentences = screen.getAllByRole('textbox');
    expect(sentences.length).toBe(8);
  });


  it('renders two new sentences', async () => {
    render(<MooncakesFormSentences word={databaseDataMock[0]}/>)
    const addButtonTrigger = screen.getByRole('button', { name: 'Add Sentence'})
    await userEvent.click(addButtonTrigger);
    await userEvent.click(addButtonTrigger);

    const sentences = screen.getAllByRole('textbox');
    expect(sentences.length).toBe(10);
  });

  it('deletes a sentence', async () => {
    render(<MooncakesFormSentences word={databaseDataMock[0]}/>)
    const deleteButtons = screen.getAllByLabelText('delete icon')
    await userEvent.click(deleteButtons[1]);

    const sentences = screen.getAllByRole('textbox');
    expect(sentences.length).toBe(4);
  });

  it('deletes two sentences', async () => {
    render(<MooncakesFormSentences word={databaseDataMock[0]}/>)
    const deleteButtons = screen.getAllByLabelText('delete icon')
    // first delete button should be disabled
    await userEvent.click(deleteButtons[1]);
    await userEvent.click(deleteButtons[2]);

    const sentences = screen.getAllByRole('textbox');
    expect(sentences.length).toBe(2);
  });


  it('renders new sentence then deletes it', async () => {
    render(<MooncakesFormSentences word={databaseDataMock[0]}/>)
    const addButtonTrigger = screen.getByRole('button', { name: 'Add Sentence'})
    await userEvent.click(addButtonTrigger);

    const deleteButtons = screen.getAllByLabelText('delete icon')
    await userEvent.click(deleteButtons[2]);

    const sentences = screen.getAllByRole('textbox');
    expect(sentences.length).toBe(6);
  });

  it('renders new empty sentence then specifically deletes sentence', async () => {
    render(<MooncakesFormSentences word={databaseDataMock[0]}/>)
    const addButtonTrigger = screen.getByRole('button', { name: 'Add Sentence'})
    await userEvent.click(addButtonTrigger);

    const deleteButtons = screen.getAllByLabelText('delete icon')

    // last elem deleted ""
    await userEvent.click(deleteButtons[3]);

    const sentences = screen.getAllByLabelText('Korean')
  
    const validValues = ['그녀는 그에게 사랑을 고백했다.', '사랑은 인생의 가장 강력한 감정 중 하나입니다.', '그들은 서로 사랑하는 마음을 키워나갔다.'];
    sentences.forEach((def) => {
      expect(validValues).toContain(def.value)
    })
  });


  it('renders new blank sentence then specifically deletes second and third sentence', async () => {
    render(<MooncakesFormSentences word={databaseDataMock[0]}/>)
    const addButtonTrigger = screen.getByRole('button', { name: 'Add Sentence'})
    await userEvent.click(addButtonTrigger);

    const deleteButtons = screen.getAllByLabelText('delete icon')

    // second and third sentence deleted
    await userEvent.click(deleteButtons[1]);
    await userEvent.click(deleteButtons[2]);

    const sentences = screen.getAllByLabelText('Korean')
  
    const validValues = ['그녀는 그에게 사랑을 고백했다.', ''];
    sentences.forEach((def) => {
      expect(validValues).toContain(def.value)
    })
  })

  it('renders new sentence then specifically deletes third', async () => {
    render(<MooncakesFormSentences word={databaseDataMock[0]}/>)
    const addButtonTrigger = screen.getByRole('button', { name: 'Add Sentence'})
    await userEvent.click(addButtonTrigger);

    const deleteButtons = screen.getAllByLabelText('delete icon')

    // third sentence deleted
    await userEvent.click(deleteButtons[2]);

    const sentences = screen.getAllByLabelText('Korean')
  
    const validValues = ['그녀는 그에게 사랑을 고백했다.', '사랑은 인생의 가장 강력한 감정 중 하나입니다.', ''];
    sentences.forEach((def) => {
      expect(validValues).toContain(def.value)
    })
  })

  it('renders deletes everything but first sentence', async () => {
    render(<MooncakesFormSentences word={databaseDataMock[0]}/>)

    const addButtonTrigger = screen.getByRole('button', { name: 'Add Sentence'})
    await userEvent.click(addButtonTrigger);

    const deleteButtons = screen.getAllByLabelText('delete icon')

    // all but first sentence
    await userEvent.click(deleteButtons[1]);
    await userEvent.click(deleteButtons[2]);
    await userEvent.click(deleteButtons[3]);

    const sentences = screen.getAllByLabelText('Korean')
  
    const validValues = ['그녀는 그에게 사랑을 고백했다.'];
    sentences.forEach((def) => {
      expect(validValues).toContain(def.value)
    })
  })

  it('types in a new sentence', async () => {
    render(<MooncakesFormSentences word={databaseDataMock[0]}/>)
    const addButtonTrigger = screen.getByRole('button', { name: 'Add Sentence'})
    await userEvent.click(addButtonTrigger);

    const sentences = screen.getAllByLabelText('Korean')
    // new sentence in last korean text box
    await userEvent.type(sentences[sentences.length - 1], '행복은 종종 작은 것에서 찾을 수 있습니다.');

    expect(sentences[sentences.length - 1]).toHaveValue('행복은 종종 작은 것에서 찾을 수 있습니다.');
  })

  it('types in two new sentences, updates first and last', async () => {
    render(<MooncakesFormSentences word={databaseDataMock[0]}/>)
    const addButtonTrigger = screen.getByRole('button', { name: 'Add Sentence'})
    await userEvent.click(addButtonTrigger);

    const sentences = screen.getAllByLabelText('Korean')
    // new sentence in last korean text box
    // this first one will bascially add to end of first, not delete it
    await userEvent.type(sentences[0], '행복은 종종 작은 것에서 찾을 수 있습니다.');
    await userEvent.type(sentences[sentences.length - 1], '행복은 종종.');

    const validValues = ['그녀는 그에게 사랑을 고백했다.행복은 종종 작은 것에서 찾을 수 있습니다.', '사랑은 인생의 가장 강력한 감정 중 하나입니다.', '그들은 서로 사랑하는 마음을 키워나갔다.', '행복은 종종.'];
    sentences.forEach((def) => {
      expect(validValues).toContain(def.value)
    })
  })

  xit('types in two new sentences then deletes second to last one', async () => {
    render(<MooncakesFormSentences word={databaseDataMock[0]}/>)
    const addButtonTrigger = screen.getByRole('button', { name: 'Add Sentence'})
    await userEvent.click(addButtonTrigger);

    const sentences = screen.getAllByLabelText('Korean')
    // new sentence in last korean text box
    // this first one will bascially add to end of first, not delete it
    await userEvent.type(sentences[0], '행복은 종종 작은 것에서 찾을 수 있습니다.');
    await userEvent.type(sentences[sentences.length - 1], '행복은 종종.');

    const deleteButtons = screen.getAllByLabelText('delete icon')

    // all but first sentence
    await userEvent.click(deleteButtons[deleteButtons.length - 2]);

    const validValues = ['그녀는 그에게 사랑을 고백했다.행복은 종종 작은 것에서 찾을 수 있습니다.', '사랑은 인생의 가장 강력한 감정 중 하나입니다.', '행복은 종종.'];
    sentences.forEach((def) => {
      expect(validValues).toContain(def.value)
    })
  })
}); 
