// components/Intern.js

import React from 'react';

const Intern = () => {
  return (
    <section id="certification" style={{ padding: '3rem', background: 'linear-gradient(135deg, #fce4ec 0%, #f3e5f5 100%)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', color: '#6a1b9a' }}>
        🎓 Certifications & Internships
      </h2>

      <div style={{
        border: '1px solid #ccc',
        borderRadius: '16px',
        padding: '2rem',
        backgroundColor: '#e3f2fd',
        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
        textAlign: 'left',
        maxWidth: '600px',
        margin: '1rem auto'
      }}>
        <h3 style={{ color: '#283593', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          Artificial Intelligence Internship & Certification
        </h3>
        <p style={{ color: '#37474f', marginBottom: '0.5rem' }}>
          <strong>Organization:</strong> Acmegrade
        </p>
        <p style={{ color: '#37474f', marginBottom: '1rem' }}>
          <strong>Duration:</strong> 11-Mar-2025 to 11-Apr-2025
        </p>
        <p style={{ color: '#37474f', marginBottom: '1rem' }}>
          Completed a 1-month internship and training in Artificial Intelligence, gaining hands-on experience with AI tools and real-world projects. Demonstrated technical ability, creativity, and strong problem-solving skills.
        </p>
      </div>
    </section>
  );
};

export default Intern;
