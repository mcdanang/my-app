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
  Image
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { addProduct, deleteProduct } from '../../app/productSlice';
import productList from './products.json'
import FormProduct from './FormProduct';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Shop() {

  const dispatch = useDispatch();

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2000/products")
      .then(res => {
        setItems(res.data);
      })
      .catch(err => {
        console.error(err)
        setItems(productList.products);
      })
  }, [])

  console.log(items); 

  const products = items.map((product, index) => {
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
      <Navbar/>

      <FormProduct/>

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