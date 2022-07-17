import React from 'react';
import axios from 'axios';
import './App.css';

import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Feedback from '../Feedback/Feedback';
import Thanks from '../Thanks/Thanks';
import Admin from '../Admin/Admin';

import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';


function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>We ❤️ Feedback</h1>
        <h4>We love to hear how you are doing!</h4>
      </header>
          <Route  path="/" exact>
            <Feeling />
          </Route>

          <Route path="/understanding" exact>            
            <Understanding />
          </Route>

          <Route path="/support" exact>            
            <Support />
          </Route>

          <Route path="/comments" exact>            
            <Comments />
          </Route>

          <Route path="/feedback" exact>            
            <Feedback />
          </Route>

          <Route path="/thanks" exact>            
            <Thanks />
          </Route>

          <ThemeProvider theme={darkTheme}>
          <Route path="/admin" exact>            
            <Admin />
          </Route>
          </ThemeProvider>
    </div>
    </Router>
    
  );
}

export default App;
