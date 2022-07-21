import { useState } from 'react';
import { DeleteIcon, CopyIcon, EditIcon, CheckIcon } from '@chakra-ui/icons';
import { Icon, Circle, Flex, Box, Textarea, Text, Button, useDisclosure } from '@chakra-ui/react';
import { Modal, ModalBody, ModalFooter, ModalContent } from '@chakra-ui/react';
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
    setSuccess('Saved!');
    setTimeout(() => setSuccess(null), 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(item.item.note);
    setSuccess('Copied!');
    setTimeout(() => setSuccess(null), 2000);
  };

  return (
    <div>
      <Flex boxShadow="xl">
        <Box w={200} h={160} bg={item.item.color}>
          <Flex justifyContent="space-between" bg="rgba(0,0,0,0.25)" px={1}>
            <Text fontSize={13} bg="green.400" py={1} px={success ? 2 : 0}>
              {success}
            </Text>
            <Flex bg="none" my={1}>
              <Circle size="20px" bg="green.400" color="white" ml={1}>
                <Icon as={CopyIcon} w={3} bg="none" onClick={handleCopy} />
              </Circle>
              <Circle size="20px" bg="orange.400" color="white" ml={1}>
                <Icon as={edit ? EditIcon : CheckIcon} w={3.5} bg="none" onClick={() => (edit ? setEdit(false) : handleEdit())} />
              </Circle>
              <Circle size="20px" bg="red.400" color="white" ml={1}>
                <Icon as={DeleteIcon} w={3} bg="none" onClick={onOpen} />
              </Circle>
            </Flex>
          </Flex>
          <Textarea borderRadius={0} bg={edit ? 'none' : 'white'} border="none" rows={5} readOnly={edit} value={value} resize="none" onChange={(e) => setValue(e.target.value)} />
        </Box>
      </Flex>
      <Modal size="xs" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalContent>
          <ModalBody>Are you sure?</ModalBody>
          <ModalFooter>
            <Button size="sm" onClick={onClose}>
              Cancel
            </Button>
            <Button size="sm" colorScheme="red" onClick={handleDelete} ml={3}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Card;
