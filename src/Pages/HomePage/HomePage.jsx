import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import './homepageStyles.css';
import { BookCard } from '../../Components/BookCard/BookCard';

export const HomePage = () => {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    axios
      .get('https://mondayexam.onrender.com/api/v1/books/')
      .then((response) => setBookList(response.data))
      .catch((error) => console.log(error));
  }, [bookList]);
  return (
    <main>
      {bookList.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </main>
  );
};
