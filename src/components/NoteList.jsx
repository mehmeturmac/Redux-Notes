import React from 'react';
import { SimpleGrid, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import Card from './Card';

function NoteList() {
  const items = useSelector((state) => state.notes.items);

  return (
    <Flex justifyContent="center" mt={10}>
      <SimpleGrid columns={[1, 2, 3]} spacing={5}>
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}

export default NoteList;
