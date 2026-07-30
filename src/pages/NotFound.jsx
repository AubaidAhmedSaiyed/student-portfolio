import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section style={{ textAlign: 'center', padding: '3rem 1rem' }}>
      <h2>404 — Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Go back home</Link>
    </section>
  );
}

export default NotFound;
