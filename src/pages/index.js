import React,  {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive, homeObjSix } from '../components/InfoSection/Data';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import CodeSection from '../components/CodeSection';
import ConnectSection from '../components/ConnectSection';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };



    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle} />
         <HeroSection />
         <AboutSection {...homeObjOne} />
         {/* <InfoSection {...homeObjOne} /> */}
         <CodeSection {...homeObjTwo} />
         {/* <InfoSection {...homeObjTwo} /> */}
         <Portfolio />
         {/* <InfoSection {...homeObjThree} />
         <InfoSection {...homeObjFour} /> */}
         {/* <InfoSection {...homeObjFive} /> */}
         <ConnectSection {...homeObjSix} />
         {/* <InfoSection {...homeObjSix} /> */}
         <Footer />
        </>
    );
};

export default Home;
