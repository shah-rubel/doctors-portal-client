import React from 'react';
import appoinment from '../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <div style={{
            background: `url(${appoinment})`,
        }} className="mt-36 ">
            <div className='text-center pt-16 mb-10'>
                <h2 className='text-xl text-secondary font-bold '>Contact Us</h2>
                <p className='text-4xl text-white'>Stay connected with us</p>
            </div>
            <div>
                <div className="form-control flex flex-col items-center  pb-16 ">
                    <input type="email" placeholder="Email address" className="input w-[450px] h-12 mt-5 " />
                    <input type="text" placeholder="Subject" className="input w-[450px] h-12 mt-5 " />
                    <textarea className="textarea w-[450px] h-[136px] mt-5" placeholder="Your message"></textarea>
                    <button className=" w-[120px] h-12 btn btn-primary uppercase font-bold bg-gradient-to-r from-secondary to-primary text-white mt-5">Submit</button>
                </div>
            </div>
        </div>

    );

};

export default ContactUs;
