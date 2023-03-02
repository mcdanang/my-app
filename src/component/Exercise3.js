import React, {useState} from 'react';
import { Box, Input, Center } from '@chakra-ui/react';

function Exercise3() {
  const itemList = ["Banana", "Apple", "Orange", "Mango", "Pinapple", "Watermelon", "Strawberry"]
  const [filteredList, setFilteredList] = useState(itemList);

  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    var updatedList = [...itemList];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setFilteredList(updatedList);
  };

  return (
      <Box bg='tomato' w='100%' p={4} color='white' textAlign={'center'}>
        <h1>Exercise 3</h1>
        <h3>Create a filter application</h3>
        Search: <Input onChange={filterBySearch} placeholder='Insert fruit name' _placeholder={{ opacity: 0.5, color: 'white' }} w={300} m={5} color={'white'}/>
        <div>
          {filteredList.map((el) =>
            {
              return (
                <Center>
                  <Box 
                    bg='white'
                    color="tomato" 
                    w={200} 
                    m={2} 
                    p={1}
                    borderRadius={10}
                    textAlign={'center'}
                    >
                    {el}
                  </Box>
                </Center>
              )
            })
          }
        </div>
      </Box>
  )
}

export default Exercise3;