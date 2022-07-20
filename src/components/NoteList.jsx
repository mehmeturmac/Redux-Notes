import React from 'react';
import { SimpleGrid, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import Card from './Card';

function NoteList() {
  const items = useSelector((state) => state.notes.items);
  const activeFilter = useSelector((state) => state.notes.activeFilter);
  const filteredItems = items.filter((item) => item.note.includes(activeFilter));

  return (
    <Flex justifyContent="center" mt={10}>
      <SimpleGrid columns={[1, 2, [null], 3, 4]} spacing={5}>
        {filteredItems.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}

export default NoteList;
