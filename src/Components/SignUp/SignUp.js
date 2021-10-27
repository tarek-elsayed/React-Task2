import React, { useState, useRef } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SignUp() {

  const [userName, setUsrName] = useState();
  const [error, setError] = useState();
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const [conPassword, setConPassword] = useState();
  const passRef = useRef();
  const rgxEmail = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
  const rgxUserName = new RegExp("^[-a-zA-Z0-9-()]+(\S+[-a-zA-Z0-9-()]+)*$");
  const rgxPass = new RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")


  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== conPassword) {
      return setError(' pass not cnonfirm ')
    }
  };

  const handelUserName = () => {
    if (!rgxUserName.test(userName)) {
      setError('un vailled username')
    }
    if (rgxUserName.test(userName)) {
      setError('')
    }
  }

  const handelEmailChange = () => {
    if (!rgxEmail.test(email)) {
      setError('Un vailled email')
    }
    if (rgxEmail.test(email)) {
      setError('')
    }

  }

  const handelPasswordChange = () => {
    if (!rgxPass.test(password)) {
      setError('Un vailled password')
    }
    if (rgxPass.test(password)) {
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
            <h2 className="text-center mb-4"> Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="userName">
                <Form.Label> User Name </Form.Label>
                <Form.Control type="text" name="userName" value={userName} onBlur={() => { handelUserName() }} onChange={(e) => { setUsrName(e.target.value); }} required />
              </Form.Group>
              <Form.Group id="email">
                <Form.Label> Email</Form.Label>
                <Form.Control type="email" name="email" value={email} onBlur={() => { handelEmailChange() }} onChange={(e) => { setEmail(e.target.value); }} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label> Password</Form.Label>
                <Form.Control type="password" ref={passRef} name="password" value={password} onBlur={() => { handelPasswordChange() }} onChange={(e) => { setpassword(e.target.value); }} required />
                <span onClick={()=>{handelEye()}}>eye</span>
              </Form.Group>
              <Form.Group id="password-confrim">
                <Form.Label> Password confirmation</Form.Label>
                <Form.Control type="password" name="password" value={conPassword} onChange={(e) => { setConPassword(e.target.value); }} required />
              </Form.Group>
              <Button type="submit" className="w-100 mt-4">
                Sign Up
              </Button>
            </Form>
          </Card.Body>
          <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/login" className="text-decoration-none"> Log In </Link>
          </div>
        </Card>
      </Container>
    </>
  );
}
