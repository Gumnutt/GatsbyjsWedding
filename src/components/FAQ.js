import React from 'react';
import '../assets/sass/main.scss';

const FAQ = props => (
  <div className="fade-up faq">
    <div className="text-container">
      <h3>{props.question}</h3>
      <p>{props.answer}</p>
    </div>
  </div>
);

export default FAQ