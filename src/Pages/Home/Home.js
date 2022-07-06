import React from 'react';
import Banner from './Banner';

import InfoContainer from './InfoContainer';
import ServicesContainer from './ServicesContainer';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoContainer></InfoContainer>
            <ServicesContainer></ServicesContainer>
        </div>
    );
};

export default Home;