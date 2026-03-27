import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
import {Card, CardTitle,CardText, CardBody,Button, Container} from "reactstrap";


function Home() {
     // Store the currently logged-in user's name
    const [loggedInUser, setLoggedInUser] = useState('');

    // Store products fetched from backend
    const [products, setProducts] = useState('');

    // Hook for navigation after logout
    const navigate = useNavigate();

    // -------------------- Lifecycle: Load Logged-in User --------------------
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, [])


    // Handle logout functionality
    const handleLogout = (e) => {
        // Clear localStorage values
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');

        // Show success toast
        handleSuccess('User Loggedout');

        // Redirect to login page after short delay
        setTimeout(() => {
            navigate('/login');
        }, 1000)
    }


    // Fetch products from backend API
    const fetchProducts = async () => {
        try {
            const url = "https://auth-application-api.vercel.app/products";
            const headers = {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            }
            const response = await fetch(url, headers);
            const result = await response.json();
            console.log(result);
            setProducts(result);
        } catch (err) {
            // Handle network or unexpected errors
            handleError(err);
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    // -------------------- UI Rendering --------------------
    return (
        <div>

        <Container className=" py-5">
          <Card tag="h5" className="text-center text-light bg-dark">
            <CardBody>
              <CardTitle tag="h5" className="pt-4">
                Welcome {loggedInUser}
              </CardTitle>
              <Button onClick={handleLogout} color="primary" className="mt-3">Logout</Button>
            </CardBody>
          </Card>
          <Card className=" bg-light text-center ">
            <CardBody>
              <CardTitle className="text-center text-dark bg-success">
                Products List
              </CardTitle>
              <CardText>
                <div className="d-flex flex-wrap justify-content-center">
                    {products &&
                      products.map((item, index) => (
                 <Card key={index} className="m-3 bg-light text-center" style={{ width: "18rem" }}>
                  <CardBody>
                       <CardTitle className="text-center text-light bg-dark p-2">
                           {item.name}
                         </CardTitle>
                     <CardText className="mt-2">
                          Task: {item.task}
                        </CardText>
                        <CardText className="mt-2">
                          Status: {item.status}
                        </CardText>
                     </CardBody>
                     </Card>
                    ))}
                </div>

              </CardText>
              
                 </CardBody>
                </Card>
            </Container> 
            <ToastContainer />
            
     
        </div>

        
    )
}

export default Home
