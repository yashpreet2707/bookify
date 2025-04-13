import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useFirebase } from '../context/Firebase';
import { Button } from 'react-bootstrap';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../context/Firebase';
import { NavLink, useNavigate } from 'react-router-dom';

const MyNavBar = () => {

    const firebase = useFirebase();
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                // user is logged in
                setUser(user);
            } else {
                // user is logged out
                setUser(null)
                navigate('/login')
            }
        })
    }, []);


    const handleLogout = async () => {
        await firebase.logoutUser();
    }

    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#">Bookify</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/book/list" style={{ fontSize: "20px" }}>Add Listing</Nav.Link>
                        {(user) && <Button onClick={handleLogout} className='ms-5' variant='warning'>Log Out</Button>}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default MyNavBar