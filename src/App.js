import React from 'react';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
//import component
import Home from './component/Home/Home';
import About from './component/About/About';
import Skills from './component/Skills/Skills';
import Contact from './component/Contact/Contact';
import Header from './component/Header';
import Erorr from './component/Erorr'
import './App.css';



function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About"  component={About} />
        <Route path="/Skills" component={Skills} />
        <Route path="/Contact" component={Contact} />
        <Route component={Erorr} />
      </Switch>
    </Router>
  );
}

export default App;
