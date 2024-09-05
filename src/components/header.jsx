import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Microblogging Site</h1>
      <input type="text" placeholder="Search..." className="search-input" />
    </header>
  );
}

export default Header;

