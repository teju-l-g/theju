// components/Projects.js
import React from 'react';

const projects = [
  { title: 'Farm2Home', desc: 'Connecting farmers and consumers for fresh produce.', year: 2025, link: '#' },
  { title: 'Chatbot using NLP', desc: 'Smart chatbot for interactive communication.', year: 2025, link: '#' },
  { title: 'Movie Recommendation System', desc: 'Suggests movies using collaborative filtering.', year: 2025, link: '#' },
  { title: 'Spam/Ham Classification', desc: 'Detects spam emails using NLP.', year: 2025, link: '#' },
  { title: 'MNIST Digit Classification', desc: 'Recognizes handwritten digits with neural nets.', year: 2025, link: '#' },
  { title: 'Ovarian Cancer Detection', desc: 'Early detection using ML algorithms.', year: 'Ongoing', link: '#' }
];

const vibrantColors = ['#fce4ec', '#e3f2fd', '#e8f5e9', '#fff3e0', '#ede7f6', '#f9fbe7'];

const projectBoxStyle = (color) => ({
  border: '1px solid #ccc',
  borderRadius: '16px',
  padding: '1.5rem',
  backgroundColor: color,
  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
  textAlign: 'left',
  width: '100%',
  maxWidth: '320px',
  margin: '1rem',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer'
});

const projectBoxHoverStyle = {
  transform: 'scale(1.05)',
  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)'
};

const gridContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '2rem'
};

const Projects = () => {
  const [hoverIndex, setHoverIndex] = React.useState(null);

  return (
    <section id="projects" style={{ padding: '3rem', background: 'linear-gradient(135deg, #e0f7fa 0%, #f1f8e9 100%)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', color: '#2e7d32' }}>🌟 My Projects</h2>
      <div style={gridContainerStyle}>
        {projects.map((p, idx) => (
          <div
            key={idx}
            style={{
              ...projectBoxStyle(vibrantColors[idx % vibrantColors.length]),
              ...(hoverIndex === idx ? projectBoxHoverStyle : {})
            }}
            onMouseEnter={() => setHoverIndex(idx)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <h3 style={{ color: '#1a237e', fontSize: '1.3rem', marginBottom: '0.5rem' }}>{p.title} ({p.year})</h3>
            <p style={{ marginBottom: '1rem', color: '#37474f' }}>{p.desc}</p>
            {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ color: '#0d47a1', textDecoration: 'none', fontWeight: 'bold' }}>🔗 View Project</a>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;