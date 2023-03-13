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
              <Th key={'id'} textAlign={'center'}>ID</Th>
              <Th key={'name'} textAlign={'center'}>NAME</Th>
              <Th key={'email'} textAlign={'center'}>EMAIL</Th>
              <Th key={'password'} textAlign={'center'}>PASSWORD</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              users.map((user) => {
                return (
                  <Tr>
                    <Td key={user.id} textAlign={'center'}>{user.id}</Td>
                    <Td key={user.name}  textAlign={'center'}>{user.name}</Td>
                    <Td key={user.email}  textAlign={'center'}>{user.email}</Td>
                    <Td key={user.password}  textAlign={'center'}>{user.password}</Td>
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