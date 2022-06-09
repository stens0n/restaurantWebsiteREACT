import React from 'react';

import { 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper,
    TextWrapper2, 
    TopLine, 
    Heading, 
    SubTitle,
    ImgWrap,
    Img

} from './FeatureElements';



const InfoSection = ({
    lightBg, 
    id, 
    imgStart,
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description,
    buttonLabel, 
    img, 
    alt,
    primary,
    dark,   
    dark2
    }) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}> 
                <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    
                    <Heading lightText={lightText}>{headline}</Heading>
                    
                    <SubTitle darkText={darkText}>{description}</SubTitle>
                    
                    <br></br>
                    
                </TextWrapper>
                </Column1>
                <Column2>
                <TextWrapper2>
                    <TopLine>{topLine}</TopLine>
                    
                    <Heading lightText={lightText}>{headline}</Heading>
                    
                    <SubTitle darkText={darkText}>{description}</SubTitle>
                    
                    <br></br>
                    
                </TextWrapper2>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
  )
};

export default InfoSection