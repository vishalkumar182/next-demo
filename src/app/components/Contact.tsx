// src/components/Contact.tsx
import React from 'react';
import './contact.css'; // Importing the CSS for this component

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <h1>Contact Us</h1>
      <p>Phone: <a href="tel:+918279773855">8279773855</a></p>
      <p>Company: DAAVOSA</p>
      <p>Address: MULLAKADU, THOOTHUKUDI, TAMIL NADU</p>
      <p>Email: <a href="mailto:example@gmail.com">example@gmail.com</a></p>
    </div>
  );
};

export default Contact;
