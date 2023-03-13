import { Box, Heading, Button, Center } from "@chakra-ui/react";
import NavbarUsers from "./NavbarUsers";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLoggedInUser } from "../../app/userSlice";
import { useNavigate } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const RegisterSchema = Yup.object().shape({
    id: Yup.number(),
    name: Yup.string()
      .min(6, "Name must be 6 characters at minimum")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters at minimum")
      .required("Password is required")
      .matches(/[a-z]/, "Password must contain at least one lowercase")
      .matches(/[A-Z]/, "Password must contain at least one uppercase")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[@$!%*#?&]/, "Password must contain at least one symbol"),
  });
  
  return (
    <>
      <NavbarUsers/>
      
      <Box m={10} display={'flex'} justifyContent={'center'}>
        <Formik
          initialValues={{ name: "",  email: "",  password: "", }}
          validationSchema={RegisterSchema}
          onSubmit={(values) => {
            // console.log(values);
            axios.post("http://localhost:2000/users", values)
              .then((res) => {
                console.log(res.data);
                dispatch(setLoggedInUser({
                  status: "success",
                  data: res.data
                }));
                navigate("/my-app/users");
                alert("You have successfully registered and logged in")
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
                <Heading fontSize={20} textAlign={'center'}>Register</Heading>
                <Form>
                  <Box display={'flex'} p={3}>
                    <Box w={'100px'}>Name</Box>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      autoComplete="off"
                    />
                    <ErrorMessage
                      component="div"
                      name="name"
                      style={{ color: "red", fontSize: "12px", margin: "auto" }}
                    />
                  </Box>
                  <Box display={'flex'} p={3}>
                    <Box w={'100px'}>Email</Box>
                    <Field
                      type="text"
                      name="email"
                      placeholder="Enter email address"
                    />
                    <ErrorMessage 
                      component="div"
                      name="email"
                      style={{ color: "red", fontSize: "12px", margin: "auto" }}
                    />
                  </Box>
                  <Box display={'flex'} p={3}>
                    <Box w={'100px'}>Password</Box>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      autoComplete="off"
                    />
                    <ErrorMessage
                      component="div"
                      name="password"
                      style={{ color: "red", fontSize: "12px", margin: "auto" }}
                    />
                  </Box>
                  
                  <Center>
                    <Button m={5} type="submit">Submit</Button>
                  </Center>
                </Form>
              </Box>
            )
          }}
        </Formik>
      </Box>
    </>
  )
}

export default Register;