import React, { createContext, useReducer, useEffect} from 'react'
import { bookReducers } from './book-reducers';
export const BooksContext = createContext();
function BooksContextProvider(props) {

    const booksState = [
        {"id": "1", "title": "The Hunger Games (The Hunger Games, #1)", "author": "by Suzanne Collins"},
        {"id": "2", "title": "Harry Potter and the Order of the Phoenix (Harry Potter, #5)", "author": "by J.K. Rowling"},
        {"id": "3", "title": "To Kill a Mockingbird", "author": "by Harper Lee"},
        {"id": "4", "title": "Pride and Prejudice", "author": "by Jane Austen"},
        {"id": "5", "title": "Twilight (Twilight, #1)", "author": "by Stephenie Meyer"},
    ]

    const [books, dispatch] = useReducer(bookReducers, booksState, ()=>{
        const booksData = localStorage.getItem("books");
       return booksData?JSON.parse(booksData):booksState
    });
    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books))
    }, [books]);
    return (
        <BooksContext.Provider value={{books,dispatch}}>
            {props.children}
        </BooksContext.Provider>
    )
}

export default BooksContextProvider
