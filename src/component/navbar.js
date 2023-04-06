import React from "react";
import "./navbar.css";
import { Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
function navbar() {
  return (
    

    <nav>
      
    <div className="logo">
        <img src={logo} alt="Logo" />
        </div>
        
    <ul className="menu">
        <li><Link className="nav-link-title" to={"/"}>
            Home
          </Link></li>
        <li><Link className="nav-link-title" to={"/about"}>
            About
          </Link></li>

        
            <li>  <Link className="nav-link-title" to={"#"}>
            Features
          </Link>  </li>
           
        <li><Link className="nav-link-title" to={"/Contact-us"}>
            Contacts Us
          </Link></li>
        <li><Link className="nav-link-title" to={"/partner-program"}>
           Partner Program
          </Link></li>

          <li> <Link className="nav-link-title" to={"#"}>
            Join Now
          </Link>  </li>

    </ul>

</nav>
  );
}

export default navbar;
