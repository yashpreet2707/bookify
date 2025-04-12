import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore"
import { useFirebase } from '../context/Firebase'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const BookDetailPage = () => {

    const params = useParams()
    const firebase = useFirebase();

    const [data, setData] = useState(null);
    const [qnt, setQnt] = useState(1);

    useEffect(() => {
        firebase.getBookByID(params.bookID).then(value => setData(value.data()))
    }, [])

    const handleBuyNow = async () => {
        const result = await firebase.placeOrder(params.bookID, qnt)
        console.log("Order placed")
        console.log(result)
    }

    if (data == null) return <h1 className='text-center mt-5 mb-5'>Loading...</h1>

    return (
        <div className='container mt-5'>
            <h1>{data.name}</h1>
            <h4>Rs. {data.price}</h4>
            <h4>ISBN number : {data.isbn}</h4>
            <h3>Owner Details: {data.displayName} ({data.userEmail})</h3>
            <img src={data.photoURL} alt="" />

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control onChange={(e) => setQnt(e.target.value)} value={qnt} type="number" placeholder="Enter Quantity" />
            </Form.Group>

            <Button onClick={handleBuyNow} variant="success">Buy Now</Button>
        </div>
    )
}

export default BookDetailPage