import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './navbar';
import Editor from './editor';
import Heart from './heart';
import NotFound from './not-found';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div className="h-100">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Editor} />
        <Route exact path="/heart" component={Heart} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
