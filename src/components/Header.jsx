import { useState } from 'react';
import { Icon, Input, Text, Flex, Box, Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { search } from '../redux/notes/notesSlice';

function Header() {
  const dispatch = useDispatch();
  const { colorMode, toggleColorMode } = useColorMode();
  const [user, setUser] = useState(localStorage.getItem('user') || 'Log In');

  const handleUser = () => {
    const username = window.prompt('Enter your username?');
    if (username.length > 0 && username.length < 30) {
      setUser(username);
      localStorage.setItem('user', username);
    } else {
      localStorage.removeItem('user');
    }
  };

  return (
    <header>
      <Flex justifyContent="center" mt={2}>
        <Box w={['80%', '60%', '40%', '30%']} display="flex" flexDirection="column">
          <Box alignSelf="end">
            <Button bg="transparent" border={'1px solid'} mr={2} onClick={handleUser}>
              {user}
            </Button>
            <Button bg="transparent" onClick={toggleColorMode}>
              {colorMode === 'light' ? <Icon as={MoonIcon} bg="none" /> : <Icon as={SunIcon} bg="none" />}
            </Button>
          </Box>
          <Text textAlign="center" color="gray" fontSize={25} fontWeight="semibold">
            Notes App
          </Text>
          <Input placeholder="Search..." _placeholder={{ color: 'gray' }} mt={5} borderRadius={20} bg="white" boxShadow="lg" onChange={(e) => dispatch(search(e.target.value))} />
        </Box>
      </Flex>
    </header>
  );
}

export default Header;
