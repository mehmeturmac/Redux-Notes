import { Flex, Button } from '@chakra-ui/react';

function Footer() {
  return (
    <Flex position="fixed" bottom={0} width="full" justifyContent="center">
      <Button bg="transparent">
        <a href="https://github.com/mehmeturmac">Coded by Mehmet Urmaç</a>
      </Button>
    </Flex>
  );
}

export default Footer;
