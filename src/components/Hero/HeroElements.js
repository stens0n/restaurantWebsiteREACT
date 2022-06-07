import styled from 'styled-components';
import ImgBg from '../../images/i3.jpg'

export const HeroContainer = styled.div`
    background: linear-gradient(to right, 
    rgba(0,0,0,7), 
    rgba(0,0,0,0.1)), url(${ImgBg});
    
    height: 100vh;
    background-position: center;
    background-size: cover;
`;

export const HeroContent = styled.div`
    height: calc(100vh, -80px);
    max-height: 100%;
    width: 100vw;
    padding: 0rem calc((100vq - 1300px) /2 );
    
`;

export const HeroItems = styled.div`
    font-weight: bold;
    line-height: 1;
    text-transform: uppercase;
    color: #fff;
    width: 650px;
    padding: 0 2rem;
    max-height: 100%;
    height: 100vh;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    display: flex;

    @media and (max-width: 650px) {
        width: 100%;
    };
`;


export const HeroH1 = styled.h1`
    font-size: clamp(2.5rem, 10vw);
    letter-spacing: 3px;
    margin-bottom: 1rem;
    box-shadow: 3px 5px #e9a23;
    
`;


export const HeroP = styled.p`
    font-size: clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 2rem;
    
`;


export const HeroBtn = styled.button`
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border: none; 
    background: #e31837;
    color: #fff;
    transition: 0.229s ease-in-out;


    &:hover { 
        background: #ffc500;
        transition: 0.2 ease-out;
        cursor: pointer;
        color: #000;

    }
`;


