import { useEffect } from 'react';
import { SimpleGrid, Flex, Spinner } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { getNotesAsync } from '../redux/notes/notesSlice';

import Card from './Card';

function NoteList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotesAsync());
  }, [dispatch]);

  const items = useSelector((state) => state.notes.items);
  const activeFilter = useSelector((state) => state.notes.activeFilter);
  const filteredItems = items.filter((item) => item.content.toLowerCase().includes(activeFilter.toLowerCase()));
  const loading = useSelector((state) => state.notes.getLoading);
  const error = useSelector((state) => state.notes.error);

  return (
    <Flex justifyContent="center" mt={10}>
      {loading && <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />}
      {error && <div>{error}</div>}
      {!loading && filteredItems.length === 0 && <div>{'Empty'}</div>}
      <SimpleGrid columns={[1, 2, [null], 3, 4]} spacing={5}>
        {!loading && filteredItems.length > 0 && filteredItems.map((item) => <Card key={item.id} item={item} />)}
      </SimpleGrid>
    </Flex>
  );
}

export default NoteList;
