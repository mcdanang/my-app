import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import {
  Button,
  Heading,
  Box,
} from '@chakra-ui/react'
import axios from 'axios';

function FormProduct() {
  //Form Schema
  const ProductSchema = Yup.object().shape({
    id: Yup.number(),
    name: Yup.string()
      .min(2, "Product name must be 2 characters at minimum")
      .required("Product name is required"),
    img: Yup.string(),
    price: Yup.number()
      .positive("Price must be a positive number")
      .integer("Price must be an integer")
      .required("Price is required"),
    stock: Yup.number()
      .positive("Stock must be a positive number")
      .integer("Stock must be an integer")
      .required("Stock is required"),
  });

  return (
    <Box m={10} display={'flex'} justifyContent={'center'}>
        <Formik
          initialValues={{ img: "https://fastly.picsum.photos/id/281/200/200.jpg?hmac=5FvZ-Y5zbbpS3-mJ_mp6-eH61MkwhUJi9qnhscegqkY" }}
          validationSchema={ProductSchema}
          onSubmit={(values) => {
            console.log(values);
            axios.post("http://localhost:2000/products", values)
              .then((response) => {
                console.log(response.data);
              })
              .catch((err) => {
                console.error(err);
              });
          }}
        >
          {(props) => {
            // console.log(props)
            return (
              <Box w = {'80%'} p={10} border={'4px'} borderRadius={10} borderColor={'green.300'}>
                <Heading fontSize={20} textAlign={'center'}>Add New Product</Heading>
                <Form>
                  <Box display={'flex'} p={3}>
                    <Box w={'100px'}>Name</Box>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Enter product name"
                      autoComplete="off"
                    />
                    <ErrorMessage
                      component="div"
                      name="name"
                      style={{ color: "red", fontSize: "12px", margin: "auto" }}
                    />
                  </Box>
                  <Box display={'flex'} p={3}>
                    <Box w={'100px'}>Image URL</Box>
                    <Field
                      type="text"
                      name="img"
                      placeholder="Enter image URL"
                      // value="https://picsum.photos/200/200"
                    />
                    <ErrorMessage 
                      component="div"
                      name="img"
                      style={{ color: "red", fontSize: "12px", margin: "auto" }}
                    />
                  </Box>
                  <Box display={'flex'} p={3}>
                    <Box w={'100px'}>Price</Box>
                    <Field
                      type="number"
                      name="price"
                      placeholder="Enter product price"
                      autoComplete="off"
                    />
                    <ErrorMessage
                      component="div"
                      name="price"
                      style={{ color: "red", fontSize: "12px", margin: "auto" }}
                    />
                  </Box>
                  <Box display={'flex'} p={3}>
                    <Box w={'100px'}>Stock</Box>
                    <Field
                      type="number"
                      name="stock"
                      placeholder="Enter stock quantity"
                      autoComplete="off"
                    />
                    <ErrorMessage
                      component="div"
                      name="stock"
                      style={{ color: "red", fontSize: "12px", margin: "auto" }}
                    />
                  </Box>
                  
                  <Button m={5} type="submit">Submit</Button>
                </Form>
              </Box>
            )
          }}
        </Formik>
      </Box>
  )
}

export default FormProduct;