import React,  {useContext} from 'react'
import {BooksContext} from "../contexts/books-context-provider";
import BookDetail from "./book-detail";

function BooksList() {
    const {books} = useContext(BooksContext)

    const imgId =  [
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
  ];
    const booksImage =  [
          '../img/1.jpg',
          '../img/2.jpg',
          '../img/3.jpg',
          '../img/4.jpg',
          '../img/5.jpg',
    ];

    return (
        <div style={{ padding:5}}>
            {books.length>0?
            <ul style={{listStyle:"none", padding:0,}}>
                {books.map(
                    (book)=>{
                        return(
                           <li key={book.id}> <BookDetail book={book} image = {booksImage[book.id]} imgId ={imgId[book.id]} /></li>
                        )
                    }
                )}
            </ul> :
            <p style={{color:"white", background:"#333", padding:10}}>No Book Available! Please Add a New Book...</p>
        }
        </div>
    )
}

export default BooksList;
