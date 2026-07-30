import './Projects.css';

const projects = [
  {
    name: 'Vector AI',
    stack: 'React.js · Express.js · MongoDB · Python · FastAPI · Redis · XGBoost',
    description:
      'A retail demand intelligence platform combining demand forecasting, ML-based analytics, and EOQ-based inventory optimization via a RESTful, microservices-oriented architecture. Reduced forecast API latency by 75% through Redis caching and MongoDB indexing.',
  },
  {
    name: 'StackLens',
    stack: 'JavaScript · React.js · Node.js · Express.js · Babel (AST) · Dagre',
    description:
      'A stateless static code analysis engine that parses Abstract Syntax Trees via Babel across 1,400+ file repositories, using O(1) adjacency-list construction and O(V+E) BFS/DFS graph traversal to detect circular dependencies and orphaned modules.',
  },
  {
    name: 'Safe Stay',
    stack: 'MongoDB · Express.js · React.js · Node.js',
    description:
      'A MERN-stack emergency shelter management platform connecting evacuees with verified temporary housing during crises, with JWT-based auth, a scalable backend, and role-based access control dashboards for hosts, evacuees, and admins.',
  },
];

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <article className="project-card" key={p.name}>
            <h3>{p.name}</h3>
            <p className="stack">{p.stack}</p>
            <p>{p.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
