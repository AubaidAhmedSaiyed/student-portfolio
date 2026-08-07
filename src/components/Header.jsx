import './Header.css';

function Header({ name, themeColor }) {
  return (
    <header className="header" >
      <div className="header-badge" >
        Systems • Product • Problem Solver
      </div>
      <h1>{name}</h1>
      <p className="tagline">
        Building reliable systems, thoughtful products, and practical solutions for real-world challenges.
      </p>
    </header>
  );
}

export default Header;
