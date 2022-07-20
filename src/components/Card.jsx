import React from 'react';
import { DeleteIcon, CopyIcon, EditIcon, CheckIcon } from '@chakra-ui/icons';
import { Icon, Flex, Box, Textarea } from '@chakra-ui/react';

function Card() {
  return (
    <Flex>
      <Box w={200} h={150} bg="red" boxShadow="lg">
        <Flex justifyContent="end" bg="red" m={1}>
          <Icon as={CopyIcon} bg="none" ml={1} />
          <Icon as={EditIcon} bg="none" ml={1} />
          <Icon as={CheckIcon} bg="none" ml={1} />
          <Icon as={DeleteIcon} bg="none" ml={1} />
        </Flex>
        <Textarea borderRadius={0} bg="white" border="none" rows={5} readOnly value="dasdas" resize="none" />
      </Box>
    </Flex>
  );
}

export default Card;
