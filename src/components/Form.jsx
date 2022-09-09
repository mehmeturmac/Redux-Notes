import { useState } from 'react';
import { Icon, Textarea, Flex, Box, Button, Input } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import { addNoteAsync } from '../redux/notes/notesSlice';

function Form() {
  const [color, setColor] = useState(`#${((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')}`);
  const [content, setContent] = useState('');
  const loading = useSelector((state) => state.notes.addLoading);
  const error = useSelector((state) => state.notes.error);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (content.length > 2) {
      await dispatch(addNoteAsync({ content, color }));
      let randomColor = `#${((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')}`;
      setColor(randomColor);
      setContent('');
    } else {
      alert('Note must be at least 3 letters!');
    }
  };

  return (
    <Flex justifyContent="center" mt={5}>
      <Box w={['90%', '70%', '50%', '40%']} alignItems="center" bg="white" p={3} boxShadow="xl">
        <form onSubmit={handleSubmit} style={{ backgroundColor: 'white' }}>
          <Textarea borderRadius={0} bg={color} border="none" rows={4} placeholder="Enter your note here..." boxShadow="lg" value={content} onChange={(e) => setContent(e.target.value)} />
          <Flex justifyContent="end" mt={3} bg="white">
            {error && <div>{error}</div>}
            <Input bg="white" w={70} type="color" variant="none" value={color} onChange={(e) => setColor(e.target.value)} />
            <Button isLoading={loading} borderRadius={50} colorScheme="green" type="submit" boxShadow="lg">
              <Icon as={AddIcon} bg="none" />
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
}

export default Form;
