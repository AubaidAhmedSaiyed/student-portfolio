import './Header.css';

function Header({ name, themeColor }) {
  return (
    <header className="header" style={{ borderBottomColor: themeColor }}>
      <div className="header-badge" style={{ color: themeColor }}>
        Systems • Product • Problem Solver
      </div>
      <h1 style={{ color: themeColor }}>{name}</h1>
      <p className="tagline">
        Building reliable systems, thoughtful products, and practical solutions for real-world challenges.
      </p>
    </header>
  );
}

export default Header;
