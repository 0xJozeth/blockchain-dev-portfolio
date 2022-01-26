import React from "react";
import { Button } from "../../ButtonElements.js";
import {
	ConnectContainer,
	ConnectWrapper,
	ConnectRow,
	Column1,
	Column2,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	BtnWrap,
	ConnectImgWrap,
	ConnectImg,
} from "./ConnectElements";

const openLinkedIn = () => {
	window.location.href = "https://linkedin.com/in/glenfgraham";
	return null;
};

const ConnectSection = ({
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
	dark2,
	buttonAddress,
}) => {
	return (
		<>
			<ConnectContainer lightBg={lightBg} id={id}>
				<ConnectWrapper>
					<ConnectRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle darkText={darkText}>{description}</Subtitle>
								<BtnWrap>
									<Button
										onClick={openLinkedIn}
										style={{ color: "#fff", textDecoration: "none" }}
										smooth={true}
										duration={500}
										spy={true}
										exact="true"
										offset={-80}
										primary={primary ? 1 : 0}
										dark={dark ? 1 : 0}
										dark2={dark2 ? 1 : 0}
									>
										{buttonLabel}
									</Button>
								</BtnWrap>
							</TextWrapper>
						</Column1>
						<Column2>
							<ConnectImgWrap>
								<ConnectImg
									src={img.default}
									style={{ height: 400 }}
									alt={alt}
								/>
							</ConnectImgWrap>
						</Column2>
					</ConnectRow>
				</ConnectWrapper>
			</ConnectContainer>
		</>
	);
};

export default ConnectSection;
