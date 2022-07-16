import React from 'react';
import axios from 'axios';
import './App.css';

import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Feedback from '../Feedback/Feedback';
import Thanks from '../Thanks/Thanks';

import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Route  path="/" exact>
            <Feeling />
          </Route>

          <Route exact path="/understanding">            
            <Understanding />
          </Route>

          <Route exact path="/support">            
            <Support />
          </Route>

          <Route exact path="/comments">            
            <Comments />
          </Route>

          <Route exact path="/feedback">            
            <Feedback />
          </Route>

          <Route exact path="/thanks">            
            <Thanks />
          </Route>

    </div>
    </Router>
  );
}

export default App;
