import axios from 'axios';
import './CardStyles.css';

export const BookCard = ({ book }) => {
  const { id, title, author, category, price, cover, reserved } = book;

  const handleStatusChange = () => {
    axios.put(`https://mondayexam.onrender.com/api/v1/books/${id}`, { ...book, reserved: !reserved });
  };

  return (
    <article>
      <div className="card__image-box">
        <img src={cover} alt="" />
      </div>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{price}</p>
      <p>{category}</p>
      <button onClick={handleStatusChange}>{reserved ? 'Grąžinti' : 'Išduoti'}</button>
    </article>
  );
};
