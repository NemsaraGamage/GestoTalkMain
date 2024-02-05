import React from 'react';
import '../../components/styles.css';

const SiteOverlay = ({ onClose }) => {
  return (
    <div className="site-overlay">
      <div className="overlay-content">
        <h2>Welcome to GestoTalk!</h2>
        <p>This is a brief explanation of how to navigate the site:</p>
        <p>Navigation Bar: Navigate through Home, About, Services, and Contact.</p>
        <p>Dark Mode Switch: Toggle between light and dark mode.</p>
        <p>Left Panel: Contains camera access for the hand signing</p>
        <p>Right Panel: Contains the chatbot for communication</p>
        
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SiteOverlay;
