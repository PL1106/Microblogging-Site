import SettingsButton from './SettingsButton'

export default function Header() {

  const handleSettingsClick = () => {
    console.log('Search button clicked');
  };
  return (
    <header className="header">
      <h1>Micro-blogging Site</h1>
      <input type="text" placeholder="Search..." className="search-input" />
      <SettingsButton onClick={handleSettingsClick} />
    </header>
  );
}