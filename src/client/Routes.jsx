import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import About  from './components/About';
import Contact from './components/Contact';

class Routes extends Component {

  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    )
  }
}

export default Routes;