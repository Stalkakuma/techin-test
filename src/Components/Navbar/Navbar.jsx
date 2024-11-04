import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <li>
        <Link to={'/'}>Knygos</Link>
      </li>
      <li>
        <Link to={'/reg'}>Registruoti Knygą</Link>
      </li>
    </nav>
  );
};
