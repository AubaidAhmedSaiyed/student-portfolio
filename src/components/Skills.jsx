import './Skills.css';

function Skills({ skillList }) {
  return (
    <section className="skills">
      <h2>Skills</h2>
      {skillList.map((group) => (
        <div className="skill-group" key={group.category}>
          <h3>{group.category}</h3>
          <ul>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;
