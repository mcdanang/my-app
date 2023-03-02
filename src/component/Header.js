import { Link } from 'react-router-dom';
import { Box, Heading, Center, Stack, Button } from '@chakra-ui/react';

function Header() {
  return (
    <Box bg='blue.500' w='100%' p={4} color='white'>
      <Center>
      <Heading m={20}>Choose Exercise</Heading>
      <Stack direction='column' spacing={2} align='center'>
          <Link style={{ textDecoration: 'none' }} to="/my-app/exercise1">
            <Button colorScheme='facebook' variant='ghost' w={'250px'}>Exercise 1 (Counter App)</Button>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/my-app/exercise2">
            <Button colorScheme='facebook' variant='ghost' w={'250px'}>Exercise 2 (Stopwatch App)</Button>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/my-app/exercise3">
            <Button colorScheme='facebook' variant='ghost' w={'250px'}>Exercise 3 (Filter App)</Button>
          </Link>
      </Stack>
      </Center>
    </Box>
  )
}

export default Header;