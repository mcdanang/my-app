import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function NavbarUsers() {
  const users = JSON.parse(localStorage.getItem("users"));

  return (
    <Flex alignItems={'center'} justifyContent={'center'} bgColor={'teal'} color={'white'}>
      <Heading>Network Call Practice</Heading>
      <Box  ml={'5%'} >
        <Link style={{ textDecoration: 'none' }} to="/my-app/users">
          <Button variant={'ghost'} colorScheme={'whiteAlpha'} border={'none'}>Users ({users.length})</Button>
        </Link>
      </Box>
      <Box  ml={'5%'} >
        <Link style={{ textDecoration: 'none' }} to="/my-app/register">
          <Button variant={'ghost'} colorScheme={'whiteAlpha'} border={'none'}>Register</Button>
        </Link>
      </Box>
    </Flex>
  )
}

export default NavbarUsers;