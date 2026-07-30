import { useState } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import './Home.css';

const skillList = [
  { category: 'Languages', items: ['Python', 'Java', 'JavaScript', 'HTML', 'CSS'] },
  {
    category: 'Frameworks & Tools',
    items: ['React.js', 'Node.js', 'Express.js', 'FastAPI', 'Tailwind CSS', 'Vite', 'MongoDB', 'MySQL', 'Redis', 'XGBoost', 'Git/GitHub', 'Vercel'],
  },
  {
    category: 'Concepts',
    items: ['RESTful API Design', 'System Design', 'Data Structures & Algorithms', 'OOP', 'Asynchronous Programming', 'Microservices', 'Caching', 'RBAC'],
  },
];

function Home() {
  // useState #1: toggles visibility of a help tooltip
  const [showTip, setShowTip] = useState(false);

  return (
    <div>
      <Header name="Your Name" themeColor="#4f46e5" />

      <div className="tip-row">
        <button className="tip-btn" onClick={() => setShowTip((prev) => !prev)}>
          {showTip ? 'Hide tip' : 'Show tip'}
        </button>
        {showTip && (
          <p className="tip-text">
            Tip: use the nav bar above to check out my Projects or send me a message
            on the Contact page.
          </p>
        )}
      </div>

      <About />
      <Skills skillList={skillList} />
    </div>
  );
}

export default Home;
