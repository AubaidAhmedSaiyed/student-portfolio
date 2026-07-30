import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const linkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');

  return (
    <nav className="navbar">
      <NavLink to="/" end className={linkClass}>Home</NavLink>
      <NavLink to="/projects" className={linkClass}>Projects</NavLink>
      <NavLink to="/contact" className={linkClass}>Contact</NavLink>
    </nav>
  );
}

export default NavBar;
