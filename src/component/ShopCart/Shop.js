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
  Flex
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
  return (
    <>
      <Flex alignItems={'center'} justifyContent={'center'}>
        <Heading color={'green'} mr={'10%'} ml={'5%'}>TOKOPAEDI</Heading>
        Search: <Input placeholder='Cari HP terbaru' _placeholder={{ opacity: 0.5, color: 'white' }} w={300} m={5} color={'white'}/>
        
        <Popover>
          <PopoverTrigger>
            <Button border={0} bg={'white'} focus={'#eeeeee'} ml={20} mr={5}>
              <Icon as={ MdShoppingCart } boxSize={6} />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>
              <Flex alignItems={'center'} fontWeight={'bold'}>
                Keranjang
                <Link style={{ textDecoration: 'none' }} to="/my-app/cart">
                  <Button border={0} bg={'white'} focus={'#eeeeee'} ml={20} mr={5} color={'green'}>
                    Lihat Sekarang
                  </Button>
                </Link>
              </Flex>
            </PopoverHeader>
            <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
          </PopoverContent>
        </Popover>
        <Button border={0} bg={'white'} focus={'#eeeeee'} mr={5}>
          <Icon as={ MdNotifications } boxSize={6} />
        </Button>
        <Button border={0} bg={'white'} focus={'#eeeeee'} mr={5}>
          <Icon as={ MdEmail } boxSize={6} />
        </Button>  
        
      </Flex>
      <TableContainer pl={4} bgColor={'skyblue'}>
        <Table variant='striped' colorScheme='teal'>
          <TableCaption>Product list to be added</TableCaption>
          <Thead>
            <Tr>
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

export default Shop;