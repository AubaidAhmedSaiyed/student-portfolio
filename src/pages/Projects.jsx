import { useEffect, useMemo, useState } from 'react';
import './Projects.css';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

const GITHUB_USERNAME = 'AubaidAhmedSaiyed';

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  const fetchRepos = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error('Unexpected API response format.');
      }

      setRepos(data);
    } catch (err) {
      setError(err.message || 'Unable to load repositories right now.');
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  const filteredRepos = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return repos;
    }

    return repos.filter((repo) => repo.name.toLowerCase().includes(query));
  }, [repos, search]);

  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="projects-toolbar" role="search">
        <label className="sr-only" htmlFor="repo-search">
          Search repositories
        </label>
        <input
          id="repo-search"
          type="search"
          placeholder="Search repositories"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

    {' '}
    
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorMessage message={error} onRetry={fetchRepos} />
      ) : filteredRepos.length > 0 ? (
        <div className="project-grid" aria-label="GitHub repositories">
          {filteredRepos.map((repo) => (
            <article className="project-card" key={repo.id}>
              <h3>{repo.name}</h3>
              <p className="stack">{repo.description || 'No description provided.'}</p>
              <p className="repo-meta">
                <span>⭐ {repo.stargazers_count}</span>
                <a href={repo.html_url} target="_blank" rel="noreferrer noopener">
                  View repo
                </a>
              </p>
            </article>
          ))}
        </div>
      ) : (
        <p className="empty-state">No repositories matched your search.</p>
      )}
    </section>
  );
}

export default Projects;
