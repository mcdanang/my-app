import { Box, Heading, Button, Text, Center } from "@chakra-ui/react";
import NavbarUsers from "./NavbarUsers";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import userData from './users.json';
import { setLoggedInUser } from '../../app/userSlice';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() { 

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
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

  const loginData = useSelector((state) => state.user);

  return (
    <>
      <NavbarUsers/>
      
      <Box m={10} display={'flex'} justifyContent={'center'}>
        <Formik
          initialValues={{ email: "",  password: "", }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            // console.log(values);
            const email = values.email;
            const password = values.password;
            axios.get(`http://localhost:2000/users?email=${email}&password=${password}`)
              .then(res => {
                // console.log(res.data);
                if (res.data.length) {
                  dispatch(setLoggedInUser({
                    status: "success",
                    data: res.data[0]
                  }));
                  navigate("/my-app/users");
                  alert("You have successfully logged in")
                } else {
                  console.log("wrong email or password");
                  dispatch(setLoggedInUser({
                    status: "fail",
                    data: null
                  }));
                  alert("Wrong email or password")
                }
              })
              .catch(err => {
                console.error(err)
                // console.log(userData.users);
              })
          }}
        >
          {(props) => {
            // console.log(props)
            return (
              <Box w = {'80%'} p={10} border={'4px'} borderRadius={10} borderColor={'green.300'}>
                <Heading fontSize={20} textAlign={'center'}>Login</Heading>
                <Center>
                  <Text>For testing, use	email: <b>admin@mail.com</b> and password:	<b>Admin!@34</b></Text>
                </Center>
                <Form>
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
      <Box>{console.log(loginData)}</Box>
    </>
  )
}

export default Login;