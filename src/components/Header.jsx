import React from 'react';
import { Input, Text, Flex, Box } from '@chakra-ui/react';

function Header() {
  return (
    <header>
      <Flex justifyContent="center" mt={10}>
        <Box w="30%">
          <Text textAlign="center" color="gray" fontSize={25} fontWeight="semibold">
            Notes App
          </Text>
          <Input placeholder="Search..." mt={5} borderRadius={20} bg="white" boxShadow="lg" />
        </Box>
      </Flex>
    </header>
  );
}

export default Header;
