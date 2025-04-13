import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase'
import BookCard from '../components/Card';

const OrdersPage = () => {
    const firebase = useFirebase();

    const [books, setBooks] = useState([]);

    useEffect(() => {
        if (firebase.isLoggedIn) {
            firebase.fetchMyBooks(firebase.user.uid)?.then((books) => setBooks(books));
        }
    }, [firebase])

    // console.log(books)

    if (!firebase.isLoggedIn) return <h1 className='text-center mt-5'>Loading...</h1>

    return (
        <div>
            {/* {books.map((book) => (
                <BookCard key={book.id} id={book.id} {...book.data} />
            ))} */}
            Order Page listings
        </div>
    )
}

export default OrdersPage