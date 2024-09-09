import React, { useState } from 'react';
import './style/settings-button.css';

const SettingsButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    console.log(`${option} clicked`);
    setIsOpen(false); 
  };

  return (
    <div className="settings-button-container">
      <button className="settings-button" onClick={handleButtonClick}>
        {/* Hamburger Menu Icon: Three lines */}
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li onClick={() => handleOptionClick('Account')}>Account</li>
            <li onClick={() => handleOptionClick('History')}>History</li>
            <li onClick={() => handleOptionClick('Settings')}>Settings</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SettingsButton;
