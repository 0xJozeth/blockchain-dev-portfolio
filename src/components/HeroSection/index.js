import React, { useState } from 'react';
import './HeroSection.css';
import Video from '../../videos/eth_video_1_comp.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../../HeroButtonElements.js';
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-scroll';


const activeScroll = () => {
    scroll.scrollMore()
}

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = ()=> {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg className="overlay" autoPlay loop muted src={Video} type='video/mp4' />  
            </HeroBg>
            <HeroContent>
                <HeroH1>GLEN GRAHAM</HeroH1>
                <HeroP>
                    Smart Contract Programmer. Blockchain Developer and Frontend Developer. 
                </HeroP>
                <HeroBtnWrapper>
                    <Link>
                    <Button to='about' 
                    smooth={true}
                    duration={1250}
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary ='true'
                    dark='true'>
                        Learn More {hover ? <ArrowForward /> : <ArrowRight 
                        />} 
                    </Button>
                    </Link> 
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
