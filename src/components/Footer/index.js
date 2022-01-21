import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const toggleHome = () => {
    scroll.scrollToTop()
}

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Quick Links</FooterLinkTitle>
                            <FooterLink to='/' onClick={toggleHome}>Home</FooterLink> 
                            <FooterLink to="https://github.com/0xJozeth">GitHub</FooterLink>
                            <FooterLink to="https://linkedin.com/in/glenfgraham">LinkedIn</FooterLink>
                            <FooterLink to="https://twitter.com/0xjozeth">Twitter</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        {/* <SocialLogo>
                            GLEN GRAHAM
                        </SocialLogo> */}
                        <WebsiteRights>Glen Graham © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink 
                            href="https://github.com/0xJozeth" 
                            target="_blank" 
                            aria-label="Github">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink 
                            href="https://linkedin.com/in/glenfgraham" 
                            target="_blank" 
                            aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink 
                            href="https://twitter.com/0xjozeth" 
                            target="_blank" 
                            aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink 
                            href="emailto:glen.f.graham@gmail.com" 
                            target="_blank" 
                            aria-label="Email">
                                <MdEmail />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
