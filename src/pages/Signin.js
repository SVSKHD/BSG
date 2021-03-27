import React, { useContext, useState } from "react";
import {
  Container,
  Form,
  Button,
  FormGroup,
  Label,
  Col,
  Row,
  Input,
  Card,
  CardBody,
  CardFooter,
  CardHeader
} from "reactstrap"
import firebase from "firebase/app"
import {UserContext} from "../context/UserContext"
import {Redirect} from "react-router-dom"
import {toast} from "react-toastify"
import Layout from "../components/Layout/layout"

const Signup = () => {


  const context = useContext(UserContext)
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  const handleSignup = () =>{
    firebase
    .auth()
    .signInWithEmailAndPassword(email , password)
    .then(response =>{
      console.log(response)
      context.setUser({
        email:response.user.email,
        uid:response.user.uid               
      })
    })
    .catch(error => {
      console.log(error)
      toast(error.message,{
        type:"error"
      })
    })
  }

  const handleSubmit = e =>{
    e.preventDefault()
    handleSignup()
  }

  if(context.user?.uid){
   return <Redirect to ="/" />
  }
  return (
    <Container className="text-center" fluid>
      <br/>
      <Layout>
      <Row>
        <Col lg={6} className="offset-lg-3 mt-5">
          <Card>
            <Form onSubmit={handleSubmit}>
              <CardHeader className="titletext"><h1>Signin here</h1></CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label for="email" sm={3}>
                    Email
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="provide your email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="password" sm={3}>
                    Password
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="your password here"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button className="Butext" type="submit" outline color="dark">
                  Sign in
                </Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
      <br/>
      </Layout>
    </Container>
  );
};

export default Signup;
