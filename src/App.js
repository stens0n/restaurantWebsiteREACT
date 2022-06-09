import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle as GS} from './globalStyles';
import Hero from './components/Hero';
import {productData} from './components/Products/data';
import Products from './components/Products';
import Feature from './components/Feature';
import { homeObjOne, 

  homeObjTwo, 

  homeObjThree,

  homeObjFour, 

  homeObjFive, 

  homeObjSix, 

  homeObjSeven, 

  homeObjEight,
 
  homeObjNiner} from './components/Feature/data'

function App() {
  return (
    <Router>
      <GS /> 
      <Hero />
      <Products heading="Our Favorite's" data={productData} />
      <Feature {...homeObjOne}/>


      <Feature {...homeObjTwo}/>
    </Router>
  );
}

export default App;
