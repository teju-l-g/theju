import React from 'react';

const Skills = () => (
  <section id="skills" style={{ padding: '3rem', background: 'linear-gradient(to right, #f1f8e9, #e8f5e9)' }}>
    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem', color: '#2e7d32' }}>🛠 Skills</h2>
    <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', listStyle: 'none', padding: 0 }}>
      {['C', 'C++', 'Java', 'Python', 'HTML & CSS', 'SQL', 'DBMS', 'Excel', 'PowerPoint', 'Windows', 'Ubuntu', ].map((skill, index) => (
        <li key={index} style={{ backgroundColor: '#ffffff', padding: '1rem 1.5rem', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', fontWeight: 'bold', color: '#424242' }}>
          {skill}
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;