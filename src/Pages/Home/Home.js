import React from 'react';
import About from '../About/About';
import ActivitiesPicture from './ActivitiesPicture/ActivitiesPicture';
import Header from './Header';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <About></About>
            <ActivitiesPicture></ActivitiesPicture>
        </div>
    );
};

export default Home;