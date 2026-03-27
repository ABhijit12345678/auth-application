import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

function Signup() {

    // Store signup form input values (name, email, password)
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    })

    // Hook for navigation after successful signup
    const navigate = useNavigate();

    // Handle input changes and update state
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copySignupInfo = { ...signupInfo };
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    }

    // Handle signup form submission
    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;

        // Validation: check if all fields are provided
        if (!name || !email || !password) {
            return handleError('name, email and password are required')
        }
        try {

            // API call to backend signup endpoint
            const url = "https://auth-application-api.vercel.app/auth/signup";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });

            // Parse response
            const result = await response.json();
            const { success, message, error } = result;

            // Handle success case
            if (success) {
                handleSuccess(message);

                // Redirect to login after short delay
                setTimeout(() => {
                    navigate('/login')
                }, 1000)
            } 

            // Handle validation error from backend
            else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
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
           
            <ToastContainer />
            <Row className='mt-4 mb-5'>
      <Col sm={{size: 6, offset:3}} >
        <Card color='dark' inverse>
          <CardHeader className="text-center">
            <h3>Fill Information to Register !!</h3>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSignup}>
              <FormGroup>
                <Label for='first_name'>Enter Name</Label>
                <Input onChange={handleChange}
                        type='text'
                        name='name'
                        autoFocus
                        placeholder='Enter your name...'
                        value={signupInfo.name}
                />
              </FormGroup>
             
              <FormGroup>
                <Label for='email'>Enter Email</Label>
                <Input onChange={handleChange}
                        type='email'
                        name='email'
                        placeholder='Enter your email...'
                        value={signupInfo.email}
                 />
              </FormGroup>
              <FormGroup>
                <Label for='password'>Enter Password</Label>
                <Input onChange={handleChange}
                        type='password'
                        name='password'
                        placeholder='Enter your password...'
                        value={signupInfo.password}
                />
              </FormGroup>
             
              <div className="text-center">
                <Button outline color='light' >SignUp</Button>
              </div>
              
                <div className="text-center mt-2">
                  Already have an account. <Button color="info" outline size="sm" href="/login" tag="a"> Log In </Button> here!!
                </div>
            </Form>
          </CardBody>

        </Card>
      </Col>

    </Row>
        </div>
    )
}

export default Signup
