import React from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom';

function NavBar() {
 
  // const location = useLocation();
  return (
    <nav className="navbar navbar-light navbar-expand-lg">

        <Link to ="/" className="navbar-brand text-white">Rachel Kenney</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar1">
            
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
                <Link to = "/About" className="nav-link atag">About</Link>
            </li>

            <li className="nav-item active">
                <Link to = "/Contact" className="nav-link atag">Contact</Link>
                
            </li>
      
            <li className="nav-item ">
                <Link to = "/Portfolio" className="nav-link atag">Portfolio</Link>
                
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default NavBar;