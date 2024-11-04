import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './BookRegistration.css';

export const BookRegistration = () => {
  const navigate = useNavigate();
  const [bookForm, setBookForm] = useState({
    title: '',
    author: '',
    category: '',
    price: 0,
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1678895127i/123163147.jpg',
    reserved: false,
  });

  const handleForm = (e) => {
    setBookForm({
      ...bookForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://mondayexam.onrender.com/api/v1/books', bookForm)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    navigate('/');
  };

  return (
    <main className="main__reg">
      <h1>Pridėkite naują knygą: </h1>
      <form onSubmit={handleSubmit}>
        <label>Pavadinimas: </label>
        <input type="text" name="title" onChange={handleForm} value={bookForm.title} />
        <label>Autorius:</label>
        <input type="text" name="author" onChange={handleForm} value={bookForm.author} />
        <label>Kategorija: </label>
        <input type="text" name="category" onChange={handleForm} value={bookForm.category} />
        <label>Kaina: </label>
        <input type="number" name="price" onChange={handleForm} value={bookForm.price} />
        <button type="submit">Registruoti!</button>
      </form>
    </main>
  );
};
