import React, { useState, useEffect } from "react";
import { Button } from "../../ButtonElements.js";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ primary, dark, dark2, toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 320) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	const openLinkedIn = () => {
		window.location.href = "https://linkedin.com/in/glenfgraham";
		return null;
	};

	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<Nav scrollNav={scrollNav}>
					<NavbarContainer>
						<NavLogo to='/' onClick={toggleHome}>
							Glen Graham
						</NavLogo>
						<MobileIcon onClick={toggle}>
							<FaBars />
						</MobileIcon>
						<NavMenu>
							<NavItem>
								<NavLinks
									to='about'
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-80}
								>
									About
								</NavLinks>
							</NavItem>

							<NavItem>
								<NavLinks
									to='github'
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-80}
								>
									My Github
								</NavLinks>
							</NavItem>

							<NavItem>
								<NavLinks
									to='coinbase'
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-80}
								>
									Featured Projects
								</NavLinks>
							</NavItem>

							<NavItem>
								<NavLinks
									to='portfolio'
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-80}
								>
									Portfolio
								</NavLinks>
							</NavItem>

							<NavItem>
								<NavLinks
									to='contact'
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-80}
								>
									Contact
								</NavLinks>
							</NavItem>

							{/* <NavItem>
                                    <NavLinks to='proficiencies'
                                         smooth={true}
                                         duration={500}
                                         spy={true}
                                         exact='true'
                                         offset={-80}
                                    >Proficiencies</NavLinks>
                                </NavItem> */}

							{/* <NavItem>
                                    <NavLinks to='timeline'
                                         smooth={true}
                                         duration={500}
                                         spy={true}
                                         exact='true'
                                         offset={-80}
                                    >Timeline</NavLinks>
                                </NavItem> */}
							{/* 
                                <NavItem>
                                    <NavLinks to='tokens'
                                     smooth={true}
                                     duration={500}
                                     spy={true}
                                     exact='true'
                                     offset={-80}
                                    >Get Tokens</NavLinks>
                                </NavItem> */}
						</NavMenu>
						<NavBtn>
							<Button
								onClick={openLinkedIn}
								style={{ color: "#fff", textDecoration: "none" }}
								smooth={true}
								duration={500}
								spy={true}
								exact='true'
								offset={-80}
								primary={primary ? 1 : 0}
								dark={dark ? 1 : 0}
								dark2={dark2 ? 1 : 0}
							>
								Visit LinkedIn
							</Button>
						</NavBtn>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;
