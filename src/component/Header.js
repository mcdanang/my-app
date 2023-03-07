import { Link } from 'react-router-dom';
import { Box, Heading, Center, Stack, Button, Text } from '@chakra-ui/react';

function Header() {
  return (
    <Box bg='blue.500' w='100%' p={4} color='white'>
      <Center>
        <Heading m={20}>Choose Exercise</Heading>
        <Stack direction='column' spacing={2} align='center'>
            <Link style={{ textDecoration: 'none' }} to="/my-app/exercise1">
              <Button w={150} p={2} whiteSpace="normal" blockSize="auto" colorScheme='facebook' variant='ghost'>
                Exercise 1<br></br>(Counter App)
              </Button>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/my-app/exercise2">
              <Button w={150} p={2} whiteSpace="normal" blockSize="auto" colorScheme='facebook' variant='ghost'>
                Exercise 2<br></br>(Stopwatch App)
              </Button>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/my-app/exercise3">
              <Button w={150} p={2} whiteSpace="normal" blockSize="auto" colorScheme='facebook' variant='ghost'>
                Exercise 3<br></br>(Filter App)
              </Button>
            </Link>

            <Heading textAlign={'center'} fontSize={16}>Exercise 5<br/>(Global State app)</Heading>
            <Box display={'flex'} gap={2}>
              <Link style={{ textDecoration: 'none' }} to="/my-app/exercise5/input">
                <Button colorScheme='facebook' variant='ghost'>Input</Button>
              </Link>
              <Link style={{ textDecoration: 'none' }} to="/my-app/exercise5/list">
                <Button colorScheme='facebook' variant='ghost'>List</Button>
              </Link>
            </Box>        
        </Stack>
      </Center>
    </Box>
  )
}

export default Header;