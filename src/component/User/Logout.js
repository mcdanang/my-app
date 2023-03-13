import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import NavbarUsers from "./NavbarUsers";
import { useDispatch, useSelector } from "react-redux";
import { removeLoggedInUser } from '../../app/userSlice';
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.user);

  const handleLogoutButton = () => {
    navigate("/my-app/login");
    alert("You have successfully logged out")
    dispatch(removeLoggedInUser());
    // console.log(loginData);
  }

  return (
    <>
      <NavbarUsers/>
      <Box m={10} display={'flex'} justifyContent={'center'}>
        <Box w = {'80%'} p={10} border={'4px'} borderRadius={10} borderColor={'green.300'}>
          <Heading pb={10} fontSize={20} textAlign={'center'}>Logout</Heading>
          <Text textAlign={'center'}>Are you sure you want to logout?</Text>
          <Center>
            <Button m={5} onClick={handleLogoutButton}>Yes</Button>
          </Center>
        </Box>
      </Box>
    </>
  )
}

export default Logout;