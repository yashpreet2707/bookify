import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BookCard = (props) => {
    return (
        <div className='ms-2'>
            <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        This book has a title {props.name} and has the price of Rs. {props.price} and is sold by {props.displayName}.
                    </Card.Text>
                    <Button variant="primary">hehe...</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default BookCard