// components/Projects.js
import React from 'react';

const projects = [
  {
    title: 'Farm2Home - Farmer to Consumer Web Platform',
    desc: 'Designed to connect farmers directly to consumers, enabling sale/delivery of fruits, vegetables, dairy, grains and more. Features include product listing, order placement, delivery tracking using HTML, CSS, JS, PHP & MySQL.',
    link: '#'
  },
  {
    title: 'Ovarian Cancer Detection using ML',
    desc: 'An ML-based diagnostic system for early-stage detection using histopathological image datasets with feature extraction, model training & accuracy improvements.',
    link: '#'
  },
  {
    title: 'AgriRoute',
    desc: 'Smart last-mile rural logistics platform for feed delivery using FastAPI & PostgreSQL. Includes K-Means clustering, COD tracking & OTP verification via Twilio.',
    link: '#'
  },
  {
    title: 'Chatbot using NLP',
    desc: 'AI-powered chatbot using Python, Flask, NLTK with custom intents and a user-friendly UI for smooth natural language communication.',
    link: '#'
  },
  {
    title: 'Resume Screening Agent',
    desc: 'AI-driven resume filter built using Streamlit + LangChain + OpenAI + ChromaDB. Generates job match score, identifies missing skills & ranks resumes.',
    link: '#'
  }
];

const vibrantColors = ['#ffebee','#e3f2fd','#fff8e1','#e8f5e9','#ede7f6'];

const Projects = () => (
  <section id="projects" style={{ padding:'3rem',background:'linear-gradient(135deg,#e0f7fa,#f1f8e9)' }}>
    <h2 style={{ textAlign:'center',fontSize:'2.5rem',marginBottom:'3rem',color:'#1a237e' }}>🚀 My Projects</h2>

    <div style={{ display:'flex',flexWrap:'wrap',gap:'2rem',justifyContent:'center' }}>
      {projects.map((p,i)=>(
        <div key={i} 
             style={{
                background:vibrantColors[i%vibrantColors.length],
                padding:'1.8rem',
                borderRadius:'14px',
                boxShadow:'0 8px 18px rgba(0,0,0,.15)',
                width:'320px',
                transition:'.3s',
                cursor:'pointer'
             }}
             onMouseEnter={e=>e.currentTarget.style.transform='scale(1.06)'}
             onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}>

          <h3 style={{color:'#0d47a1',fontSize:'1.3rem',fontWeight:'bold'}}>{p.title}</h3>
          <p style={{margin:'10px 0',color:'#37474f'}}>{p.desc}</p>
          <a href={p.link} target="_blank" rel="noreferrer"
             style={{fontWeight:'bold',color:'#004d40',textDecoration:'none'}}>🔗 View Project</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
