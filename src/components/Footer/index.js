import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { animateScroll as scroll } from "react-scroll";
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
	SocialIconLink,
	StyledFooterLinks,
	SocialLogoContainer,
} from "./FooterElements";
// import { ExternalLink } from "react-external-link";

const openGithub = () => {
	window.location.href = "https://github.com/0xJozeth";
	return null;
};

const openLinkedIn = () => {
	window.location.href = "https://linkedin.com/in/glenfgraham";
	return null;
};

const openTwitter = () => {
	window.location.href = "https://twitter.com";
	return null;
};

const toggleHome = () => {
	scroll.scrollToTop();
};

const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Quick Links</FooterLinkTitle>
							<FooterLink to="/" onClick={toggleHome}>
								Home
							</FooterLink>
							<StyledFooterLinks onClick={openGithub}>GitHub</StyledFooterLinks>
							<StyledFooterLinks onClick={openLinkedIn}>
								LinkedIn
							</StyledFooterLinks>
							<StyledFooterLinks onClick={openTwitter}>
								Twitter
							</StyledFooterLinks>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogoContainer>
							<SocialLogo to="\" onClick={toggleHome}>
								GLEN GRAHAM
							</SocialLogo>
						</SocialLogoContainer>
						<WebsiteRights>
							Glen Graham © {new Date().getFullYear()} All rights reserved.
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink
								href="https://github.com/0xJozeth"
								target="_blank"
								aria-label="Github"
							>
								<FaGithub />
							</SocialIconLink>
							<SocialIconLink
								href="https://linkedin.com/in/glenfgraham"
								target="_blank"
								aria-label="LinkedIn"
							>
								<FaLinkedin />
							</SocialIconLink>
							<SocialIconLink
								href="https://twitter.com/0xjozeth"
								target="_blank"
								aria-label="Twitter"
							>
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink
								href="emailto:glen.f.graham@gmail.com"
								target="_blank"
								aria-label="Email"
							>
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
