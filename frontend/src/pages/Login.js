import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import { Button, Card, CardBody, CardHeader, Col,Form, FormGroup, Input, Label, Row } from 'reactstrap';

function Login() {

     // -------------------- State Management --------------------
    // Store login form input values (email & password)
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })

    // Hook for navigation after successful login
    const navigate = useNavigate();

    // Handle input changes and update state
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copyLoginInfo = { ...loginInfo };
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    }
    // Handle login form submission
    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;

        // Validation: check if email and password are provided
        if (!email || !password) {
            return handleError('email and password are required')
        }
        try {
            // API call to backend login endpoint
            const url = "https://auth-application-api.vercel.app/auth/login";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });

            // Parse response
            const result = await response.json();
            const { success, message, jwtToken, name, error } = result;

            // Handle success case
            if (success) {
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);

                // Redirect to home after short delay
                setTimeout(() => {
                    navigate('/home')
                }, 1000)

                // Handle validation error from backend
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } 

            // Handle general failure
            else if (!success) {
                handleError(message);
            }
            console.log(result);
        } catch (err) {
            handleError(err);
        }
    }

    // -------------------- UI Rendering --------------------
    return (
        <div className='container'>
           {/* Toast notifications container */}
            <ToastContainer />
     <Row className='mt-4'>
        <Col sm={{size: 6, offset:3}} >
          <Card color='dark' inverse>
            <CardHeader className="text-center ">
              <h3>Login Here !!</h3>
            </CardHeader>
            <CardBody>
              <Form onSubmit={handleLogin}>
                <FormGroup>
                  <Label for='email'>Enter Email</Label>
                  <Input onChange={handleChange}
                        type='email'
                        name='email'
                        placeholder='Enter your email...'
                        value={loginInfo.email}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='password'>Enter Password</Label>
                  <Input onChange={handleChange}
                        type='password'
                        name='password'
                        placeholder='Enter your password...'
                        value={loginInfo.password}
                   />
                </FormGroup>
                <div className="text-center">
                  <Button outline color='light' >Login</Button>
                </div>
                <div className="text-center mt-2">
                  Don't have an account. <Button color="info" outline size="sm" href="/signup" tag="a"> Sign Up </Button> here!!
                </div>

              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
        </div>
    )
}

export default Login
