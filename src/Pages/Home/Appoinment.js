import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appoinment from '../../assets/images/appointment.png';

const Appoinment = () => {
    return (
        <div style={{
            background:`url(${appoinment})
            `,
            
        }} className='flex items-center flex-1 '>
            <div className='ml-32 mr-7 -mt-40 sm:none lg:block'>
                <img src={doctor} alt="" />
            </div>
            <div className='pr-32 flex-1 '>
                <h2 className='text-xl text-secondary font-bold mt-6'>Appointment</h2>
                <h3 className='text-4xl text-white'>Make an appointment Today</h3>
                <p className='text-white  mt-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            </div>
        </div>
    );
};

export default Appoinment;