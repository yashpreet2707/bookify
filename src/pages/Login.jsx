import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const firebase = useFirebase();
    console.log(firebase)
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (firebase.isLoggedIn) {
            // navigate to home
            navigate("/")
        }
    }, [firebase, navigate])

    const handleSubmit = async (e) => {
        e.preventDefault();
        await firebase.signinUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='container mt-5'>
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
                    Log In
                </Button>
            </Form>
            <Button className='mt-5' onClick={firebase.signinWithGoogle} variant='danger'>Sign in with Google</Button>
        </div>
    )
}

export default LoginPage