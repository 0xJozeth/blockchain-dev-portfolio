import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-scroll';
import { Button } from '../../ButtonElements.js';
import { 
    AboutContainer, 
    AboutWrapper, 
    AboutRow, 
    Column1,
    Column2,
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap,
    AboutImgWrap,
    AboutImg,
    ArrowForward, 
    ArrowRight
} from './AboutElements';

const activeScroll = () => {
    scroll.scrollMore()
}

// const AboutSection = () => {
//     const [hover, setHover] = useState(false)


const AboutSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2, buttonAddress }) => {

    const [hover, setHover] = useState(false)

    const onHover = ()=> {
        setHover(!hover)
    }
        return (
        <>
          <AboutContainer lightBg={lightBg} id={id}>
              <AboutWrapper>
                  <AboutRow imgStart={imgStart}>
                      <Column1>
                        <TextWrapper>
                          <TopLine>{topLine}</TopLine>
                          <Heading lightText={lightText}>{headline}</Heading>
                          <Subtitle darkText={darkText}>{description}</Subtitle>                             
                        <BtnWrap>
                            <Link>
                            <Button>
                                <a href="emailto:glen.f.graham@gmail.com"
                                style={{color: '#fff', textDecoration:"none" }}  
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}>{buttonLabel}</a>
                            </Button>
                            </Link>
                            {/* </BtnWrap>
                            <BtnWrap> */}
                            <Link>
                            <Button to='github' 
                                style={{color: '#000', textDecoration:"none", background: "#fff" }}  
                                smooth={true}
                                duration={1250}
                                onMouseEnter={onHover} 
                                onMouseLeave={onHover}
                                primary ='true'
                                dark='true'>
                        See My Code {hover ? <ArrowForward /> : <ArrowRight 
                        />} 
                    </Button>
                    </Link>
                        </BtnWrap>
                        </TextWrapper>
                        </Column1>
                            <Column2>
                                <AboutImgWrap>
                                    <AboutImg src={img.default} style={{ height: 400 }} alt={alt}/>
                                </AboutImgWrap>
                            </Column2>
                  </AboutRow>
              </AboutWrapper>
            </AboutContainer>  
        </>
    );
};

export default AboutSection