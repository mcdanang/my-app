import { Link } from 'react-router-dom';
import { Box, Heading, Center } from '@chakra-ui/react';

function Header() {
  return (
    <Box bg='black' w='100%' p={4} color='white'>
      <Center>
      <Heading>Choose Exercise</Heading>
      <ul>
        <Link to="/my-app/exercise1"><Box bg='maroon' w='250px' p={4} m={1} color='white'>Exercise 1 (Counter App)</Box></Link>
        <Link to="/my-app/exercise2"><Box bg='maroon' w='250px' p={4} m={1} color='white'>Exercise 2 (Stopwatch App)</Box></Link>
        <Link to="/my-app/exercise3"><Box bg='maroon' w='250px' p={4} m={1} color='white'>Exercise 3 (Filter App)</Box></Link>
      </ul>
      </Center>
    </Box>
  )
}

export default Header;