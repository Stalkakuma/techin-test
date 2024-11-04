import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/HomePage/HomePage';
import { Navbar } from './Components/Navbar/Navbar';
import { BookRegistration } from './Pages/BookReg/BookRegistration';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reg" element={<BookRegistration />} />
      </Routes>
    </>
  );
};

export default App;
