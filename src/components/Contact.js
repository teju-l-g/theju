import React from 'react';

const Contact = () => (
  <section id="contact" style={{ padding: '3rem', background: 'linear-gradient(to right, #ede7f6, #e3f2fd)' }}>
    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem', color: '#283593' }}>📞 Contact Me</h2>
    <div style={{ textAlign: 'center', fontSize: '1.1rem', color: '#37474f' }}>
      <p>Email: <a href="mailto:thejashwinilg@gmail.com" style={{ color: '#1e88e5', textDecoration: 'none' }}>thejashwinilg@gmail.com</a></p>
      
      <p>LinkedIn: <a href="https://www.linkedin.com/in/tejashwini-l-g-4b7b88267" target="_blank" rel="noreferrer" style={{ color: '#1e88e5' }}>Profile</a></p>
      <p>GitHub: <a href="https://github.com/TejashwinLG-2004/Tejashwini-LG.git" target="_blank" rel="noreferrer" style={{ color: '#1e88e5' }}>Repository</a></p>
    </div>
  </section>
);

export default Contact;