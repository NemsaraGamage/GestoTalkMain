import React, { useRef } from 'react';
import Webcam from 'react-webcam';
import '../../components/styles.css';

const CameraAccess = ({ isActive, toggleCamera }) => {
  const webcamRef = useRef(null);

  return (
    <div className="leftPanelCamera">
      <div className="cameraControls">
        <h2>Sign Here</h2>

        <div>
          <p>Camera Access</p>
          <label className="switch">
            <input type="checkbox" checked={isActive} onChange={toggleCamera} />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      {isActive && (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="webcam"
        />
      )}
    </div>
  );
};

export default CameraAccess;
