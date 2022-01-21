import React from 'react'
import { PortfolioContainer, PortfolioH1, PortfolioWrapper, PortfolioCard, PortfolioIcon, PortfolioH2, PortfolioP, PortfolioBtnWrap } from './PortfolioElements';
import Eth1 from '../../images/eth_logo_1.svg';
import Sol1 from '../../images/sol_logo_1.svg';
// import Bsc1 from '../../images/bsc_logo_1.svg';
import Cloudy from '../../images/cloudy.png';
// import EthVid3 from '../../videos/eth_video_3_comp.mp4';
import { Button } from '../../ButtonElements';


const Portfolio = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2, buttonAddress }) => {
    return (
        <PortfolioContainer id="portfolio">
            <PortfolioH1>My Portfolio</PortfolioH1>
            <PortfolioWrapper>
                <PortfolioCard>
                    <PortfolioIcon src={Eth1} style={{ width: 100, height: 100 }} alt='Ethereum-logo' />
                    <PortfolioH2>Ethereum Bank Contract</PortfolioH2>
                    <PortfolioP>An Ethereum smart contract capable of facilitating 
                        ERC-20 token deposits, withdrawals and more. Built using Remix IDE and the Ropsten Test Network.
                        </PortfolioP>
                        <PortfolioBtnWrap>
                        <Button>
                                <a 
                                href="https://github.com/0xJozeth/CryptoBank" 
                                target="_blank"
                                style={{color: '#fff', textDecoration:"none" }} 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}>View Source Code
                                </a>
                            </Button>
                        </PortfolioBtnWrap>
                </PortfolioCard>
                <PortfolioCard>
                    <PortfolioIcon src={Sol1} style={{ width: 100, height: 100 }} alt='solana-logo'/>
                    <PortfolioH2>Solana Gif Portal</PortfolioH2>
                    <PortfolioP>A Web3 Solana decentralized application allowing gif images 
                        directly to the Solana blockchain.
                        </PortfolioP>
                        <PortfolioBtnWrap>
                            <Button>
                                <a 
                                href="https://github.com/0xJozeth/Solana-Web3-Portal.git" 
                                target="_blank"
                                style={{color: '#fff', textDecoration:"none" }}  
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}>View Source Code
                                </a>
                                </Button>
                        </PortfolioBtnWrap>
                </PortfolioCard>
                <PortfolioCard>
                    <PortfolioIcon src={Cloudy} style={{ width: 100, height: 100 }} alt='binance-logo'/>
                    <PortfolioH2>Weather App</PortfolioH2>
                    <PortfolioP>An intuitive API-integrated Weather app capable of displaying accurate weather conditions based on geolocation. This app was built in React.
                        </PortfolioP>
                        <PortfolioBtnWrap>
                            <Button>
                                <a 
                                href="https://github.com/0xJozeth/weather-react-app.git" 
                                target="_blank"
                                style={{color: '#fff', textDecoration:"none" }}  
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}>View Source Code
                                </a>
                                </Button>
                        </PortfolioBtnWrap>
                </PortfolioCard>
            </PortfolioWrapper>
        </PortfolioContainer>
    )
}

export default Portfolio
