import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useFirebase } from '../context/Firebase';
import { NavLink, useNavigate } from 'react-router-dom';

const RegisterPage = () => {

    const firebase = useFirebase();
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (firebase.isLoggedIn) {
            navigate("/")
        }
    }, [firebase, navigate])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await firebase.signupUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='container mt-5'>
            <h1 className='text-center mb-5'>SignUp Page</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>

            </Form>
            <NavLink to='/login'><Button variant='warning' className='mt-5'>Already a user ?</Button></NavLink>
        </div>
    )
}

export default RegisterPage