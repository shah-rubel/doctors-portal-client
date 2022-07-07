import React from 'react';
import Footer from '../Shared/Footer';
import Appoinment from './Appoinment';
import Banner from './Banner';
import ContactUs from './ContactUs';

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
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;