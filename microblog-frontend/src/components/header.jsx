import React, { useState, useEffect } from 'react';
import SettingsButton from './SettingsButton';

export default function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    setSearchTerm('');
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <header className="header">
      <h1>Micro-blogging Site</h1>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyPress={handleSearchKeyPress}  
          placeholder="Search comments..."
          className="search-input"
        />
      </div>
      <SettingsButton onClick={() => console.log('Settings button clicked')} />
    </header>
  );
}
