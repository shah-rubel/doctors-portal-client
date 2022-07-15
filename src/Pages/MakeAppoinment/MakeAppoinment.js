import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointBanner from './AppointBanner';
import AvailableAppointment from './AvailableAppointment';

const MakeAppoinment = () => {
    const [date, setDate] = useState(new Date());//initially today's date
    return (
        <div>
            
            <AppointBanner date={date} setDate={setDate}></AppointBanner>
            <AvailableAppointment date={date}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default MakeAppoinment;