import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
  Button,
  Heading,
  Text,
  Center,
  Box,
  Flex
} from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../app/productSlice';

function Cart() {

  function rupiah(price) {
    const priceString = price.toString();
    const len = priceString.length;
    let str = "";
    for (let i = 0; i < len; i++) {
      str += priceString[i];
      if ((len - i - 1) % 3 == 0 && i != len - 1) {
        str += ".";
      }
    }
    return `Rp. ${str}`;
  }

  const productList = useSelector((state) => state.product);
  const dispatch = useDispatch();
  
  // console.log(productList);
  const addedProduct = productList.map((product, index) => {
    return (
      <Tr>
        <Td>{index + 1}</Td>
        <Td>{product.name}</Td>
        <Td><Image boxSize={'100px'} src={product.img} alt={product.name} /></Td>
        <Td textAlign={'center'}>{rupiah(product.price)}</Td>
        <Td textAlign={'center'}>{product.stock}</Td>
        <Td>
          <Center>
            <Button m={'auto'} onClick={() => dispatch(increment(product))} colorScheme='green'>+</Button>
          </Center>
        </Td>
        <Td>
          <Text textAlign={'center'}>{product.qty}</Text>
        </Td>
        <Td>
          <Center>
            <Button onClick={() => dispatch(decrement(product))} colorScheme='red'>-</Button>
          </Center>
        </Td>
      </Tr>
    )
  })

  const productsPrice = productList.map(el => [el.name, el.price * el.qty]);
  let totalPrice = 0;
  for (let p of productsPrice) {
    totalPrice += p[1];
  }

  return (
    <>
      <Heading textAlign={'center'}>KERANJANG</Heading>
      <Box m={10} p={3} w={'400px'} border={'4px'} borderColor={'#eeeeee'} borderRadius={10}>
        <Text fontWeight={'bold'}>Ringkasan Belanja</Text>
        {/* <Text>Total Harga Baju :</Text>
        <Text>Total Harga Celana :</Text> */}
        <Box h={1} bgColor={'#eeeeee'}></Box>
        <Text fontWeight={'bold'}>Total Harga : {rupiah(totalPrice)}</Text>
        <Button color={'white'} w={'100%'} bgColor={'green.400'}>Beli</Button>
      </Box>
      <TableContainer>
        <Table variant='striped' colorScheme='teal'>
          <TableCaption>Product list that has been added</TableCaption>
          <Thead>
            <Tr>
              <Th textAlign={'center'}>NO</Th>
              <Th textAlign={'center'}>PRODUCT</Th>
              <Th textAlign={'center'}>IMAGE</Th>
              <Th textAlign={'center'}>PRICE</Th>
              <Th textAlign={'center'}>STOCK</Th>
              <Th colSpan={3} textAlign={'center'}>QTY</Th>
            </Tr>
          </Thead>
          <Tbody>
            {addedProduct}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Cart;