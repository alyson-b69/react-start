import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Organiser from './components/Organiser/Organiser'
import MainMenu from './components/MainMenu/MainMenu'

function App() {
  return (
    <Router>
    <div className="App">
      <MainMenu />
      <div className="main">
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>

        <Route exact path="/">
        <Home />
        </Route>
        <Route exact path="/organiser-son-projet">
        <Organiser />
        </Route>
        
      </Switch>
      </div> 
      <Footer />
    </div>
  </Router>
);



}
 

export default App;
