import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav-shell page-card">
      <div className="brand-block">
        <span className="brand-kicker">React routing</span>
        <span className="brand-title">Session 3</span>
      </div>
      <div className="nav-links">
        <Link to="Home">home</Link>
        <Link to="About">about</Link>
        <Link to="Contact">Contact</Link>
        <Link to="Electrons">Electrons</Link>
      </div>
    </nav>
  );
}
