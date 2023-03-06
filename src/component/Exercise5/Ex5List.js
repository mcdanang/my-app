import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer
} from '@chakra-ui/react'

function Ex5List() {


  const nameList = JSON.parse(localStorage.getItem("nameList"))
  const addedName = nameList.map((el, index) => {
    return (
      <Tr>
        <Td>{index + 1}</Td>
        <Td>{el}</Td>
      </Tr>
    )
  })

  return (
    <TableContainer>
      <Table variant='striped' colorScheme='teal'>
        <TableCaption>Name list that has been added</TableCaption>
        <Thead>
          <Tr>
            <Th>NO</Th>
            <Th>NAME</Th>
          </Tr>
        </Thead>
        <Tbody>
          {addedName}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default Ex5List;