import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/HomePage/HomePage';
import { Navbar } from './Components/Navbar/Navbar';
import { BookRegistration } from './Pages/BookReg/BookRegistration';
import { Feedback } from './Pages/Feedback/Feedback';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reg" element={<BookRegistration />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </>
  );
};

export default App;
