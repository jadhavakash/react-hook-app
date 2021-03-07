import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import {formik, useFormik} from "formik";
import * as yup from "yup";
import { stringify } from "uuid";
export default function Signup() {
  // const emailRef = useRef()
  // const passwordRef = useRef()
  // const passwordConfirmRef = useRef()
  const validationSchema  = yup.object().shape({
    first:yup.string().required("First Name is required"),
    email:yup.string().required("Email is required"),
    password:yup.string().required("Password must be 5 character")
  }) 
  const formik = useFormik({
    initialValues:{
      first:"",
      email:"",
      password:""
    },
    onSubmit:(values) =>{
      console.log(JSON.stringify(values));
    },
    validationSchema : validationSchema,
  });
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form onSubmit={formik.handleSubmit}>
          <Form.Group id="password">
              <Form.Label>First Name</Form.Label>
              <Form.Control 
                type="text" 
                name="first" 
                value={formik.values.first} 
                onChange={formik.handleChange}
                error={formik.touched.first && Boolean(formik.errors.first)}
                helperText={formik.touched.first && formik.errors.first} 
              />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                value={formik.values.email} 
                onChange={formik.handleChange} 
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email} 
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password </Form.Label>
              <Form.Control 
                type="password" 
                name="password" 
                value={formik.values.password} 
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)} 
                helperText={formik.touched.password && formik.errors.password} 
              />
            </Form.Group>
            <Button  type="submit" className="w-100">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Log In
      </div>
    </>
  )
}