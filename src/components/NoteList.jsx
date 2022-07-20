import React from 'react';
import { SimpleGrid, Flex } from '@chakra-ui/react';

import Card from './Card';

function NoteList() {
  return (
    <Flex justifyContent="center" mt={10}>
      <SimpleGrid columns={[1, 2, 3]} spacing={5}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </SimpleGrid>
    </Flex>
  );
}

export default NoteList;
