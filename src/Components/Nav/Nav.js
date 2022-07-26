import "./Nav.css";

function Nav() {
  return (
    <nav className="header-nav">
      <p>Danya Tellez</p>
      <ul className="nav-menu">
        <li>
          <a>Purpose</a>
        </li>
        <li>
          <a>Training</a>
        </li>
        <li>
          <a>Arbonne</a>
        </li>
        <li>
          <button className="header-nav-btn">Get in Touch</button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;