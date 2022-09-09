import { useState } from 'react';
import { DeleteIcon, CopyIcon, EditIcon, CheckIcon } from '@chakra-ui/icons';
import { Icon, Circle, Flex, Box, Textarea, Text, Button, useDisclosure } from '@chakra-ui/react';
import { Modal, ModalBody, ModalFooter, ModalContent } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { deleteNoteAsync, updateNoteAsync } from '../redux/notes/notesSlice';

function Card(item) {
  const [edit, setEdit] = useState(true);
  const [content, setContent] = useState(item.item.content);
  const [success, setSuccess] = useState('');
  const [color, setColor] = useState(item.item.color);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  const handleDelete = async () => {
    await dispatch(deleteNoteAsync(item.item.id));
    onClose();
  };

  const handleEdit = async () => {
    setEdit(true);
    await dispatch(updateNoteAsync({ id: item.item.id, content, color }));
    setSuccess('Saved!');
    setTimeout(() => setSuccess(null), 1500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(item.item.content);
    setSuccess('Copied!');
    setTimeout(() => setSuccess(null), 1500);
  };

  return (
    <div>
      <Flex boxShadow="xl">
        <Box w={200} h={160} bg={color}>
          <Flex justifyContent="space-between" bg="rgba(0,0,0,0.25)" px={1}>
            <Text fontSize={13} bg="green.400" py={1} px={success ? 2 : 0}>
              {success}
            </Text>
            <Flex bg="none" my={1}>
              <Circle hidden={edit} size="20px" bg={color} color="white" ml={1} border={'1px solid #fff'}>
                <input type="color" className="picker" value={color} onChange={(e) => setColor(e.target.value)} />
              </Circle>
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
          <Textarea borderRadius={0} bg={edit ? 'none' : 'white'} border="none" rows={5} readOnly={edit} value={content} resize="none" onChange={(e) => setContent(e.target.value)} />
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
