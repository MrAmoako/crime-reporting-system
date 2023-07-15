import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
    <a href="/" className="navbar-logo">Crime Reporting System</a>
      <div className="navbar-container">
         <a href="/" className="navbar-item">Home</a>
          <a href="/report" className="navbar-item">Report</a>
          <a href="/aboutpage" className="navbar-item">About</a>
      </div>
    </nav>
  );
};

export default Navbar;
