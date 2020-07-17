import React from 'react';
import logo from '../../logo.svg'
import './MainMenu.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function MainMenu() {
console.log(Router);

    return(
<nav className="mainMenu">
      <img src={logo} alt="logo React" width="150px"/>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/organiser-son-projet">Organiser son projet</Link>
          </li>
          <li>
            <Link to="/redux">Redux</Link>
          </li>
        </ul>
      </nav>


    )
}

export default MainMenu;