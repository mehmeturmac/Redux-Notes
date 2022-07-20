import { useState } from 'react';
import { DeleteIcon, CopyIcon, EditIcon, CheckIcon } from '@chakra-ui/icons';
import { Icon, Flex, Box, Textarea, Text, Button, useDisclosure } from '@chakra-ui/react';
import { AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogContent, AlertDialogOverlay } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { delNote, editNote } from '../redux/notes/notesSlice';

function Card(item) {
  const [edit, setEdit] = useState(true);
  const [value, setValue] = useState(item.item.note);
  const [success, setSuccess] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(delNote(item.item.id));
  };

  const handleEdit = () => {
    setEdit(true);
    dispatch(editNote({ id: item.item.id, note: value, color: item.item.color }));
    setSuccess('Edited!');
    setTimeout(() => setSuccess(null), 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(item.item.note);
    setSuccess('Copied!');
    setTimeout(() => setSuccess(null), 2000);
  };

  return (
    <>
      <Flex>
        <Box w={200} h={150} bg={item.item.color} boxShadow="lg">
          <Flex justifyContent="space-between" bg="none" m={1.5}>
            <Text fontSize={15} bg="green" visibility={false} mr={2}>
              {success}
            </Text>
            <div style={{ background: 'none' }}>
              <Icon as={CopyIcon} bg="none" ml={2} onClick={handleCopy} />
              <Icon as={edit ? EditIcon : CheckIcon} bg="none" ml={2} onClick={() => (edit ? setEdit(false) : handleEdit())} />
              <Icon as={DeleteIcon} bg="none" ml={2} onClick={onOpen}></Icon>
            </div>
          </Flex>
          <Textarea borderRadius={0} bg={edit ? 'none' : 'white'} border="none" rows={5} readOnly={edit} value={value} resize="none" onChange={(e) => setValue(e.target.value)} />
        </Box>
      </Flex>
      <AlertDialog size="xs" isOpen={isOpen} onClose={onClose} isCentered>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogBody>Are you sure?</AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={onClose}>Cancel</Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default Card;
