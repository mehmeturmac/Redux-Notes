import { useEffect } from 'react';
import { SimpleGrid, Flex } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../redux/notes/notesSlice';

import Card from './Card';

function NoteList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  const items = useSelector((state) => state.notes.items);
  const activeFilter = useSelector((state) => state.notes.activeFilter);
  const filteredItems = items.filter((item) => item.content.toLowerCase().includes(activeFilter.toLowerCase()));

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
