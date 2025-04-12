import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const BookCard = (props) => {
    const navigate = useNavigate();

    return (
        <div className='ms-2'>
            <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        This book has a title {props.name} and has the price of Rs. {props.price} and is sold by {props.displayName}.
                    </Card.Text>
                    <Button onClick={e => navigate(`/book/view/${props.id}`)} variant="primary">view</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default BookCard