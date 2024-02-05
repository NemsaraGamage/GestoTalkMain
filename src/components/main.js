import React, { useState } from 'react';
import '../components/styles.css';
import LeftPanelCameraAccess from './leftComponents/cameraAccess';
import SiteOverlay from './overlay/SiteOverlay';
import AboutPopup from './overlay/AboutPopup';
import ChatBotUi from './chatbot/ChatbotUi';

const Main = () => {
  
  // darkmode
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // instruction overlay
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  const closeOverlay = () => {
    setIsOverlayVisible(false);
  };

  // camera activity 
  const [isCameraActive, setIsCameraActive] = useState(false);

  const toggleCamera = () => {
    setIsCameraActive(!isCameraActive);
  };

  // About pop-up
  const [isAboutPopupVisible, setIsAboutPopupVisible] = useState(false);

  const openAboutPopup = () => {
    setIsAboutPopupVisible(true);
  };

  const closeAboutPopup = () => {
    setIsAboutPopupVisible(false);
  };


  return (
    <>
      {/* Overlay for the website that explains the website */}
      {isOverlayVisible && <SiteOverlay onClose={closeOverlay} />}

      {/* About Pop-up */}
      {isAboutPopupVisible && <AboutPopup onClose={closeAboutPopup} />}

      {/* Navigation bar  */}
      <div className="navBar">
        <div className="title">GestoTalk</div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#" onClick={openAboutPopup}>About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>

        {/* dark mode switch */}
        <div className='darkModeSwitch'>
            <p>Mode</p>
            <label className="switch">
                <input type="checkbox" onChange={toggleDarkMode} checked={isDarkMode} />
                <span className="slider"></span>
            </label>    
        </div>    
      </div>

      <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>

        {/* Camera access for the detection */}
        <div className="leftPanel">
          <p>left Panel</p>
          <div className="leftPanelCameraContainer">
            <LeftPanelCameraAccess isActive={isCameraActive} toggleCamera={toggleCamera} />
          </div>
        </div>

        {/* Chatbot */}
        <div className="rightPanel">
          <p>Right Panel</p>
          <div className='chatbot'>
          <ChatBotUi></ChatBotUi>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Main;
