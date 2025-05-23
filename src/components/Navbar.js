import React from 'react';

const Navbar = () => (
  <nav style={{ backgroundColor: '#004080', color: '#fff', padding: '1rem' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <h1>Tejashwini L G</h1>
      <div>
        {['About', 'Education', 'Projects', 'Skills', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{ marginLeft: '1rem', color: '#fff', textDecoration: 'none' }}>
            {item}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

export default Navbar;