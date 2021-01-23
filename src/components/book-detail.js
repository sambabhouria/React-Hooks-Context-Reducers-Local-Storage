import React, {useContext} from 'react'
import {BooksContext} from "../contexts/books-context-provider";


function BookDetail({book, image, imgId}) {
    const {dispatch} = useContext(BooksContext)
    console.log('iamge', image);
    return (
        <div>
            <div style={{padding:"10px", background:"#333", margin:"10px", borderRadius:10}}>
            {/* <img className="img-fluid" src={`${process.env.PUBLIC_URL}/logo192.png`} alt="logo"/> */}
            {/* <img src={require('./logo.svg')} />  if you use webpackd*/}
            {/* <p><img src={`../img/2.jpg`} alt={book.title} /></p> */}
            <div  style={{float: 'right'}}><p><img src={`${process.env.PUBLIC_URL}${imgId}`} alt={book.title} /></p></div>
                <div className="title"><p>{book.title}</p></div>
                <div className="author" style={{color:"#bbb"}}><p>by {book.author} <button style={{background:"red", borderStyle:"none", padding:5, color:"white", borderRadius:5}}  onClick={()=>dispatch({type:"DELETE_BOOK",book:{id:book.id}})}>Delete</button> </p></div>
            </div>
        </div>
    )
}

export default BookDetail
