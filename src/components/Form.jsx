import { useState } from 'react';
import { Icon, Textarea, Flex, Box, Button, Input } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/notes/notesSlice';

function Form() {
  const [color, setColor] = useState(`#${((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')}`);
  const [note, setNote] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note) {
      dispatch(addNote({ id: nanoid(), note, color }));
      let randomColor = `#${((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')}`;
      setColor(randomColor);
      setNote('');
    }
  };

  return (
    <Flex justifyContent="center" mt={5}>
      <Box w="40%" alignItems="center" bg="white" p={3} boxShadow="xl">
        <form onSubmit={handleSubmit} style={{ backgroundColor: 'white' }}>
          <Textarea borderRadius={0} bg={color} border="none" rows={4} placeholder="Enter your note here..." boxShadow="lg" value={note} onChange={(e) => setNote(e.target.value)} />
          <Flex justifyContent="end" mt={3} bg="white">
            <Input bg="white" w={70} type="color" variant="none" value={color} onChange={(e) => setColor(e.target.value)} />
            <Button borderRadius={50} colorScheme="green" type="submit" boxShadow="lg">
              <Icon as={AddIcon} bg="none" />
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
}

export default Form;
