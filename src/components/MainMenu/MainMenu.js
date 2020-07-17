import React from 'react';
import logo from '../../logo.svg'
import { BrowserRouter as Link } from 'react-router-dom';

function MainMenu() {

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
       
        </ul>
      </nav>


    )
}

export default MainMenu;