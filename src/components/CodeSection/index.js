import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import { Link } from 'react-scroll';
import { 
    CodeContainer, 
    CodeWrapper, 
    CodeRow, 
    Column1,
    Column2,
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap,
    CodeImgWrap,
    CodeImg,
    ArrowForward,
    ArrowRight
} from './CodeElements';


const CodeSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2, buttonAddress }) => {
    
    const [hover, setHover] = useState(false)

    const onHover = ()=> {
        setHover(!hover)
    }

    return (
        <>
          <CodeContainer lightBg={lightBg} id={id}>
              <CodeWrapper>
                  <CodeRow imgStart={imgStart}>
                      <Column1>
                        <TextWrapper>
                          <TopLine>{topLine}</TopLine>
                          <Heading lightText={lightText}>{headline}</Heading>
                          <Subtitle darkText={darkText}>{description}</Subtitle>                             
                        <BtnWrap>
                            <Link>
                            <Button>
                                <a href="https://github.com/0xjozeth" 
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
                            <Link>
                            <Button to='portfolio' 
                                style={{color: '#fff', textDecoration:"none", background: "#483d8b" }}  
                                smooth={true}
                                duration={1250}
                                onMouseEnter={onHover} 
                                onMouseLeave={onHover}
                                primary ='true'
                                dark='true'>
                        See Portfolio {hover ? <ArrowRight 
                        /> : <ArrowForward /> } 
                    </Button>
                    </Link>
                        </BtnWrap>
                        </TextWrapper>
                        </Column1>
                            <Column2>
                                <CodeImgWrap>
                                    <CodeImg src={img.default} style={{ height: 400 }} alt={alt}/>
                                </CodeImgWrap>
                            </Column2>
                  </CodeRow>
              </CodeWrapper>
            </CodeContainer>  
        </>
    );
};

export default CodeSection