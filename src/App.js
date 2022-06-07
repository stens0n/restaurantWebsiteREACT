import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle as GS} from './globalStyles';
import Hero from './components/Hero';
import {productData} from './components/Products/data';

function App() {
  return (
    <Router>
      <GS /> 
      <Hero />
      <Products heading='Choose Your Favorite' data={productData} />
    </Router>
  );
}

export default App;
