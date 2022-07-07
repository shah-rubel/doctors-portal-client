import React from 'react';
import Appoinment from './Appoinment';
import Banner from './Banner';

import InfoContainer from './InfoContainer';
import ServicesContainer from './ServicesContainer';
import Testimonial from './Testimonial';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoContainer></InfoContainer>
            <ServicesContainer></ServicesContainer>
            <Appoinment></Appoinment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;