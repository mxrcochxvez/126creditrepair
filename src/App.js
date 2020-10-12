import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router className="App">
      <Navigation />

      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/home' component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
