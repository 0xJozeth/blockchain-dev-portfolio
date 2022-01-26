import styled from "styled-components";

export const PortfolioContainer = styled.div`
	height: 1000px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #48c3da;

	@media screen and (max-width: 768px) {
		height: 1100px;
		padding-top: 200px;
	}

	@media screen and (max-width: 480px) {
		height: 1300px;
	}
`;

export const PortfolioBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%
    height: 100%;
    overflow: hidden;
    };
`;

export const PortfolioVideoBg = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background: #232a34;
`;

export const PortfolioWrapper = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	grid-gap: 16px;
	padding: 0 50px;

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		padding: 0 20px;
		margin: 0 auto;
	}
`;

export const PortfolioCard = styled.div`
	background: #fff;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 10px;
	max-height: 340px;
	padding: 30px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	transition: all 0.2s ease-in-out;
	cursor: pointer;

	&:hover {
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
`;

export const PortfolioIcon = styled.img`
	height: 160px;
	width: 160px;
	margin-bottom: 10px;
`;

export const PortfolioH1 = styled.h1`
	font-size: 2.5rem;
	color: #fff;
	margin-bottom: 64px;

	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`;

export const PortfolioH2 = styled.h2`
	font-size: 1rem;
	margin-bottom: 10px;
`;

export const PortfolioP = styled.p`
	font-size: 0.75rem;
	text-align: center;
`;

export const PortfolioBtnWrap = styled.div`
	display: flex;
	justify-content: flex-start;
`;

export const a = styled.a`
	border-radius: 50px;
	background: ${({ primary }) => (primary ? "#010606" : "#48c3da")};
	white-space: nowrap;
	margin: 30px;
	padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
	color: ${({ dark }) => (dark ? "#010606" : "#fff")};
	font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({ primary }) => (primary ? "#48c3da" : "#fff")};
	}
`;
