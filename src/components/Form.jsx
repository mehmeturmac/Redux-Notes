import { useState } from 'react';
import { Icon, Textarea, Flex, Box, Button, Input } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

function Form() {
  const [color, setColor] = useState('#03a9f4');

  return (
    <Flex justifyContent="center" mt={5}>
      <Box w="40%" alignItems="center" bg="white" p={3} boxShadow="lg">
        <Textarea borderRadius={0} bg={color} border="none" rows={4} placeholder="Enter your note here..." boxShadow="lg" />
        <Flex justifyContent="end" mt={3} bg="white">
          <Input bg="white" w={70} type="color" variant="none" value={color} onChange={(e) => setColor(e.target.value)} />
          <Button size="md" borderRadius={20} colorScheme="green" onClick={() => console.log(color)} boxShadow="lg">
            <Icon as={AddIcon} bg="none" />
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Form;
