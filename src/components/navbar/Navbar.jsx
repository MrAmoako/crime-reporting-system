
const Navbar = () => {
  return (
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Crime Reporting System</a>
    <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/report">Report</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/aboutpage">About</a>
        </li>
      </ul>
  </div>
</nav>
  );
};

export default Navbar;
