import React from 'react';
import Navbar from '../Navbar';
import {HeroContainer,
        HeroContent,
        HeroItems,
        HeroH1,
        HeroP,
        HeroBtn 
        } from './HeroElements';

const Hero = () => {
  return (
    <HeroContainer>
      <Navbar/>
      <HeroContent> 
        <HeroItems> 
          <HeroH1>Greatest Food Ever</HeroH1>
          <HeroP>Ready in minutes!</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>

    </HeroContainer>
  )
}

export default Hero