import React, {useState, useEffect} from 'react';
import { Button, Box, Center } from '@chakra-ui/react';
import { MdPlayArrow, MdStop, MdRestartAlt } from "react-icons/md"

function Exercise1() {
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    let interval = null;
    if (status === true) {
      interval = setInterval(() => {
        setTime((time) => time + 10)
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [status])

  function start() {
    setStatus(true);
  }

  function stop() {
    setStatus(false);
  }

  function reset() {
    setTime(0);
  }

  return (
      <Box minH='400px' bg='lightskyblue' w='100%' p={4} color='white' textAlign={'center'}>
        <h1>Exercise 2</h1>
        <h3>Create a stopwatch application</h3>
        <Center>
          <Box bg='white' w='100px' p={4} m={5} color='blue.500' textAlign={'center'} fontSize={30}>
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}
            : 
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
          </Box>
        </Center>
        <Button m={2} onClick={start} leftIcon={<MdPlayArrow />} colorScheme='green' variant='solid'>
          Start
        </Button>
        <Button m={2}  onClick={stop} leftIcon={<MdStop />} colorScheme='red' variant='solid'>
          Stop
        </Button>
        <Button m={2}  onClick={reset} leftIcon={<MdRestartAlt />} colorScheme='yellow' variant='solid'>
          Reset
        </Button>
      </Box>
  )
}

export default Exercise1;