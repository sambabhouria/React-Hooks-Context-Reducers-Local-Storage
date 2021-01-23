import React from 'react';
import './App.css';
import BooksContextProvider from './contexts/books-context-provider';
import NavBar from './components/nav-bar';
import BooksList from './components/books-list';
import AddBook from './components/add-book';

function App() {
  return (
    <div className="App">
      <BooksContextProvider>
        <NavBar/>
        <BooksList/>
        <AddBook/>
      </BooksContextProvider>
    </div>
  );
}

export default App;
