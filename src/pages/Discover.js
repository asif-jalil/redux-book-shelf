import React from 'react';
import { useSelector } from 'react-redux';
import SingleBook from '../components/Book/Book';
import PageLayout from '../components/PageLayout/PageLayout';
const Discover = () => {
    const books = useSelector((state) => {
        return state.books.discoverList;
    })
  
    
    return (
        <PageLayout>
            {
                books?.map((book) => <SingleBook key={book.id} book={book} />)
            }
        </PageLayout>
    );
};

export default Discover;