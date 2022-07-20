import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookAppoinment from './BookAppoinment';
import Service from './Service';
import ServiceSlots from './ServiceSlots';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment,setTreatment] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div>
                <h2 className='text-center text-xl text-secondary'>Available Services on {format(date, 'PP')}</h2>
                <p style={{ color: '#939393' }} className='text-center text-sm'>Please select a service.</p>
            </div>
            <div className='w-3/4 mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto'>
                   {
                    services.map(service=><Service key={service._id} service={service}></Service>)
                   }
            </div>
            <h2 className='text-center text-xl text-secondary mt-24'>Available Slots on {format(date, 'PP')}</h2>
            <div className='w-3/4 mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto'>
                   {
                    services.map(slot=><ServiceSlots setTreatment={setTreatment} key={slot._id} slot={slot}></ServiceSlots>)
                   }
            </div>
            {treatment && <BookAppoinment 
             date={date} 
             treatment={treatment}
             setTreatment={setTreatment}
             ></BookAppoinment>}
        </div>

    );
};

export default AvailableAppointment;