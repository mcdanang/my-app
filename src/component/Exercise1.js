import React, {useState} from 'react';
import { Button, Box, Center } from '@chakra-ui/react';
import { MdAdd, MdRemove, MdRestartAlt } from "react-icons/md"

function Exercise1() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
      <Box bg='tomato' w='100%' p={4} color='white'  textAlign={'center'}>
        <h1>Exercise 1</h1>
        <h3>Create a counter application</h3>
        <Center>
          <Box bg='white' w='200px' p={4} m={5} color='tomato' textAlign={'center'} fontSize={30}>
            Counter = {count}
          </Box>
        </Center>
        <Button m={2} onClick={increment} leftIcon={<MdAdd />} colorScheme='green' variant='solid'>
          Increment
        </Button>
        <Button m={2}  onClick={decrement} leftIcon={<MdRemove />} colorScheme='red' variant='solid'>
          Decrement
        </Button>
        <Button m={2}  onClick={reset} leftIcon={<MdRestartAlt />} colorScheme='yellow' variant='solid'>
          Reset
        </Button>
      </Box>
  )
}

export default Exercise1;