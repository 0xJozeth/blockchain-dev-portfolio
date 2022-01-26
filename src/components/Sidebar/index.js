import React from "react";
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarRoute,
} from "./SidebarElements";

const openLinkedIn = () => {
	window.location.href = "https://linkedin.com/in/glenfgraham";
	return null;
};

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="about" onClick={toggle}>
						About
					</SidebarLink>
					<SidebarLink to="github" onClick={toggle}>
						Github
					</SidebarLink>
					<SidebarLink to="portfolio" onClick={toggle}>
						Portfolio
					</SidebarLink>
					<SidebarLink to="contact" onClick={toggle}>
						Contact
					</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SidebarRoute to="contact" onClick={openLinkedIn}>
						Visit LinkedIn
					</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
