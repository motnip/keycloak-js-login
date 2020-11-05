import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Secured from './Secured';
import NoLogin from './NoLogin';
import './App.css';

function App() {

    return (
      <BrowserRouter>
        <div className="container">
          <ul>
            <li><Link to="/welcome">public component</Link></li>
            <li><Link to="/secured">secured component</Link></li>
          </ul>
          <Route exact path="/welcome" component={Welcome} />
          <Route path="/secured" component={Secured} />
          <Route path="/nologin" component={NoLogin} />
        </div>
      </BrowserRouter>
    );
}
export default App;