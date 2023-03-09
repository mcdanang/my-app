import {
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
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from '@chakra-ui/react'
import { MdShoppingCart, MdNotifications, MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom';


function Navbar() {

  const cartList = useSelector((state) => state.product);
  // console.log(cartList);
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

export default Navbar;