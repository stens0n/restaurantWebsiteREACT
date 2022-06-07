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
    @media and (max-width: 650px) {
        width: 100%;
    };
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
`;

