import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase'
import BookCard from '../components/Card';
import { CardGroup } from 'react-bootstrap';

const HomePage = () => {
    const firebase = useFirebase();

    const [books, setBooks] = useState([]);
    useEffect(() => {
        firebase.listAllBooks().then(books => setBooks(books.docs))
    }, [])


    return (
        <div className='container'>
            <h1 className='text-center mt-5 mb-5'>All Books Listing</h1>
            <CardGroup>
                {books.map(book => <BookCard key={book.id} {...book.data()} />)}
            </CardGroup>
        </div>
    )
}

export default HomePage