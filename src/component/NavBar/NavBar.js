import React from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom';

function NavBar() {
 
  // const location = useLocation();
  return (
    <nav className="navbar navbar-dark navbar-expand-lg">

        <Link to ="/" className="navbar-brand text-white">Rachel Kenney</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar1">
            
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
                <Link to = "/About" className="nav-link atag" id="nav-link">About Me</Link>
            </li>

            <li className="nav-item">
                <Link to = "/Contact" className="nav-link atag" id="nav-link">Contact Me</Link>
                
            </li>
      
            <li className="nav-item ">
                <Link to = "/Portfolio" className="nav-link atag" id="nav-link">Web Design Portfolio</Link>
                
            </li>
            <li className="nav-item ">
                <Link to = "/Designs" className="nav-link atag" id="nav-link">Graphic Design</Link>
                
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default NavBar;