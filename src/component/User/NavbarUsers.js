import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavbarUsers() {
  const users = JSON.parse(localStorage.getItem("users"));

  const loginData = useSelector((state) => state.user);

  const usersButton = () => {
    if (loginData.status == "success") {
      return (
        <Box  ml={'5%'} >
          <Link style={{ textDecoration: 'none' }} to="/my-app/users">
            <Button variant={'ghost'} colorScheme={'whiteAlpha'} border={'none'}>
              Users ({users.length})
            </Button>
          </Link>
        </Box>
      )
    }
  }
  
  const logButton = () => {
    const path = loginData.status == "success"? "/my-app/logout" : "/my-app/login";
    const buttonName = loginData.status == "success"? "Logout" : "Login";
    return (
      <Box  ml={'5%'} >
        <Link style={{ textDecoration: 'none' }} to={path}>
          <Button variant={'ghost'} colorScheme={'whiteAlpha'} border={'none'}>
            {buttonName}
          </Button>
        </Link>
      </Box>
    )
  }

  const registerButton = () => {
    if (loginData.status != "success") {
      return (
        <Box  ml={'5%'} >
          <Link style={{ textDecoration: 'none' }} to="/my-app/register">
            <Button variant={'ghost'} colorScheme={'whiteAlpha'} border={'none'}>
              Register
            </Button>
          </Link>
        </Box>
      )
    }
  }

  return (
    <Flex alignItems={'center'} justifyContent={'center'} bgColor={'teal'} color={'white'}>
      <Heading fontSize={18}>Network Call Practice</Heading>
      <Box  ml={'5%'} >
        {loginData.status == 'success'? `Welcome, ${loginData.data.name}!` : null}
      </Box>
      {usersButton()}
      {registerButton()}
      {logButton()}
    </Flex>
  )
}

export default NavbarUsers;