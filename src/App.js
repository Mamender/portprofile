//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import Header from './components/Header';
import Othres from './components/Othres';
import Experience from './components/Experience'

function App() {
  return (

    <Router>
      <Header />
      <Switch>

        <Route exact path='/' component={Home} />
        <Route path='/Othres' component={Othres} />
        <Route path='/Experience' component={Experience} />
      </Switch>
    </Router>





  );
}

export default App;
