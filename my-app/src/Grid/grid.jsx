import React from 'react';
import './grid.css';

function GridView() {
  const books = [
    { title: 'Harry Potter', genre: 'Fantasy' },
    { title: 'The girl who fell beneath the sea', genre: 'Sci-Fi' },
    { title: 'Final Girls', genre: 'Mystery' },
    { title: 'Same water', genre: 'Romance' },
    { title: 'Good Girl Guide to Murder', genre: 'Thriller' },
    { title: 'A Court Of Thorns and Roses', genre: 'Historical Fiction' },
    { title: 'IT', genre: 'Horror' },
    { title: 'Shatter Me', genre: 'Dystopian' },
    { title: 'Better Than The Movies', genre: 'Young Adult' }
  ];

  return (
    <div className="grid-container">
      {books.map((book, index) => (
        <div key={index} className="grid-item">
          <h3>{book.title}</h3>
          <p>{book.genre}</p>
        </div>
      ))}
    </div>
  );
}

export default GridView;
