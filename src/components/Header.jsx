import React from 'react';
import { Input, Text, Flex, Box, Button, useColorMode } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { search } from '../redux/notes/notesSlice';

function Header() {
  const dispatch = useDispatch();

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header>
      <Flex justifyContent="center" mt={10}>
        <Box w={['80%', '60%', '40%', '30%']}>
          <Text textAlign="center" color="gray" fontSize={25} fontWeight="semibold">
            Notes App
          </Text>
          <Button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button>
          <Input placeholder="Search..." mt={5} borderRadius={20} bg="white" boxShadow="lg" onChange={(e) => dispatch(search(e.target.value))} />
        </Box>
      </Flex>
    </header>
  );
}

export default Header;
