import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './index.css';

function App() {
  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch('https://anapioficeandfire.com/api/books');

      if (res.ok === true) {
        const data = await res.json();
        setBooks(data);
      } else {
        let error = new Error('Sth went wrong');
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='App'>
      <h1>
        <span>A Song of Ice and Fire</span> - all <span>Game of Thrones </span>
        Books{' '}
      </h1>

      <div className='books-container'>
        {books.map((book) => {
          return (
            <div key={uuidv4()}>
              <h2>{book.name}</h2>
              <p>
                ({book.mediaType}, {book.numberOfPages} p.)
              </p>
              <p>ISBN: {book.isbn}</p>
              <p>First published: {book.released.slice(0, 10)}</p>
              <p>
                Publisher: {book.publisher}, {book.country}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
