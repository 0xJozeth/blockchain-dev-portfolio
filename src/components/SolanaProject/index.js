import React from "react";
import { Button } from "../../ButtonElements.js";
import { Link } from "react-scroll";

import {
	SolanaContainer,
	SolanaWrapper,
	SolanaRow,
	Column1,
	Column2,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	BtnWrap,
	ImgWrap,
	Img,
} from "./SolanaElements";

//Open Link Functionality
const openLink = () => {
	window.location.href =
		"https://61fc2ce2d65cf11a58900c4c--practical-lamarr-7c580f.netlify.app/";
	return null;
};
const openRepo = () => {
	window.location.href = "https://github.com/0xJozeth/Solana-Web3-Portal";
	return null;
};

const SolanaProject = ({
	lightBg,
	id,
	imgStart,
	topLine,
	lightText,
	headline,
	darkText,
	description,
	buttonLabel,
	buttonLabelAlt,
	img,
	alt,
	primary,
	dark,
	dark2,
	buttonAddress,
}) => {
	return (
		<>
			<SolanaContainer
				id={id}
				style={{
					backgroundImage: "url(/img/solana-bg-full.png)",
				}}
			>
				<SolanaWrapper>
					<SolanaRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle darkText={darkText}>{description}</Subtitle>
								<BtnWrap>
									<Link>
										<Button
											onClick={openLink}
											target='_blank'
											rel='noreferrer'
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
											{buttonLabelAlt}
										</Button>
										<Button>
											<a
												onClick={openRepo}
												// target='_blank'
												rel='noreferrer'
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
												{buttonLabel}
											</a>
										</Button>
									</Link>
								</BtnWrap>
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={img} style={{ height: 275 }} alt={alt} />
							</ImgWrap>
						</Column2>
					</SolanaRow>
				</SolanaWrapper>
			</SolanaContainer>
		</>
	);
};

export default SolanaProject;
