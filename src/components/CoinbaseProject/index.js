import React from "react";
import { Button } from "../../ButtonElements.js";
import { Link } from "react-scroll";

import {
	CoinbaseContainer,
	CoinbaseWrapper,
	CoinbaseRow,
	Column1,
	Column2,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	BtnWrap,
	ImgWrap,
	Img,
} from "./CoinbaseElements";

//Open Link Functionality
const openLink = () => {
	window.location.href =
		"https://61faabf67fe49a00078e2105--admiring-wiles-064186.netlify.app/";
	return null;
};
const openRepo = () => {
	window.location.href = "https://github.com/0xJozeth/coinbase-blockchain-app";
	return null;
};

const CoinbaseProject = ({
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
			<CoinbaseContainer
				id={id}
				style={{
					backgroundImage: "url(/img/coinbase-bg-full.png)",
				}}
			>
				<CoinbaseWrapper>
					<CoinbaseRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle darkText={darkText}>{description}</Subtitle>
								<BtnWrap>
									<Link>
										<Button
											onClick={openLink}
											target={"_blank"}
											rel='noopener noreferrer'
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
										<Button
											onClick={openRepo}
											target={"_blank"}
											rel='noopener noreferrer'
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
					</CoinbaseRow>
				</CoinbaseWrapper>
			</CoinbaseContainer>
		</>
	);
};

export default CoinbaseProject;
