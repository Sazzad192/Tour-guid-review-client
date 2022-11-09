import React from 'react';
import About from '../About/About';
import OutSide from '../OutsideTour/OutSide';
import Header from './Header';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <About></About>
            <OutSide></OutSide>
        </div>
    );
};

export default Home;