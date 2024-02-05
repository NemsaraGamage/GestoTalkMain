import React from 'react';

const AboutPopup = ({ onClose }) => {
  return (
    <div className="aboutPopup">
      <div className="aboutPopup-content">
        <h2>About GestoTalk</h2>
        <p>This application is designed to help individuals who want to practice there hand gestures, 
            they way the application works is that you perform a gesture and then that gesture gets converted 
            into words which will be used to communicate with the chatbot. </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AboutPopup;
