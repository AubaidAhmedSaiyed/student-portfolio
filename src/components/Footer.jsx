import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        <a href="mailto:you@example.com">you@example.com</a>{' '}
        <a href="https://github.com/">GitHub</a> {''}
        <a href="https://linkedin.com/" >LinkedIn</a>
      </p>
      <p>&copy; {year} — Built with React &amp; Vite</p>
    </footer>
  );
}

export default Footer;
