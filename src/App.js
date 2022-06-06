import React from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle as GS} from './globalStyles';

function App() {
  return (
    <Router>
      <GS />
      <Navbar />
    </Router>
  );
}

export default App;
