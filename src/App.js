import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle as GS} from './globalStyles';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <GS /> 
      <Hero />
    </Router>
  );
}

export default App;
