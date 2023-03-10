import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Center
} from '@chakra-ui/react'

if(JSON.parse(localStorage.getItem('nameList')) == undefined) {
  localStorage.setItem("nameList", JSON.stringify([]));
}
// localStorage.setItem("nameList", "[]");
// localStorage.clear();

function Ex5Input() {
  function handleButtonClick(button, el) {
    const nameList = JSON.parse(localStorage.getItem("nameList"));
    if (button === 'add' && !nameList.includes(el)) {
      nameList.push(el);
      // console.log(nameList);
      localStorage.setItem("nameList", JSON.stringify(nameList));
      // console.log(localStorage.getItem("nameList"));
    } else if (button === 'delete' && nameList.includes(el)) {
      const index = nameList.indexOf(el);
      nameList.splice(index, 1);
      // console.log(nameList);
      localStorage.setItem("nameList", JSON.stringify(nameList));
      // console.log(localStorage.getItem("nameList"));
    }
  }

  const nameList = ["Danang", "Khalisa", "Adit", "Kiki", "Danar"];
  const nameToBeAdded = nameList.map((el, index) => {
    return (
      <Tr>
        <Td>{index + 1}</Td>
        <Td>{el}</Td>
        <Td>
          <Button onClick={() => handleButtonClick('add', el)} colorScheme='green'>Add</Button>
        </Td>
        <Td>
          <Button onClick={() => handleButtonClick('delete', el)} colorScheme='red'>Delete</Button>
        </Td>
      </Tr>
    )
  })
  return (
    <TableContainer pl={4}>
      <Table variant='striped' colorScheme='teal'>
        <TableCaption>Name list to be added</TableCaption>
        <Thead>
          <Tr>
            <Th textAlign={'center'}>NO</Th>
            <Th textAlign={'center'}>NAME</Th>
            <Th colSpan={2} textAlign={'center'}>BUTTON</Th>
          </Tr>
        </Thead>
        <Tbody>
          {nameToBeAdded}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default Ex5Input;