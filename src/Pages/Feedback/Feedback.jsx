import { useState } from 'react';
import './Feedback.css';

export const Feedback = () => {
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    title: '',
    text: '',
  });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFeedbackForm({
      ...feedbackForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };
  return (
    <main className="main__reg">
      <h1>Palikite atsiliepimą: </h1>
      {showToast && (
        <div className="toast">
          <p>{`Ačiū, ${feedbackForm.name}, jūsų atsiliepimą gavome.`}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label>Jūsų vardas: </label>
        <input type="text" onChange={handleChange} name="name" />
        <label>Pavadinimas: </label>
        <input type="text" onChange={handleChange} name="title" />
        <label>Komentuokite: </label>
        <textarea onChange={handleChange} rows="5" cols="75" name="text" />
        <button>Priduoti</button>
      </form>
    </main>
  );
};
