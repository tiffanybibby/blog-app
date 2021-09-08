import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/create-post">
          New Post
        </NavLink>   
          iv>
    </nav>
  );
}

export default Nav;
