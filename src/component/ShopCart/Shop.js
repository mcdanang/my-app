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
  Image,
  Heading,
  Box,
  Input,
  Flex,
  Text
} from '@chakra-ui/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
} from '@chakra-ui/react'
import productList from "./product.json";
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, deleteProduct } from '../../app/productSlice';
import { Icon } from '@chakra-ui/react'
import { MdShoppingCart, MdNotifications, MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom';

function Shop() {
  const dispatch = useDispatch();

  const products = productList.map((product, index) => {

    return (
      <Tr>
        <Td textAlign={'center'}>{index + 1}</Td>
        <Td textAlign={'center'}>{product.name}</Td>
        <Td><Image boxSize={'100px'} src={product.img} alt={product.name} /></Td>
        <Td textAlign={'center'}>{rupiah(product.price)}</Td>
        <Td textAlign={'center'}>{product.stock}</Td>
        <Td>
          <Button onClick={() => dispatch(addProduct(product))} colorScheme='green'>Add to Cart</Button>
        </Td>
        <Td>
          <Button onClick={() => dispatch(deleteProduct(product))} colorScheme='red'>Delete</Button>
        </Td>
      </Tr>
    )
  })

  const cartList = useSelector((state) => state.product);
  console.log(cartList);
  const shortCart = cartList.map(product => {
    return (
      <Box borderTop={'2px'} borderTopColor={'#eeeeee'} pt={2} pb={2}>
        <Flex alignItems={'center'}>
          <Image boxSize={10} src={product.img}></Image>
          <Box pl={4} w={'50%'}>
            <Box fontSize={14} fontWeight={'bold'}>{product.name}</Box>
            <Box fontSize={12}>{product.qty} Barang</Box>
          </Box>
          <Box fontSize={13} fontWeight={'bold'} color={'orange.500'}>{rupiah(product.price * product.qty)}</Box>
        </Flex>
      </Box>
    )
  });

  return (
    <>
      <Flex alignItems={'center'} justifyContent={'center'}>
        <Heading color={'green'} mr={'10%'} ml={'5%'}>TOKOPAEDI</Heading>
        Search: <Input placeholder='Cari HP terbaru' _placeholder={{ opacity: 0.5, color: 'white' }} w={300} m={5} color={'white'}/>
        
        <Popover placement='bottom'>
          <PopoverTrigger>
            <Button border={0} bg={'white'} focus={'#eeeeee'} ml={20} mr={5}>
              <Icon as={ MdShoppingCart } boxSize={6} />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>
              <Flex alignItems={'center'} justifyContent={'center'} fontWeight={'bold'}>
                <Box h={5} ml={6} >Keranjang</Box>
                <Box h={5} ml={1} mr={10}>({cartList.length})</Box>
                <Link style={{ textDecoration: 'none' }} to="/my-app/cart">
                  <Button fontSize={14} border={0} bg={'white'} focus={'#eeeeee'} mr={2} color={'green'}>
                    Lihat Sekarang
                  </Button>
                </Link>
              </Flex>
            </PopoverHeader>
            <PopoverBody>
              {shortCart}
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Button border={0} bg={'white'} focus={'#eeeeee'} mr={5}>
          <Icon as={ MdNotifications } boxSize={6} />
        </Button>
        <Button border={0} bg={'white'} focus={'#eeeeee'} mr={5}>
          <Icon as={ MdEmail } boxSize={6} />
        </Button>  
        
      </Flex>
      <TableContainer pl={4}>
        <Table colorScheme='teal'>
          <TableCaption>Product list to be added</TableCaption>
          <Thead>
            <Tr bgColor={'#e2e8f0'}>
              <Th textAlign={'center'}>NO</Th>
              <Th textAlign={'center'}>PRODUCT</Th>
              <Th textAlign={'center'}>IMAGE</Th>
              <Th textAlign={'center'}>PRICE</Th>
              <Th textAlign={'center'}>STOCK</Th>
              <Th colSpan={2} textAlign={'center'}>ACTION</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

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
  return `Rp${str}`;
}

export default Shop;