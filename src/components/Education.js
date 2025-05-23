import React from 'react';

const education = [
  { degree: 'B.E. in Computer Science', institute: 'Malnad College of Engineering, Hassan', score: 'CGPA: 9.628', year: '2026' },
  { degree: 'PUC', institute: 'Viveka PU College, Mysore', score: '94%', year: '2022' },
  { degree: 'SSLC', institute: 'Kitturu Rani Chennamma School', score: '91.04%', year: '2020' }
];

const Education = () => (
  <section id="education" style={{ padding: '3rem', background: 'linear-gradient(to right, #e0f2f1, #f3e5f5)' }}>
    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem', color: '#00695c' }}>🎓 Education</h2>
    <ul style={{ maxWidth: '800px', margin: '0 auto', listStyle: 'none', padding: 0 }}>
      {education.map((item, idx) => (
        <li key={idx} style={{ backgroundColor: '#ffffff', padding: '1.5rem', marginBottom: '1rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <h3 style={{ marginBottom: '0.5rem', color: '#4a148c' }}>{item.degree}</h3>
          <p style={{ margin: 0 }}>{item.institute}</p>
          <p style={{ margin: 0, fontStyle: 'italic' }}>{item.score} ({item.year})</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Education;