import React from 'react';
import { Flex, Text, Button, TextFieldInput, VisuallyHidden } from '@radix-ui/themes';


function SajeonSearch() {
  return (
    <form>
      <label className='flex-col flex'>
        <Text as="label">Sajeon</Text>
        <TextFieldInput />
      </label>
      <Button>Sajeon Search</Button>
    </form>
  )
}

export default SajeonSearch;