import React, { useEffect } from "react";
import { Formik, Field, useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  // const formik = useFormik({
  //   initialValues: {
  //     firstName: '',
  //     email: '',
  //     type: '',
  //     comment: '',
  //   },
  // onSubmit: (values) => { submit('http://localhost:3000/', values) },
  //   validationSchema: Yup.object({
  //     firstName: Yup.string().required('Required'),
  //     email: Yup.string().email('Invalid email').required('Required'),
  //     type: Yup.string().required('Required'),
  //     comment: Yup.string().required('Required'),
  //   }),
  // });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <Formik
            initialValues={{
              firstName: '',
              email: '',
              type: 'hireMe',
              comment: '',
            }}
            onSubmit={(values, actions) => {
              preventDefault()
              submit('http://localhost:3000/', values)
              actions.setSubmitting(false)
              console.log(isValidating)
            }}
            validationSchema={Yup.object({
              firstName: Yup.string().required('Required'),
              email: Yup.string().email('Email must be valid').required('Required'),
              type: Yup.string().required('Required'),
              comment: Yup.string().required('Required'),
            })}
          >
            {({ handleSubmit, handleChange, errors, touched, values }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                  <FormControl isInvalid={!!errors.firstName && touched.firstName}>
                    <FormLabel htmlFor="firstName">Name</FormLabel>
                    <Field
                      as={Input}
                      id="firstName"
                      name="firstName"
                      type='string'
                      onChange={handleChange}
                      value={values.firstName}
                    />
                    <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.email && touched.email}>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      onChange={handleChange}
                      value={values.email}
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                    <Select id="type" name="type" value={values.type} onChange={handleChange}>
                      <option value="hireMe">Freelance project proposal</option>
                      <option value="openSource">Open source consultancy session</option>
                      <option value="other">Other</option>
                    </Select>
                  </FormControl>
                  <FormControl isInvalid={!!errors.comment && touched.comment}>
                    <FormLabel htmlFor="comment">Your message</FormLabel>
                    <Field
                      as={Textarea}
                      id="comment"
                      name="comment"
                      height={250}
                      onChange={handleChange}
                      value={values.comment}
                    />
                    <FormErrorMessage>{errors.comment}</FormErrorMessage>
                  </FormControl>
                  <Button type="submit" colorScheme="purple" width="full">
                    Submit
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </VStack>
    </FullScreenSection >
  );
};

export default LandingSection;
