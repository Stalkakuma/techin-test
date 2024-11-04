import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <Link to={'/'}>Knygos</Link>
      <Link to={'/reg'}>Registruoti Knygą</Link>
      <Link to={'/feedback'}>Atsiliepimas</Link>
    </nav>
  );
};
