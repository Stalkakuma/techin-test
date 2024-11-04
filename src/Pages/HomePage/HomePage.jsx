import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import './homepageStyles.css';
import { BookCard } from '../../Components/BookCard/BookCard';

export const HomePage = () => {
  const [bookList, setBookList] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
    axios
      .get('https://mondayexam.onrender.com/api/v1/books/')
      .then((response) => setBookList(response.data))
      .catch((error) => console.log(error));
  }, [bookList]);

  return (
    <div className="wrapper">
      <div className="search">
        <input type="text" label="Search" onChange={handleInput} />
      </div>
      <h1>Knygos: </h1>
      <main className="main__grid">
        {bookList.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </main>
    </div>
  );
};
