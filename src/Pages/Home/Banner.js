import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
const Banner = () => {
    return (
        <div style={{
            marginTop:"-5%",
            background:`url(${bg})`,
            backgroundSize:'cover'
            }} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse -mt-52">
                <img style={{ width: '594px', height: '355px' }} src={chair} alt="chair images" />
                <div style={{ width: '655px', height: '266px' }} className='mr-6'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary uppercase font-bold bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                </div>
            </div>
            <div>
            
            </div>
        </div>
    );
};

export default Banner;