import React, { useState } from 'react'; // Import useState correctly
import Entry from './listentry.jsx';

function List() {
  const [bookData, setBookData] = useState([ // Initialize bookData as an array
    {
      id: 1,
      bookName: 'Harry Potter',
      publishingDate: '2010-05-05',
      description: 'Harry Potter is a courageous young wizard with a lightning-shaped scar on his forehead, marked by his battle with the dark wizard Voldemort. He is known for his bravery, loyalty, and unwavering determination to fight for what is right alongside his friends Ron and Hermione, facing challenges that test his character and resolve throughout the series.',
      Status: 1 
    },
    {
      id: 2,
      bookName: 'The girl who fell beneath the sea',
      publishingDate: '2021-08-15',
      description: 'The book follows the story of a young mermaid named Callion, who sacrifices her memories to save her people and is reborn as a human. As Callion navigates her new life on land, she must confront the secrets of her past and the forbidden magic that threatens both her old and new worlds. ',
      Status: 0 
    },
    {
      id: 3,
      bookName: 'Carrie Soto is back',
      publishingDate: '2022-05-19',
      description: '"Carrie Soto is Back" is a gripping thriller following the return of detective Carrie Soto to her hometown, where she must solve a series of gruesome murders. As Soto delves deeper into the investigation, she uncovers dark secrets from her past and faces a deadly adversary determined to silence her. Filled with suspense, twists, and a relentless heroine, this novel keeps readers on the edge of their seats until the shocking conclusion.',
      Status: 0 
    }                                         
  ]);

  return (
    <div>
      {bookData.map(book => (
        <Entry 
          key={book.id}
          book={book}
        />
      ))}
    </div>
  );
}

export default List;
