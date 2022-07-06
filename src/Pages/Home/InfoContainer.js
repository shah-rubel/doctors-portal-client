import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const InfoContainer = () => {
    const card1 = {title:'Opening Hours'};
    const card2 = {title:'Visit our location'};
    const card3 = {title:'Contact us now'};
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5  place-items-center'>
            <InfoCard card={card1} bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
            <InfoCard card={card2} bgClass="bg-accent" img={marker}></InfoCard>
            <InfoCard card={card3} bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
        </div>
    );
};

export default InfoContainer;