import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box
} from '@chakra-ui/react'
import NavbarUsers from "./NavbarUsers";
import { useState, useEffect } from 'react';
import axios from 'axios';
import userData from './users.json';

function Users() {

  const [users, setUsers] = useState([]);
  localStorage.setItem('users', JSON.stringify(users));

  useEffect(() => {
    axios.get("http://localhost:2000/users")
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.error(err)
        setUsers(userData.users);
      })
  }, [])
  
  return (
    <Box>
      <NavbarUsers/>

      <TableContainer pl={4}>
        <Table colorScheme='teal'>
          <TableCaption>User Data</TableCaption>
          <Thead>
            <Tr bgColor={'#e2e8f0'}>
              <Th textAlign={'center'}>ID</Th>
              <Th textAlign={'center'}>NAME</Th>
              <Th textAlign={'center'}>EMAIL</Th>
              <Th textAlign={'center'}>PASSWORD</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              users.map((user) => {
                return (
                  <Tr>
                    <Td textAlign={'center'}>{user.id}</Td>
                    <Td textAlign={'center'}>{user.name}</Td>
                    <Td textAlign={'center'}>{user.email}</Td>
                    <Td textAlign={'center'}>{user.password}</Td>
                  </Tr>
                )
              })
            }
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Users;