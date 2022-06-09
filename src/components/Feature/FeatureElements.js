import styled from 'styled-components';
import FeaturePic from '../../images/founderimg.jpg';


export const FeatureContainer = styled.div`
    background: linear-gradient(to right, 
        rgba(0,0,0,7), 
        rgba(0,0,0,0.1)), url(${FeaturePic});

        font-family: 'Times New Roman', Times, serif;
    
        min-height: 110vh;
        max-height: 200px;
        bakground-position: center;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #DBFF02;
        text-align: center;
        padding: 0 1rem;

        h1 {
            font-size: clamp(3rem, 5vw, 5rem);
        };

        p {
            margin-bottom: 1rem;
            font-size: clamp(1.5rem, 2vw, 2rem);
        };
    
`;

export const FeatureButton = styled.button`
        font-size: 1.4rem;
        padding: 0.6rem 3rem;
        border: none;
        background: #ffc500;
        color: #000;
        transition: 0.2 ease-in-out;

        &:hover {
            color: #fff;
            background: #e31837;
            transition: 0.2 ease-in-out;
            cursor: pointer;
        };
`;

export const InfoContainer = styled.div`
    color: #fff;
    background: ${ ( { lightBg } ) => ( lightBg ? '#f9f9f9' : '#010606' ) }
    ;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${ ( { imgStart } ) => ( imgStart ? `'col2 col1'` : `'col1 col2'` ) };

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`) };
    }

`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;


export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;


export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    padding-left: 60px;
`;

export const TextWrapper2 = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    padding-left: 270px;
`;

export const TopLine = styled.p`
    color: #027e92;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;


export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606') };

    @media screen and (max-width: 480px) {
        font-size: 32px;

    }
`;

export const SubTitle = styled.p`
    max-width: 440px;
    marigin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${ ( { darkText } ) => ( darkText ? '#010606': '#fff') };
`;

export const BtnWrap = styled.div`
    display:flex;
    content:flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;


export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;