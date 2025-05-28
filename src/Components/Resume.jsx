import React from 'react';
import pdf from '../assets/SAM _Node & Python.pdf';

const Resume = () => {
  return (
    <div style={{ height: '100vh', background: '#f4f4f4' }}>
      <iframe
        src={pdf}
        title="Resume"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default Resume;
