import { Link } from 'react-router-dom';
import { Box, Heading, Center, Stack, Button } from '@chakra-ui/react';

function Header() {
  return (
    <Box bg='blue.500' w='100%' p={4} color='white'>
      <Center>
        <Heading m={20}>Choose Exercise</Heading>
        <Stack direction='column' spacing={2} align='center'>
            <Link style={{ textDecoration: 'none' }} to="/my-app/exercise1">
              <Button w={150} p={2} whiteSpace="normal" blockSize="auto" colorScheme='facebook' variant='ghost'>
                Counter App
              </Button>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/my-app/exercise2">
              <Button w={150} p={2} whiteSpace="normal" blockSize="auto" colorScheme='facebook' variant='ghost'>
                Stopwatch App
              </Button>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/my-app/exercise3">
              <Button w={150} p={2} whiteSpace="normal" blockSize="auto" colorScheme='facebook' variant='ghost'>
                Filter App
              </Button>
            </Link>

            <Heading textAlign={'center'} fontSize={16}>Global State app</Heading>
            <Box display={'flex'} gap={2}>
              <Link style={{ textDecoration: 'none' }} to="/my-app/exercise5/input">
                <Button colorScheme='facebook' variant='ghost'>Input</Button>
              </Link>
              <Link style={{ textDecoration: 'none' }} to="/my-app/exercise5/list">
                <Button colorScheme='facebook' variant='ghost'>List</Button>
              </Link>
            </Box> 
            
            <Heading textAlign={'center'} fontSize={16}>Shop Cart App</Heading>
            <Box display={'flex'} gap={2}>
              <Link style={{ textDecoration: 'none' }} to="/my-app/shop">
                <Button colorScheme='facebook' variant='ghost'>Shop</Button>
              </Link>
              <Link style={{ textDecoration: 'none' }} to="/my-app/cart">
                <Button colorScheme='facebook' variant='ghost'>Cart</Button>
              </Link>
            </Box> 

            <Heading textAlign={'center'} fontSize={16}>User Data</Heading>
            <Box display={'flex'} gap={2}>
              <Link style={{ textDecoration: 'none' }} to="/my-app/users">
                <Button colorScheme='facebook' variant='ghost'>Users</Button>
              </Link>
              <Link style={{ textDecoration: 'none' }} to="/my-app/register">
                <Button colorScheme='facebook' variant='ghost'>Register</Button>
              </Link>
            </Box> 

        </Stack>
      </Center>
    </Box>
  )
}

export default Header;