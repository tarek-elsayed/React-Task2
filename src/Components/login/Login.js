import React, { useState, useRef } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { Link} from "react-router-dom";


export default function Login() {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [error,setError] = useState()
    const passRef = useRef();

    const rgxEmail = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    const rgxPass = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$")

    const handelEmailChange = ()=>{
        if( !rgxEmail.test(email)){
            setError('Un vailled email')
        } 
        if( rgxEmail.test(email)){
            setError('')
        } 

    }

    const  handelPasswordChange = ()=>{
        if( !rgxPass.test(password)){
            setError('Un vailled password')
        }  
        if( rgxPass.test(password)){
            setError('')
        }  
    }


    const handelEye = ()=>{
      passRef.current.type = "text"
    }

    return (
        <>
        <Container
          className="d-flex align-items-center   justify-content-center"
          style={{ minHeight: "100vh" }}
        >
      
          <Card className="w-100" style={{ maxWidth: "400px" }}>
            <Card.Body>
              <h2 className="text-center mb-4"> log In</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form >
                <Form.Group id="email">
                  <Form.Label> Email</Form.Label>
                  <Form.Control type="email" name="email" value={email} onBlur={(e)=>{handelEmailChange(e)}} onChange={(e)=>{setEmail(e.target.value);}} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label> Password</Form.Label>
                  <Form.Control type="password" name="password" ref={passRef} value={password} onBlur={(e)=>{handelPasswordChange(e)}} onChange={(e)=>{setPassword(e.target.value)}} required />
                  <span onClick={()=>{handelEye()}}>eye</span>
                </Form.Group>
                <Button  type="submit" className="w-100 mt-4">
                  Log In
                </Button>
              </Form>
            </Card.Body>
            <div className="w-100 text-center mt-2">
              Need an account? <Link to="/signup" className="text-decoration-none"> Sign Up </Link>
            </div>
          </Card>
        </Container>
      </>
    )
}
